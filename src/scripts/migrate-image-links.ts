import * as fs from 'fs'
import * as path from 'path'
import { glob } from 'glob'

function capitalizeFileName(fileName: string): string {
  // Remove .svg extension and split by hyphen
  const words = fileName.replace('.svg', '').split('-')
  // Capitalize each word
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

async function migrateImageLinks() {
  try {
    // Find all markdown files in docs and versioned_docs directories
    const files = await glob('**/*.{md,mdx}', {
      ignore: ['node_modules/**'],
      cwd: process.cwd()
    })

    let totalReplacements = 0

    for (const file of files) {
      const filePath = path.join(process.cwd(), file)
      const content = fs.readFileSync(filePath, 'utf8')

      // Replace HTML img tags with Markdown format
      const newContent = content.replace(
        /<img src="\/img\/title\/([^"]+)" className="titlePic"([^>]*)\/>/g,
        (_, imagePath) => {
          const altText = capitalizeFileName(imagePath)
          totalReplacements++
          return `![${altText} Title Picture](/img/title/${imagePath})`
        }
      )

      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8')
        console.log(`Updated: ${file}`)
      }
    }

    console.log(`Total replacements made: ${totalReplacements}`)
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

migrateImageLinks()
