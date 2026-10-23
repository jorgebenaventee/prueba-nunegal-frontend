import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header.tsx'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </React.Fragment>
  )
}
