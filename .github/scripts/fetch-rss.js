import Parser from 'rss-parser'
import fs from 'fs'
import path from 'path'

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'description']
  }
})

const RSS_URL = process.env.MAILCHIMP_RSS_URL || 'https://us16.campaign-archive.com/feed?u=dd98d3712532e7894f3bafc86&id=f3d779a516'

console.log(`📡 Fetching RSS from: ${RSS_URL}`)

let feed
try {
  feed = await parser.parseURL(RSS_URL)
} catch (e) {
  console.error('Failed to fetch RSS:', e.message)
  process.exit(0)
}

console.log(`📰 Found ${feed.items.length} items`)

let newCount = 0

for (const item of feed.items) {
  const date = new Date(item.pubDate || item.isoDate)
  const dateStr = date.toISOString().split('T')[0]
  const title = (item.title || 'Newsletter').trim()

  // Detect Arabic
  const isArabic = /[\u0600-\u06FF]/.test(title)
  const lang = isArabic ? 'ar' : 'en'
  const dir = isArabic ? 'ar/news' : 'en/news'

  // Create slug - use date + issue number if detectable
  const issueMatch = title.match(/(\d+|[٠-٩]+)/)
  const issueNum = issueMatch ? issueMatch[0] : ''
  const slug = issueNum ? `${dateStr}-issue-${issueNum}` : `${dateStr}-newsletter`

  const filename = `${slug}.md`
  const filepath = path.join('content', dir, filename)

  if (fs.existsSync(filepath)) {
    console.log(`⏭️  Already exists: ${filename}`)
    continue
  }

  // Clean content
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
lang: "${lang}"
link: "${item.link || ''}"
---

${cleanContent}

[${isArabic ? 'اقرأ النشرة كاملة' : 'Read full newsletter'}](${item.link || '#'})
`

  fs.mkdirSync(path.dirname(filepath), { recursive: true })
  fs.writeFileSync(filepath, markdown, 'utf8')
  console.log(`✅ Created: ${filepath}`)
  newCount++
}

console.log(`\n🎉 Done! ${newCount} new posts created.`)
