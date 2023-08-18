import Link from 'next/link'
import { Button } from 'src/components/Button'

export default function Home() {
  return (
    <main className="max-w-app mx-auto h-screen flex items-center justify-center">
      <Button>
        <Link href="/guide/new">Novo guia</Link>
      </Button>
    </main>
  )
}
