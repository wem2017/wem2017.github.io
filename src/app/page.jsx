/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
} from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { personal } from '@/data/personal'
import { experience } from '@/data/experience'
import { DownloadPdfButton } from '@/components/DownloadPdfButton'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let endLabel = typeof role.end === 'string' ? role.end : role.end.label

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-8 w-8" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex-1">
            <dd className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
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
      </dl>
    </li>
  )
}

function Resume() {
  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work experiences</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {experience.map((role, index) => (
            <Role key={index} role={role} />
          ))}
        </ol>
      </div>
    </>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="sm:16 mt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {personal.bio.greeting}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {personal.bio.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {personal.phone && (
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <PhoneIcon className="h-5 w-5 flex-none fill-zinc-500 dark:fill-zinc-400" />
                <span>{personal.phone}</span>
              </div>
            )}

            {personal.location && (
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <LocationIcon className="h-5 w-5 flex-none fill-zinc-500 dark:fill-zinc-400" />
                <span>{personal.location}</span>
              </div>
            )}

            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-2 text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
              title={personal.email}
            >
              <MailIcon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-blue-500 dark:fill-zinc-400 dark:group-hover:fill-blue-400" />
              <span>Email</span>
            </a>

            <a
              href={personal.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
              title="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-blue-500 dark:fill-zinc-400 dark:group-hover:fill-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.social.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
              title="GitHub"
            >
              <GitHubIcon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-blue-500 dark:fill-zinc-400 dark:group-hover:fill-blue-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
