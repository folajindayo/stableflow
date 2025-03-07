"use client"

import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-background",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "bg-background text-foreground border-border hover:bg-muted",
            formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
            footerAction: "text-muted-foreground",
            formFieldLabel: "text-foreground",
            formFieldInput: "bg-background text-foreground border-input",
          },
        }}
      />
    </div>
  )
} 