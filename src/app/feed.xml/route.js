import { Feed } from 'feed'
import { personal } from '@/data/personal'
import { getAllArticles } from '@/lib/articles'

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    return new Response('<rss version="2.0"></rss>', {
      status: 200,
      headers: {
        'content-type': 'application/xml',
      },
    })
  }

  let author = {
    name: personal.fullName,
    email: personal.email,
  }

  let feed = new Feed({
    title: author.name,
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `${personal.copyright.text} ${personal.copyright.year}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    let publicUrl = `${siteUrl}/articles/${article.slug}`

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      content: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
