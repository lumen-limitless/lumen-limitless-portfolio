import Container from '@/components/Container'
import { GitHubIcon, TwitterIcon } from '@/components/SocialIcons'
import { cn } from '@/lib/utils'
import portraitImage from '@/public/lumen.png'
import { Mail } from 'lucide-react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  children?: ReactNode
  icon: any
}) {
  return (
    <li className={cn(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-tahiti-500 dark:text-zinc-200 dark:hover:text-tahiti-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-tahiti-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <NextSeo title="About" description="" />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 px-3 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:px-9">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="backdrop-blur lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Lumen Limitless 👨‍💻
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>I&apos;m a Blockchain Engineer and Full Stack Developer.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/LumenLimitless"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>

              <SocialLink
                href="https://github.com/lumen-limitless"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>

              <SocialLink
                href="mailto:lumenlimitless@gmail.com"
                icon={Mail}
                className="mt-8 border-t border-stratos-300/10 pt-8 dark:border-stratos-300/60"
              >
                lumenlimitless@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
