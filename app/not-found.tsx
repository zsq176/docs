import Link from "next/link"
import { DocsLayout } from "@/components/docs/docs-layout"
import { Button } from "@/components/ui/button"
import { FileQuestion, Home, BookOpen } from "lucide-react"

export default function NotFound() {
  return (
    <DocsLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center space-y-6">
        <div className="rounded-full bg-muted p-4">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Page not found</h1>
          <p className="text-muted-foreground max-w-md">
            The page you are looking for does not exist or has been moved. Use the sidebar or the links below to continue.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild variant="default" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Introduction
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/docs/swap-api">
              <BookOpen className="h-4 w-4" />
              Swap API
            </Link>
          </Button>
        </div>
      </div>
    </DocsLayout>
  )
}
