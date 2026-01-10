I'll read through all the documentation files to understand the current state and create a comprehensive plan for updating the website copy.

[4 tools called]

Let me also look at the current website components to understand the existing copy structure:

[5 tools called]

Let me also check the remaining key components:

[4 tools called]

Now I have a complete picture of the current website state vs. the target product. Let me create a comprehensive plan for updating the website copy based on the `key-concept.md` documentation.

---

# 📋 Website Copy Update Plan: WooCommerce Access Passes

## Executive Summary

The current website uses "Mainline" branding (a fictional PM tool) as placeholder content. The plan below transforms it into a proper marketing site for **WooCommerce Access Passes** — a time-based access management plugin for WooCommerce.

---

## 🗂️ Phase 1: Global Configuration & Metadata

### Files to Update:

| File            | Changes                                                                |
| --------------- | ---------------------------------------------------------------------- |
| `src/consts.ts` | Update SITE_TITLE, SITE_DESCRIPTION, SITE_METADATA, keywords, SEO meta |

### New Copy:

```typescript
export const SITE_TITLE =
  "WooCommerce Access Passes - Time-Based Access Management";
export const SITE_DESCRIPTION =
  "Transform your WooCommerce store into a sophisticated time-based access management system. Stackable access periods, flexible groups, and no recurring billing complexity.";

// Keywords: WooCommerce, WordPress plugin, access management, time-based access,
// digital products, membership, course access, stackable subscriptions, etc.
```

---

## 🗂️ Phase 2: Hero Section (`src/components/blocks/hero.tsx`)

### Current → New Mapping:

| Element           | Current                     | New                                                                                                                                                            |
| ----------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Headline**      | "Mainline Astro template"   | "Stackable Time-Based Access for WooCommerce"                                                                                                                  |
| **Subheadline**   | "open-source template..."   | "Transform your WooCommerce store into a sophisticated access management system. No recurring billing, no complexity — just simple purchases that grant time." |
| **Primary CTA**   | "Get template"              | "Get Access Passes" (→ purchase page)                                                                                                                          |
| **Secondary CTA** | "Built by shadcnblocks.com" | "View Documentation"                                                                                                                                           |

### Hero Features (right side):

| Current             | New (from key-concept.md)                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| Tailored workflows  | **Stackable Access** — "Multiple purchases automatically extend access periods. No overlapping subscriptions." |
| Cross-team projects | **Flexible Groups** — "Bundle products under shared access timers or use standalone products."                 |
| Milestones          | **Guest-Friendly** — "Automatic account creation for guest purchasers with seamless access."                   |
| Progress insights   | **Full API & Webhooks** — "RESTful API, incoming/outgoing webhooks, secure authentication."                    |

---

## 🗂️ Phase 3: Logos Section (`src/components/blocks/logos.tsx`)

### New Copy:

| Element        | New Content                                                            |
| -------------- | ---------------------------------------------------------------------- |
| **Heading**    | "Trusted by WooCommerce store owners worldwide."                       |
| **Subheading** | "From course creators to membership sites to digital product sellers." |

### Logo Updates:

Replace tech company logos with **WooCommerce ecosystem** logos:

- WooCommerce, WordPress, Lemon Squeezy, Stripe, LearnDash, Restrict Content Pro, etc.
- Or use "Compatible with" icons (integrations)

---

## 🗂️ Phase 4: Features Section (`src/components/blocks/features.tsx`)

### Section Header:

| Element         | Current                              | New                                                                                                                                                                 |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tag**         | "MEASURE TWICE. CUT ONCE."           | "SIMPLICITY OVER COMPLEXITY"                                                                                                                                        |
| **Heading**     | "Made for modern product teams"      | "Built for Digital Product Sellers"                                                                                                                                 |
| **Description** | "Mainline is built on the habits..." | "WooCommerce Access Passes uses simple one-time purchases that grant time-based access. Perfect for courses, digital products, memberships, and software licenses." |

### Feature Cards:

| Current                               | New                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Purpose-built for product development | **Stack-First Architecture** — "Customers buy additional time whenever they want. No overlapping subscriptions or payment failures." |
| Manage projects end-to-end            | **Access Groups** — "Bundle multiple products under shared timers. Different products in the same group grant cumulative access."    |
| Build momentum and healthy habits     | **Developer-Friendly** — "Clean REST API, extensive hooks, webhook support. Follows WordPress and WooCommerce best practices."       |

---

## 🗂️ Phase 5: Resource Allocation Section (`src/components/blocks/resource-allocation.tsx`)

### Section Header:

**Current:** "Mainline your resource allocation and execution"  
**New:** "Everything you need to manage time-based access"

### Top Items:

| Current                    | New                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| "Reusable issue templates" | **Comprehensive Admin Dashboard** — "Intuitive user access overview with real-time status monitoring and detailed history tracking." |
| "Simplify your stack"      | **Seamless WooCommerce Integration** — "Works with your existing products. No external systems needed."                              |

### Bottom Items:

| Current            | New                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| "Graveyard it"     | **Smart Order Processing** — "Automatic access on payment success, smart refund handling, and failed payment protection."         |
| "Task discussions" | **User-Friendly Frontend** — "Clean My Account integration with access status, expiration dates, and mobile-responsive design."   |
| "Notifications"    | **Webhook System** — "Outgoing webhooks for access changes, incoming webhooks for external integrations, API key authentication." |

---

## 🗂️ Phase 6: Testimonials Section (`src/components/blocks/testimonials.tsx`)

### Section Header:

| Element         | New Content                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Heading**     | "Loved by WooCommerce store owners"                                                                             |
| **Description** | "Store owners choose Access Passes for its simplicity, flexibility, and reliable time-based access management." |
| **CTA**         | "Read Customer Stories"                                                                                         |

### Testimonial Content:

Create new testimonials based on use cases from `key-concept.md`:

1. **Course Creator**: "Finally, a way to sell course access without subscription headaches. My students love stacking extra time when they need it."
2. **Software Developer**: "Access Passes handles our license management perfectly. Customers buy time, it stacks, no failed renewals."
3. **Membership Site Owner**: "We switched from a complex subscription plugin. Access Passes is so much simpler — and our members prefer it."
4. **Digital Product Seller**: "The guest checkout with automatic account creation is a game-changer for conversions."

---

## 🗂️ Phase 7: Pricing Section (`src/components/blocks/pricing.tsx`)

### Section Header:

| Element         | Current                    | New                                                                                                                   |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Heading**     | "Pricing"                  | "Simple, Transparent Pricing"                                                                                         |
| **Description** | "Use Mainline for free..." | "One license per site. All features included. No recurring fees — just one-time purchases like your customers enjoy." |

### Pricing Plans (based on Lemon Squeezy model):

| Plan            | Price | Features                                                                            |
| --------------- | ----- | ----------------------------------------------------------------------------------- |
| **Single Site** | $49   | 1 site license, 1 year updates, Priority support, All features                      |
| **5 Sites**     | $99   | 5 site licenses, 1 year updates, Priority support, All features                     |
| **Unlimited**   | $199  | Unlimited sites, 1 year updates, Priority support, All features, White-label option |

---

## 🗂️ Phase 8: FAQ Section (`src/components/blocks/faq.tsx`)

### Categories & Questions (from key-concept.md):

**Getting Started:**

- "What are the requirements to run Access Passes?" → WordPress 5.0+, WooCommerce 3.0+, PHP 7.4+
- "How do I install and set up the plugin?" → Install, run onboarding wizard, configure groups, set products
- "Do my customers need accounts?" → Guest checkout creates accounts automatically

**Features:**

- "How does access stacking work?" → Multiple purchases extend access, no overlaps
- "What are Access Groups?" → Bundle products under shared timers for cumulative access
- "Can I use webhooks?" → Yes, incoming and outgoing with API key authentication

**Technical:**

- "Is there an API?" → Full REST API with user status, group management, bulk operations
- "Does it work with my theme?" → Yes, My Account integration is theme-independent
- "How are refunds handled?" → Automatic access revocation on refund

---

## 🗂️ Phase 9: About Page (`src/components/blocks/about-hero.tsx`, `about-section.tsx`)

### About Hero:

| Element         | New Content                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| **Headline**    | "Simplifying Digital Access Management"                                           |
| **Subheadline** | "We built Access Passes because subscription complexity was killing conversions." |
| **Body**        | Story about why simple time-based access beats recurring subscriptions            |

### Stats:

- Active installations
- Products powered
- Access periods granted
- Customer satisfaction rate

---

## 🗂️ Phase 10: Other Pages

### Login/Signup Pages:

- Update copy to reflect license management via Lemon Squeezy
- "Activate your license" instead of generic signup

### Blog Content:

Create new posts around:

- "Why Time-Based Access Beats Traditional Subscriptions"
- "How to Set Up Your First Access Group"
- "5 Ways to Use WooCommerce Access Passes for Course Sales"

---

## 📁 Files to Modify Summary

| Priority  | File                                            | Key Changes                           |
| --------- | ----------------------------------------------- | ------------------------------------- |
| 🔴 High   | `src/consts.ts`                                 | All metadata, SEO, branding           |
| 🔴 High   | `src/components/blocks/hero.tsx`                | Headline, subheadline, CTAs, features |
| 🔴 High   | `src/components/blocks/features.tsx`            | Section copy, feature cards           |
| 🔴 High   | `src/components/blocks/pricing.tsx`             | Plans, pricing, features              |
| 🟡 Medium | `src/components/blocks/faq.tsx`                 | All Q&As                              |
| 🟡 Medium | `src/components/blocks/testimonials.tsx`        | Quotes, personas, companies           |
| 🟡 Medium | `src/components/blocks/resource-allocation.tsx` | Feature descriptions                  |
| 🟡 Medium | `src/components/blocks/logos.tsx`               | Heading, partner/integration logos    |
| 🟢 Low    | `src/components/blocks/about-hero.tsx`          | Company story, stats                  |
| 🟢 Low    | `src/components/blocks/about-section.tsx`       | Mission, vision                       |
| 🟢 Low    | `src/pages/*.astro`                             | Page-specific SEO meta                |

---

## 🎨 Visual Assets Needed

1. **Hero Image** — Replace `/hero.webp` with WooCommerce admin dashboard screenshot
2. **Feature Images** — Replace `/features/*.svg` with plugin UI mockups
3. **Resource Allocation Images** — Plugin screenshots showing:
   - Admin dashboard
   - User access management
   - Product configuration
   - Webhook settings
4. **Testimonial Photos** — Stock photos or generated avatars
5. **Logos** — WooCommerce ecosystem logos

---

## ⏱️ Recommended Order of Execution

1. **`src/consts.ts`** — Foundation for all SEO
2. **`hero.tsx`** — Most visible, first impression
3. **`features.tsx`** — Core value proposition
4. **`pricing.tsx`** — Conversion-critical
5. **`faq.tsx`** — Trust and objection handling
6. **`testimonials.tsx`** — Social proof
7. **`resource-allocation.tsx`** — Detailed features
8. **`logos.tsx`** — Partner trust
9. **About pages** — Secondary priority

---

Would you like me to start implementing these changes? I can begin with the high-priority files and work through the plan systematically.
