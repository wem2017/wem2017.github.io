import { Container } from '@/components/Container'
import { personal } from '@/data/personal'
import { experience, certificates } from '@/data/experience'
import { WorkExperienceCard, CertificationCard } from '@/components/ResumeCard'
import { DownloadPdfButton } from '@/components/DownloadPdfButton'
import { PersonalProjectCard } from '@/components/PersonalProjectCard'
import { technicalSkills, education, achievements } from '@/data/resume'
import { projects } from '@/data/projects'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
} from '@/components/SocialIcons'

export const metadata = {
  title: 'Resume - Senior Software Engineer',
  description:
    'Senior Software Engineer with 8+ years of experience in Mobile and Backend Development, specializing in building scalable, high-quality software solutions.',
}

export default function Resume() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mb-6 flex items-end justify-end gap-4 print:hidden">
        <div className="flex-shrink-0">
          <DownloadPdfButton />
        </div>
      </div>

      <div id="resume-content">
        {/* Header with Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {personal.fullName}
          </h1>
          <p className="mt-2 text-xl font-semibold text-zinc-600 dark:text-zinc-400">
            {personal.title}
          </p>

          {/* Contact Information with Icons */}
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

        <div className="space-y-8">
          {/* Professional Summary */}
          <div className="mt-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
            <p>{personal.bio.description}</p>
          </div>

          {/* Technical Skills */}
          <section>
            <h2 className="flex items-center border-b-2 border-zinc-200 pb-2 text-lg font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mr-2 h-6 w-6 flex-none"
              >
                <path
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                />
              </svg>
              Technical Skills
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {technicalSkills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40"
                >
                  <h3 className="mb-2 font-bold text-zinc-900 dark:text-zinc-100">
                    {skillCategory.title}
                    {skillCategory.years && (
                      <>
                        {' '}
                        <span className="text-xs font-normal text-zinc-500">
                          ({skillCategory.years})
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {skillCategory.items.map((item, idx) => (
                      <span key={idx}>
                        <strong>{item.label}:</strong> {item.technologies}
                        {idx < skillCategory.items.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="flex items-center border-b-2 border-zinc-200 pb-2 text-lg font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mr-2 h-6 w-6 flex-none"
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
              Experiences
            </h2>
            <div className="mt-4 rounded-lg border border-zinc-200 dark:border-zinc-700/40">
              <ol className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
                {experience.map((role, index) => (
                  <WorkExperienceCard key={index} role={role} />
                ))}
              </ol>
            </div>
          </section>

          {/* Personal Projects */}
          <section>
            <h2 className="flex items-center border-b-2 border-zinc-200 pb-2 text-lg font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mr-2 h-6 w-6 flex-none"
              >
                <path
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                />
              </svg>
              Personal Projects
            </h2>
            <ol className="mt-4 space-y-3">
              {projects.map((project, index) => (
                <PersonalProjectCard key={index} project={project} />
              ))}
            </ol>
          </section>

          {/* Education & Certifications */}
          <section>
            <h2 className="flex items-center border-b-2 border-zinc-200 pb-2 text-lg font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mr-2 h-6 w-6 flex-none"
              >
                <path
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                />
              </svg>
              Education & Certifications
            </h2>

            {/* Education */}
            <div className="mt-4">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Education
              </h3>
              <div className="mt-3 space-y-3">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                          {edu.degree}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {edu.institution}
                        </p>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          {edu.location}
                        </p>
                        {edu.highlights && edu.highlights.length > 0 && (
                          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex-shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                        {edu.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {/*<div className="mt-6">*/}
            {/*  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">*/}
            {/*    Professional Certifications*/}
            {/*  </h3>*/}
            {/*  <div className="mt-3 rounded-lg border border-zinc-200 dark:border-zinc-700/40">*/}
            {/*    <ol className="divide-y divide-zinc-100 dark:divide-zinc-700/40">*/}
            {/*      {certificates.map((cert, index) => (*/}
            {/*        <CertificationCard key={index} cert={cert} />*/}
            {/*      ))}*/}
            {/*    </ol>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="border-b-2 border-zinc-200 pb-2 text-lg font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              Key Achievements
            </h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40">
                <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="flex items-center border-b-2 border-zinc-200 pb-2 text-lg font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mr-2 h-6 w-6 flex-none"
              >
                <path
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                />
              </svg>
              Languages
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                  Vietnamese
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Mother Tongue
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
                  English
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Basic Communication
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
