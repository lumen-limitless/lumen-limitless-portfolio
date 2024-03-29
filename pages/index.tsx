import { Card } from '@/components/Card'
import { Contact } from '@/components/Contact'
import Container from '@/components/Container'
import { GitHubIcon, TwitterIcon } from '@/components/SocialIcons'
import { cn } from '@/lib/utils'
import image4 from '@/public/photos/next.webp'
import image5 from '@/public/photos/rust.png'
import image2 from '@/public/photos/solidity.webp'
import image3 from '@/public/photos/tailwind.webp'
import image1 from '@/public/photos/typescript.webp'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

// function Article({ article }) {
//   return (
//     <Card as="article">
//       <Card.Title href={`/articles/${article.slug}`}>
//         {article.title}
//       </Card.Title>
//       <Card.Eyebrow as="time" dateTime={article.date} decorate>
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//       <Card.Description>{article.description}</Card.Description>
//       <Card.Cta>Read article</Card.Cta>
//     </Card>
//   )
// }

function Examples() {
  let examples = [
    {
      link: 'https://staking-example-rho.vercel.app/',
      title: 'Staking Demo',
      description: 'Staking application & smart contracts',
    },
    {
      link: 'https://nft-example-app.vercel.app/',
      title: 'NFT Minting Demo',
      description: 'NFT ERC-721 minting application & smart contracts',
    },
    {
      link: 'https://template-next-ecommerce.vercel.app/',
      title: 'Ecommerce Demo',
      description: 'Ecommerce application',
    },
  ]
  return (
    <>
      {examples.map((example, i) => (
        <Card key={i}>
          <Card.Title href={example.link}>{example.title}</Card.Title>

          <Card.Description>{example.description}</Card.Description>
          <Card.Cta>View Example</Card.Cta>
        </Card>
      ))}
    </>
  )
}

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Resume() {
//   let resume = []

//   return (
//     <div className="rounded-2xl border border-zinc-100 p-6 backdrop-blur dark:border-zinc-700/40">
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <Briefcase className="h-6 w-6 flex-none" />
//         <span className="ml-3">Work</span>
//       </h2>
//       <ol className="mt-6 space-y-4">
//         {resume.map((role: any, roleIndex: any) => (
//           <li key={roleIndex} className="flex gap-4">
//             <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//               <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
//             </div>
//             <dl className="flex flex-auto flex-wrap gap-x-2">
//               <dt className="sr-only">Company</dt>
//               <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
//                 {role.company}
//               </dd>
//               <dt className="sr-only">Role</dt>
//               <dd className="text-xs text-zinc-500 dark:text-zinc-400">
//                 {role.title}
//               </dd>
//               <dt className="sr-only">Date</dt>
//               <dd
//                 className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
//                 aria-label={`${role.start.label ?? role.start} until ${
//                   role.end.label ?? role.end
//                 }`}
//               >
//                 <time dateTime={role.start.dateTime ?? role.start}>
//                   {role.start.label ?? role.start}
//                 </time>{' '}
//                 <span aria-hidden="true">—</span>{' '}
//                 <time dateTime={role.end.dateTime ?? role.end}>
//                   {role.end.label ?? role.end}
//                 </time>
//               </dd>
//             </dl>
//           </li>
//         ))}
//       </ol>
//       {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
//         Download CV
//         <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
//       </Button> */}
//     </div>
//   )
// }

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
  ]

  return (
    <Container className="mt-16 sm:mt-20">
      <div className=" flex justify-evenly  overflow-hidden py-4 sm:gap-1">
        {[image1, image2, image3, image4, image5].map((image, i) => (
          <div
            key={i}
            className={cn(
              'relative aspect-[1/1] w-12 flex-none overflow-hidden rounded-xl  sm:w-16 sm:rounded-2xl md:w-24 lg:w-32 xl:w-36 2xl:w-40',
              rotations[i % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl px-3 md:px-6 lg:px-9">
          <TypeAnimation
            sequence={[
              'Blockchain Engineer',
              3000,
              'Full Stack Developer',
              3000,
              'Entrepreneur',
              3000,
            ]}
            wrapper="h1"
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            cursor={true}
            repeat={Infinity}
          />

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/LumenLimitless"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />

            <SocialLink
              href="https://github.com/lumen-limitless"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 px-3 md:px-6 lg:max-w-none lg:grid-cols-2 lg:px-9">
          <div className="flex flex-col gap-12 rounded-2xl  p-6  ">
            <Examples />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Resume /> */}
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}

// export async function getStaticProps() {
//   if (process.env.NODE_ENV === 'production') {
//     await generateRssFeed()
//   }

//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   }
// }
