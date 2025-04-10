import type { Metadata } from "next"
import Link from "next/link"
import { UserList } from "@/components/user-list"

export const metadata: Metadata = {
  title: "User Management Dashboard",
  description: "A complete user management system with CRUD operations",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold">User Management</span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link
            href="/users/new"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Add User
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl">
          <UserList />
        </div>
      </main>
      <footer className="border-t py-4 px-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} User Management System
        </div>
      </footer>
    </div>
  )
}
