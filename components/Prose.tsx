import clsx from 'clsx'
import { ReactNode } from 'react'

export function Prose({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
