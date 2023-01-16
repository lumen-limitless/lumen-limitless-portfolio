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
        'container mx-auto px-4 md:px-12 lg:px-36 xl:px-48 2xl:px-56 ',
      ]
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      {children}
    </div>
  )
}
