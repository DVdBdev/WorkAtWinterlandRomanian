import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import QRCode from 'qrcode'

const siteUrl = process.env.SITE_URL || process.argv[2]

if (!siteUrl) {
  console.error('Set SITE_URL or pass a URL as an argument, for example: SITE_URL=https://example.com npm run generate:qr')
  process.exit(1)
}

const outputPath = fileURLToPath(new URL('../public/qr-code.svg', import.meta.url))
await fs.mkdir(new URL('../public', import.meta.url), { recursive: true })
await QRCode.toFile(outputPath, siteUrl, {
  type: 'svg',
  scale: 10,
  margin: 2,
  color: {
    dark: '#1f1a1a',
    light: '#faf7f2',
  },
})

console.log(`QR code generated at ${outputPath} for ${siteUrl}`)
