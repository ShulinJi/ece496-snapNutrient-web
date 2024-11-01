// components/ManifestDebug.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ManifestDebug() {
  const [status, setStatus] = useState<string>('Checking...')

  useEffect(() => {
    async function checkManifest() {
      try {
        const manifestResponse = await fetch('/manifest.json')
        if (!manifestResponse.ok) {
          setStatus(`Manifest fetch failed: ${manifestResponse.status}`)
          return
        }

        const manifestData = await manifestResponse.json()
        setStatus(`Manifest found: ${JSON.stringify(manifestData, null, 2)}`)

        // Check if icons exist
        for (const icon of manifestData.icons || []) {
          const iconResponse = await fetch(icon.src)
          if (!iconResponse.ok) {
            setStatus(prev => `${prev}\nIcon ${icon.src} not found!`)
          }
        }
      } catch (error) {
        setStatus(`Error: ${error}`)
      }
    }

    checkManifest()
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-sm whitespace-pre-wrap">
      {status}
    </div>
  )
}