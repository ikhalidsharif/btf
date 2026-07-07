const Parser = require('rss-parser')
const fs = require('fs')
const path = require('path')

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; BTF-NewsBot/1.0)',
  },
  customFields: {
    item: ['content:encoded', 'description']
  }
})

const RSS_URL = process.env.MAILCHIMP_RSS_URL || 'https://us16.campaign-archive.com/feed?u=dd98d3712532e7894f3bafc86&id=f3d779a516'

console.log(`Fetching RSS from: ${RSS_URL}`)

async function main() {
  let feed
  try {
    feed = await parser.parseURL(RSS_URL)
  } catch (e) {
    console.error('ERROR: Failed to fetch RSS:', e.message)
    process.exit(1)
  }

  console.log(`Found ${feed.items.length} items`)
  let newCount = 0

  for (const item of feed.items) {
    const date = new Date(item.pubDate || item.isoDate)
    const dateStr = date.toISOString().split('T')[0]
    const title = (item.title || 'Newsletter').trim()

    const isArabic = /[\u0600-\u06FF]/.test(title)
    const dir = isArabic ? 'ar/news' : 'en/news'

    // استخرج اسم الشهر من العنوان بدل رقم العدد
    const monthMatch = title.match(/(?:يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر|January|February|March|April|May|June|July|August|September|October|November|December)/i)
    const monthSlug = monthMatch ? monthMatch[0] : ''
    const slug = monthSlug ? `${dateStr}-${monthSlug}` : dateStr
    const issueNum = ''
    const filename = `${slug}.md`
    const filepath = path.join('content', dir, filename)

    if (fs.existsSync(filepath)) {
      console.log(`Already exists: ${filename}`)
      continue
    }

    const rawContent = item['content:encoded'] || item.description || item.content || ''
    const cleanContent = rawContent
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 800)

    const markdown = `---
title: "${title.replace(/"/g, "'")}"
date: "${dateStr}"
issue: "${issueNum}"
lang: "${isArabic ? 'ar' : 'en'}"
link: "${item.link || ''}"
---
${cleanContent}

[${isArabic ? 'اقرأ النشرة كاملة' : 'Read full newsletter'}](${item.link || '#'})
`

    fs.mkdirSync(path.dirname(filepath), { recursive: true })
    fs.writeFileSync(filepath, markdown, 'utf8')
    console.log(`Created: ${filepath}`)
    newCount++
  }

  console.log(`Done! ${newCount} new posts created.`)
}

main()
