export default function Container({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={[
        className,
        'container z-10 mx-auto px-4 md:px-12 lg:px-36 xl:px-48 2xl:px-56 ',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
