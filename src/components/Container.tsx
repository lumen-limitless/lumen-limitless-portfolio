export default function Container({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <div
      className={[
        className,
        'container mx-auto px-3 md:px-12 lg:px-24 xl:px-36 2xl:px-48',
      ]
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      {children}
    </div>
  )
}
