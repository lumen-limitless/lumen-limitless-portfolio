import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { NextSeo } from 'next-seo'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="My Stack"
        description="Software, frameworks, and libraries I use to develop my projects."
      />
      <SimpleLayout
        title="Software, frameworks, and libraries I use to develop my projects."
        intro="Here is a list of all the tools I use to develop and create projects for my clients and myself."
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              The best code editing platform available today.
            </Tool>
            <Tool title="iTerm2 & Terminator">
              Terminals I use on my devices for general development and network
              administration.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases.
            </Tool>
            <Tool title="Figma">
              Professional and complete design tool, completely free.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Libraries & Frameworks">
            <Tool title="NextJS">The best React framework ever created.</Tool>
            <Tool title="TailwindCSS">
              Most versatile CSS-in-JS framework, helps me create and manage
              beautiful webpage designs without the headache of vanilla CSS.
            </Tool>
            <Tool title="Framer Motion">
              Intuitive and production-ready animation library.
            </Tool>
            <Tool title="EthersJS">
              Highly versatile library for interacting with EVM and web3
              protocols.
            </Tool>
            <Tool title="Zustand">Web application global state made easy.</Tool>
            <Tool title="ThreeJS">
              Allows easy manipulation of 3D objects & scenes in web
              applications.
            </Tool>
            <Tool title="Hardhat">
              Versatile and highly customizable smart contract development
              framework
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
