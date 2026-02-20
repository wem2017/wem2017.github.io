import {ContainerInner, ContainerOuter} from '@/components/Container'
import {personal} from '@/data/personal'


export function Footer() {
  return (
    <footer className="mt-16 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {personal.copyright.year} {personal.fullName}. {personal.copyright.text}
              </p>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
