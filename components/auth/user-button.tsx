"use client"

import { UserButton as ClerkUserButton } from "@clerk/nextjs"

export function UserButton() {
  return (
    <ClerkUserButton
      appearance={{
        elements: {
          avatarBox: "h-10 w-10",
          userButtonPopoverCard: "bg-background border border-border",
          userButtonPopoverActionButton: "hover:bg-muted",
          userButtonPopoverActionButtonText: "text-foreground",
          userButtonPopoverFooter: "hidden",
        },
      }}
    />
  )
} 