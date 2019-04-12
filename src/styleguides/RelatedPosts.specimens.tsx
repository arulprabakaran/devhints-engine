import React from 'react'
import RelatedPostsCallout from '../web/components/RelatedPostsCallout'
import RelatedPostsGroup from '../web/components/RelatedPostsGroup'

export default {
  RelatedPostsCallout: {
    view: () => <RelatedPostsCallout pageCount={200} />,
    description: `Related posts callout. Shown at the end of a page, around the colophon area. Provides a link to the home page.`,
    width: 300
  },
  RelatedPostsGroup: {
    view: () => (
      <RelatedPostsGroup
        title='Related posts'
        pages={[
          { path: '/vim', title: 'Vim' },
          { path: '/node', title: 'Node.js' },
          { path: '/sass', title: 'Sass' },
          { path: '/bash', title: 'Bash' }
        ]}
      />
    ),
    background: '#fafafa',
    padding: 16,
    width: 340
  },
  'RelatedPostsGroup/2': {
    view: () => (
      <RelatedPostsGroup
        title='Related posts'
        pages={[
          { path: '/sass', title: 'Sass' },
          { path: '/bash', title: 'Bash' }
        ]}
      />
    ),
    background: '#fafafa',
    padding: 16,
    width: 340
  }
}