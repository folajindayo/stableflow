import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),

  files: defineTable({
    name: v.string(),
    type: v.string(),
    size: v.number(),
    key: v.string(),
    userId: v.string(),
    isPublic: v.boolean(),
  }).index("by_user", ["userId"]),

  settings: defineTable({
    userId: v.string(),
    theme: v.string(),
    notifications: v.boolean(),
  }).index("by_user", ["userId"]),
}) 