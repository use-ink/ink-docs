import React, { type ReactNode } from 'react'
import Translate, { translate } from '@docusaurus/Translate'
import PaginatorNavLink from '@theme/PaginatorNavLink'
import type { Props } from '@theme/DocPaginator'

export default function DocPaginator(props: Props): ReactNode {
  const { previous, next } = props
  return (
    <nav
      className="pagination-nav docusaurus-mt-lg max-w-[880px]"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      <span className="pagination-nav__info">Continue Learning</span>
      <div className="grid w-full grid-cols-2 gap-4">
        {previous && (
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc"
              >
                Previous
              </Translate>
            }
          />
        )}
        {next && (
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate id="theme.docs.paginator.next" description="The label used to navigate to the next doc">
                Next
              </Translate>
            }
            isNext
          />
        )}
      </div>
    </nav>
  )
}
