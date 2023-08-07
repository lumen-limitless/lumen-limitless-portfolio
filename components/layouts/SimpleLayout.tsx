import { ReactNode } from 'react'
import Container from '../Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title?: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl px-3 md:px-6 lg:px-9">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 px-3 sm:mt-20 md:px-6 lg:px-9 ">{children}</div>
    </Container>
  )
}
