import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
  TelegramIcon,
} from '@/components/SocialIcons'
import { SimpleLayout } from '@/components/SimpleLayout'
import { personal } from '@/data/personal'

export const metadata = {
  title: 'Contact',
  description: 'Contact me',
}

function ContactCard({ icon: Icon, label, value, href, external = false }) {
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10">
        <Icon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {label}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group flex items-center gap-4 rounded-2xl border border-zinc-100 p-6 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700/40 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
      >
        {content}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-600 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
        >
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    )
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      {content}
    </div>
  )
}

export default function Contact() {
  return (
    <SimpleLayout title={personal.contact.title} intro={personal.contact.intro}>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ContactCard
          icon={MailIcon}
          label="Email"
          value={personal.email}
          href={`mailto:${personal.email}`}
        />
        <ContactCard
          icon={PhoneIcon}
          label="Phone"
          value={personal.phone}
          href={`tel:${personal.phone}`}
        />
        <ContactCard
          icon={LinkedInIcon}
          label="LinkedIn"
          value="Connect with me"
          href={personal.social.linkedin.url}
          external
        />
        <ContactCard
          icon={GitHubIcon}
          label="GitHub"
          value="Check out my code"
          href={personal.social.github.url}
          external
        />
        <ContactCard
          icon={TelegramIcon}
          label="Telegram"
          value="Message me"
          href={personal.social.telegram.url}
          external
        />
        <ContactCard
          icon={LocationIcon}
          label="Location"
          value={personal.location}
        />
      </div>
    </SimpleLayout>
  )
}
