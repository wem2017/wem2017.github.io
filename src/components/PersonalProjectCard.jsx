'use client'

import Image from 'next/image'

export function PersonalProjectCard({ project }) {
  return (
    <li className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40">
      <div className="flex gap-4">
        {project.logo && (
          <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              src={project.logo}
              alt=""
              className="h-8 w-8 rounded-lg"
              unoptimized
            />
          </div>
        )}
        <div className="flex flex-1 items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h3>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-2 list-inside list-disc space-y-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
          {project.link && (
            <a
              href={project.link.href || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View →
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
