/* @flow */
import * as React from 'react'
import RelatedPostsGroup from './RelatedPostsGroup'
import RelatedPostsCallout from './RelatedPostsCallout'
import type { SiteLink } from '../types'

/**
 * Related posts section
 */

export type Props = {
  relatedPages: Array<SiteLink>,
  topPages: Array<SiteLink>,
  pageCount: number
}

export const RelatedPostsSection = ({
  relatedPages,
  topPages,
  pageCount
}: Props) => (
  <div className='related-posts-section'>
    <div className='callout'>
      <RelatedPostsCallout pageCount={pageCount} />
    </div>
    <div className='group'>
      <RelatedPostsGroup
        pages={relatedPages}
        title='Other {CATEGORY} cheatsheets'
      />
    </div>
    <div className='group'>
      <RelatedPostsGroup pages={topPages} title='Top cheatsheets' />
    </div>
  </div>
)

export default RelatedPostsSection
