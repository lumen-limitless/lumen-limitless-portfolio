import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Container from '../components/Container'
import { GitHubIcon, TwitterIcon } from '../components/SocialIcons'
import portraitImage from '@/public/avatar.jpg'
import { NextSeo } from 'next-seo'
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
    <li className={clsx(className, 'flex')}>
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

function MailIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="I'm Zach, a Blockchain Engineer, Full Stack Developer, and Entrepreneur based in Rochester, NY."
      />

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
              Hey, I&apos;m Zach 👨‍💻
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a Blockchain Engineer and Full Stack Developer based in
                Rochester, NY. Since I was young, I have always been fascinated
                with technology. At the age of 6 I disassembled our family
                vacuum cleaner, much to my parents&apos; dismay. At age 12 I
                began writing basic scripts in C++, programming simple command
                line games and mouse-jiggling pranks.
              </p>

              <p>
                Today, I use my skills in Typescript, Solidity, NextJS,
                Rust, and much more to create exciting new products on the
                cutting edge of technology. I have experience working on the
                frontend, backend, and smart contracts for a wide variety of
                projects and organizations. Want to make your dream project a
                reality? Contact me today and let&apos;s make it happen!
              </p>
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
                icon={MailIcon}
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
