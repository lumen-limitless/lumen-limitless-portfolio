import Link from 'next/link'

import Container from '../components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-zinc-100 px-3 pt-10 pb-16 dark:border-stratos-300/60 md:px-6 lg:px-9">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"></div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Zach Lippa. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
