import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import ascensionLogo from '@/public/logos/ascension.svg'
import explor3Logo from '@/public/logos/explor3.svg'
import metamodelsLogo from '@/public/logos/metamodels.svg'
import { Link } from 'lucide-react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

const projects = [
  {
    name: 'Ascension Protocol',
    description:
      "Ascension Protocol is a Decentralized Autonomous Organization (DAO) dedicated to providing DeFi tools and opportunities for it's constituents.",
    link: {
      href: 'https://ascensionprotocol.io',
      label: 'ascensionprotocol.io',
    },
    logo: ascensionLogo,
  },
  {
    name: 'MetaModels NFT',
    description:
      'NFT that promotes women inclusivity in the Web3 and Blockchain industry.',
    link: {
      href: 'https://metamodels-interface.vercel.app/',
      label: 'metamodelsnft.io',
    },
    logo: metamodelsLogo,
  },
  {
    name: 'Explor3',
    description:
      'Web3 project promoting fair and transparent partnerships between Web3 influencers and projects.',
    link: {
      href: 'https://explor3.io/',
      label: 'Explor3.io',
    },
    logo: explor3Logo,
  },
]

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Portfolio"
        description="Projects and organizations that I have contributed to during my career."
      />
      <SimpleLayout
        title="Portfolio"
        intro="Projects and organizations that I have contributed to during my career."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-3"
        >
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <Link className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
