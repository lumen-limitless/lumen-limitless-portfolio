import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { SimpleLayout } from '../components/layouts/SimpleLayout'
import { NextSeo } from 'next-seo'
import React from 'react'

function ToolsSection({ children, ...props }: any) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }: any) {
  return (
    <Card>
      <Card.Title href={href}>{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Skills() {
  return (
    <>
      <NextSeo
        title="Skills"
        description="Tools I use to develop my projects."
      />
      <SimpleLayout
        title="My Stack 🚀"
        intro="Here is a list of all the tools I use to create projects."
      >
        <div className="space-y-20">
          <ToolsSection title="Programming Languages">
            <Tool title="Javascript">The language of the web.</Tool>
            <Tool title="Typescript">Typed superset of JavaScript.</Tool>
            <Tool title="Solidity">
              Object oriented programming language for implementing smart
              contracts.
            </Tool>
            <Tool title="Rust">
              Fast, safe, concurrent, and practical language.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              The best code editing platform available today.
            </Tool>
            <Tool title="iTerm2">
              Terminal I use on my devices for general development and network
              administration.
            </Tool>
            <Tool title="Figma">
              Professional and complete design tool, completely free.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Libraries & Frameworks">
            <Tool title="NextJS">The best React framework ever created.</Tool>
            <Tool title="TailwindCSS">
              Most versatile CSS-in-JS framework.
            </Tool>
            <Tool title="Framer Motion">
              Intuitive and production-ready animation library.
            </Tool>
            <Tool title="Viem">
              Versatile library for interacting with EVM based blockchains.
            </Tool>
            <Tool title="Wagmi">
              Library for creating web3 applications with react.
            </Tool>
            <Tool title="ThreeJS">
              Allows easy manipulation of 3D objects & scenes in web
              applications.
            </Tool>
            <Tool title="Hardhat">
              Versatile and highly customizable smart contract development
              framework.
            </Tool>
            <Tool title="Foundry">Smart contract development toolchain.</Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
