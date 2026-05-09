// .github/scripts/fetch-rss.js
// يجلب النشرة من MailChimp RSS ويحولها لـ Markdown

import Parser from 'rss-parser'
import fs from 'fs'
import path from 'path'

const parser = new Parser()
const RSS_URL = process.env.MAILCHIMP_RSS_URL

if (!RSS_URL) {
  console.log('⚠️  MAILCHIMP_RSS_URL not set — skipping')
  process.exit(0)
}

const feed = await parser.parseURL(RSS_URL)
console.log(`📰 Found ${feed.items.length} items in RSS feed`)

let newCount = 0

for (const item of feed.items) {
  const date = new Date(item.pubDate || item.isoDate)
  const dateStr = date.toISOString().split('T')[0]
  const title = item.title || 'Newsletter'

  // Detect Arabic content
  const isArabic = /[\u0600-\u06FF]/.test(title)
  const lang = isArabic ? 'ar' : 'en'
  const dir = isArabic ? 'ar/news' : 'en/news'

  // Create slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^\w\u0600-\u06FF\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 50)

  const filename = `${dateStr}-${slug}.md`
  const filepath = path.join('content', dir, filename)

  // Skip if already exists
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  Already exists: ${filename}`)
    continue
  }

  // Clean content
  const content = (item.content || item.contentSnippet || '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .trim()
    .slice(0, 1000)

  const markdown = `---
title: "${title.replace(/"/g, "'")}"
date: "${dateStr}"
lang: "${lang}"
source: "mailchimp"
link: "${item.link || ''}"
---

${content}

[${isArabic ? 'اقرأ النشرة كاملة' : 'Read full newsletter'}](${item.link || '#'})
`

  fs.mkdirSync(path.dirname(filepath), { recursive: true })
  fs.writeFileSync(filepath, markdown, 'utf8')
  console.log(`✅ Created: ${filepath}`)
  newCount++
}

console.log(`\n🎉 Done! ${newCount} new posts created.`)
