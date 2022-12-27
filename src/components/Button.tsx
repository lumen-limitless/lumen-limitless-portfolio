import Link from 'next/link'
import clsx from 'clsx'

const variantStyles: { [variant: string]: string } = {
  primary:
    'bg-stratos-400 font-semibold text-zinc-100 hover:bg-stratos-400/80 active:bg-stratos-400/70 active:text-zinc-100/70 dark:bg-stratos-500 dark:hover:bg-stratos-500/50 dark:active:bg-stratos-500/40 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

export function Button({
  variant = 'primary',
  className = '',
  href = '',
  ...props
}) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm  py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
