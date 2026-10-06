import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <h1>WIP</h1>
      <ul>
        <li><a href="/test1/">test1</a></li>
        <li><a href="/test2/">test2</a></li>
      </ul>
    </main>
  )
}
