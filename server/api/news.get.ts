export default defineEventHandler(async () => {
  const RSS_URL = 'https://us16.campaign-archive.com/feed?u=dd98d3712532e7894f3bafc86&id=f3d779a516'
  
  try {
    const response = await fetch(RSS_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    const xml = await response.text()
    
    // Parse RSS items
    const items = []
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g)
    
    for (const match of itemMatches) {
      const item = match[1]
      
      const title = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] 
        || item.match(/<title>(.*?)<\/title>/)?.[1] || ''
      
      const link = item.match(/<link>(.*?)<\/link>/)?.[1]
        || item.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1] || ''
      
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
      
      const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
        || item.match(/<description>([\s\S]*?)<\/description>/)?.[1] || ''
      
      // Clean description
      const cleanDesc = description
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 300)

      const date = pubDate ? new Date(pubDate).toISOString().split('T')[0] : ''
      
      // Extract issue number
      const issueMatch = title.match(/[\(（]([٠-٩\d]+)[\)）]/)
      const issue = issueMatch?.[1] || ''

      items.push({ title, link, date, description: cleanDesc, issue })
    }
    
    return { items: items.slice(0, 22) }
  } catch (e) {
    return { items: [], error: String(e) }
  }
})
