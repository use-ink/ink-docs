import React from 'react'

export const Footer: React.FC = () => {
  const year = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="p-4 bg-background-100 dark:bg-background-800 w-full">
      <div className="max-w-biggest flex items-center md:justify-between flex-col md:flex-row mx-auto">
        <h5 className="opacity-80 m-0 p-0">© {year} Parity Technologies All Rights Reserved.</h5>
        <ul className="flex items-center md:justify-center p-0 m-0 mt-4 md:my-0 list-none md:gap-6 gap-4">
          <li>
            <a
              href="https://twitter.com/ink_lang"
              rel="noreferrer"
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-75 p-0 flex items-center"
            >
              <img src="/img/twitter.svg" className="w-8" alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/paritytech/ink-docs/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity duration-75 p-0 flex items-center"
            >
              <img src="/img/github.svg" className="w-8" alt="GitHub" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
