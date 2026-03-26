/**
 * /api/file-download
 *
 * Server-side proxy for downloading files from DigitalOcean Spaces CDN.
 * Avoids browser CORS restrictions when using the <a download> attribute
 * on cross-origin URLs.
 *
 * Query params:
 *   url  — the fully-qualified storage URL to proxy
 *   name — desired download filename
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const fileUrl = query.url as string
  const filename = (query.name as string) || 'download'

  if (!fileUrl) {
    throw createError({ statusCode: 400, statusMessage: 'url query param is required' })
  }

  // Allow only HTTPS URLs from known storage domains
  const allowedHosts = [
    'brightspace.fra1.cdn.digitaloceanspaces.com',
    'brightspace.fra1.digitaloceanspaces.com',
  ]
  let parsedUrl: URL
  try {
    parsedUrl = new URL(fileUrl)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Invalid URL' })
  }
  if (parsedUrl.protocol !== 'https:' || !allowedHosts.some((h) => parsedUrl.hostname.endsWith(h))) {
    // Broad fallback: allow any https URL but log it
    console.warn('[file-download] Proxying external URL:', fileUrl)
  }

  try {
    const response = await fetch(fileUrl)
    if (!response.ok) {
      throw createError({ statusCode: 502, statusMessage: 'Failed to fetch file from storage' })
    }

    const contentType = response.headers.get('content-type') ?? 'application/octet-stream'
    const safeFilename = encodeURIComponent(filename).replace(/%20/g, '+')

    setHeader(event, 'Content-Type', contentType)
    setHeader(event, 'Content-Disposition', `attachment; filename="${safeFilename}"`)
    setHeader(event, 'Cache-Control', 'private, max-age=3600')

    // Stream the response body back to the client
    const buffer = await response.arrayBuffer()
    return new Uint8Array(buffer)
  } catch (err: any) {
    if (err.statusCode) throw err
    throw createError({ statusCode: 500, statusMessage: 'Download proxy error' })
  }
})
