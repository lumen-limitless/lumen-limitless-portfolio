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
        '3xl:px-48 container z-10 mx-auto px-3 md:px-12 lg:px-24 xl:px-36 2xl:px-48',
      ]
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      {children}
    </div>
  )
}
