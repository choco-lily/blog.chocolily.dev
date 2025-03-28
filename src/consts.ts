export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'chocolily',
  DESCRIPTION:
    'chocolily\'s blog',
  EMAIL: 'x@chocolily.dev',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 4,
  SITEURL: 'https://blog.chocolily.dev',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/choco-lily', label: 'GitHub' },
  { href: 'https://x.com/Choco_Lily_', label: 'Twitter' },
  { href: 'x@chocolily.dev', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
