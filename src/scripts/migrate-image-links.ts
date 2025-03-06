import * as fs from 'fs/promises'
import * as path from 'path'
import * as readline from 'readline'

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function promptUser(question: string): Promise<boolean> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.toLowerCase().startsWith('y'))
    })
  })
}

async function findMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = []

  async function scanDir(directory: string) {
    const entries = await fs.readdir(directory, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        await scanDir(fullPath)
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
        files.push(fullPath)
      }
    }
  }

  await scanDir(dir)
  return files
}

export async function migrateImageLinks() {
  try {
    console.log('Finding markdown files in /docs directory...')
    const markdownFiles = await findMarkdownFiles('./docs')
    console.log(`\nFound ${markdownFiles.length} markdown files that will be processed:`)
    markdownFiles.forEach((file) => console.log(`- ${file}`))

    const shouldProceed = await promptUser('\nDo you want to proceed with the migration? (y/N): ')

    if (!shouldProceed) {
      console.log('Migration cancelled')
      rl.close()
      return
    }

    let totalReplacements = 0

    for (const filePath of markdownFiles) {
      try {
        // Read file content
        const content = await fs.readFile(filePath, 'utf-8')

        // More robust regex that extracts src and alt regardless of other attributes
        const modifiedContent = content.replace(
          /<img[^>]*?\s+src=["']([^"']+)["'][^>]*?(?:\s+alt=["']([^"']*)["'][^>]*?)?(?:\/>|>)/gi,
          (_, src, alt) => {
            // If alt is undefined or empty, use filename in title case
            if (!alt) {
              const filename = path.basename(src, path.extname(src))
              alt = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
            }

            return `![${alt}](${src})`
          },
        )

        // Write back to file if content changed
        if (content !== modifiedContent) {
          const replacements = (content.match(/<img/gi) || []).length
          totalReplacements += replacements
          await fs.writeFile(filePath, modifiedContent, 'utf-8')
          console.log(`Updated: ${filePath} (${replacements} replacements)`)
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error)
      }
    }

    console.log(`\nMigration completed with ${totalReplacements} total replacements`)
    rl.close()
  } catch (error) {
    console.error('Migration failed:', error)
    rl.close()
  }
}

migrateImageLinks()
