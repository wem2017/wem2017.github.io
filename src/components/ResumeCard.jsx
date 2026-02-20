'use client'

import Image from 'next/image'

export function WorkExperienceCard({ role }) {
  const startLabel = role.start || ''
  const endLabel = role.end || ''

  return (
    <li className="flex gap-4 px-4 py-4">
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-8 w-8 rounded-lg"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex-1">
            <dd className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dd className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              {role.title}
            </dd>
          </div>
          <div className="flex-shrink-0 text-right">
            <dd
              className="text-xs text-zinc-500 dark:text-zinc-400"
              aria-label={`${startLabel} until ${endLabel}`}
            >
              <time dateTime={startLabel}>{startLabel}</time>
              {' to '}
              <time dateTime={endLabel}>{endLabel}</time>
            </dd>
            {role.website && (
              <a
                href={role.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {role.website}
              </a>
            )}
          </div>
        </div>
        {role.responsibilities && (
          <dd className="mt-2 w-full">
            <ul className="list-inside list-disc space-y-0.5 text-sm text-zinc-600 dark:text-zinc-400">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </dd>
        )}
      </dl>
    </li>
  )
}

export function CertificationCard({ cert }) {
  let startLabel =
    typeof cert.start === 'string' ? cert.start : cert.start.label

  return (
    <li className="flex gap-4 px-4 py-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={cert.logo}
          alt=""
          className="h-7 w-7 rounded-lg"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Certification</dt>
        <dd className="w-full flex-none text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {cert.company}
        </dd>
        <dt className="sr-only">Organization</dt>
        <dd className="text-xs text-zinc-600 dark:text-zinc-400">
          {cert.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-500 dark:text-zinc-500">
          <time dateTime={cert.start}>{startLabel}</time>
        </dd>
      </dl>
    </li>
  )
}
