'use client'

export function DownloadPdfButton() {
  const handleDownload = () => {
    // Use the browser's native print dialog which produces pixel-perfect PDF
    // The @media print styles in tailwind.css handle the layout
    window.print()
  }

  return (
    <button
      onClick={handleDownload}
      className="print:hidden group inline-flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-800/5 transition hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
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
      Download PDF
    </button>
  )
}

