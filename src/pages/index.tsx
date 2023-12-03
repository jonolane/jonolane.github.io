import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <h1 className="text-white text-center text-4xl">Jono Lane</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
