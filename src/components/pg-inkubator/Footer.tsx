import React from 'react'

export const Footer: React.FC = () => {
  const year = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="w-full p-4 bg-background-100 dark:bg-background-800">
      <div className="max-w-[1000px] flex items-center md:justify-between flex-col md:flex-row mx-auto">
        <h5 className="p-0 m-0 opacity-80">© {year} Use Ink All Rights Reserved.</h5>
        <ul className="flex items-center gap-4 p-0 m-0 mt-4 list-none md:justify-center md:my-0 md:gap-6">
          <li>
            <a
              href="https://twitter.com/ink_lang"
              rel="noreferrer"
              target="_blank"
              className="flex items-center p-0 transition-opacity duration-75 hover:opacity-80"
            >
              <img src="/img/twitter.svg" className="w-8" alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/use-ink/ink-docs/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-0 transition-opacity duration-75 hover:opacity-80"
            >
              <img src="/img/github.svg" className="w-8" alt="GitHub" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
