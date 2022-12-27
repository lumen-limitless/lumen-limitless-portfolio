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
      className={[className, 'container z-10 mx-auto px-3 md:px-6 lg:px-9']
        .filter(Boolean)
        .join(' ')}
      id={id}
    >
      {children}
    </div>
  )
}
