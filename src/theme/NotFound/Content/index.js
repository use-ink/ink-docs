import React from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl pb-48 lg:pb-20', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="mb-12 text-center hero__title">
            <Translate id="theme.NotFound.title" description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <div className="flex items-center justify-center">
            <img alt="not found" src={useBaseUrl('/img/404.svg')} className="w-[500px] h-[500px]" />
          </div>
          <p className="text-center">
            <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <p className="text-center">
            Go back to the{' '}
            <Link to={useBaseUrl('/')} className="text-blue-500">
              ink! homepage
            </Link>{' '}
            or the{' '}
            <Link to={useBaseUrl('/docs/')} className="text-blue-500">
              ink! documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
