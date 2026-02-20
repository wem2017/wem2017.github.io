'use client'

import { useState } from 'react'

export function DownloadPdfButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    setIsGenerating(true)
    try {
      // Dynamically import html2pdf to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default

      const element = document.getElementById('resume-content')

      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'Wem_Senior_Software_Engineer_Resume.pdf',
        image: { type: 'jpeg', quality: 1 },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait',
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      }

      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="group inline-flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-800/5 transition hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          stroke="currentColor"
        />
      </svg>
      {isGenerating ? 'Generating PDF...' : 'Download PDF'}
    </button>
  )
}

