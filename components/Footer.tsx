import Container from './Container'

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-stratos-300/10 px-3 pb-16 pt-10 dark:border-stratos-300/60 md:px-6 lg:px-9">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"></div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Copyright &copy; {new Date().getFullYear()} Lumen Limitless. All
              rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
