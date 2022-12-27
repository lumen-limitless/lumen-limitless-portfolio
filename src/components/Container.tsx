export default function Container({
  style,
  children,
  className = '',
  id,
}: {
  style?: any
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <div
      className={[
        className,
        'container z-10 mx-auto px-3 md:px-9 lg:px-24 xl:px-48',
      ]
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      {children}
    </div>
  )
}
