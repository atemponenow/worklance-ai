# Worklance.AI Development Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js website for Worklance.AI, an AI-first service company. The project uses TypeScript, Tailwind CSS, and Framer Motion for animations. Built with Next.js 13.5.6 for compatibility with Node.js 18.2.0+.

## Code Style Guidelines
- Use TypeScript for all components and pages with strict type checking
- Follow React functional component patterns with hooks (useState, useEffect, etc.)
- Use Tailwind CSS for styling with utility classes - avoid inline styles
- Implement smooth animations with Framer Motion - use whileInView for scroll animations
- Use semantic HTML and accessibility best practices (proper ARIA labels, alt texts)
- Follow consistent naming conventions (PascalCase for components, camelCase for functions/variables)

## Component Architecture
- All components are in the `src/components/` directory
- Use 'use client' directive for components that need client-side functionality (useState, event handlers, animations)
- Export components as default exports
- Keep components focused and single-responsibility
- Use proper TypeScript interfaces for props

## Styling Guidelines
- Use Tailwind utility classes for styling (prefer utilities over custom CSS)
- Follow mobile-first responsive design approach (sm:, md:, lg:, xl: breakpoints)
- Use custom color palette defined in tailwind.config.js:
  - primary: blue shades (#3b82f6, #2563eb, #1d4ed8) for main brand color
  - accent: green shades (#10b981, #059669) for highlights
  - Use appropriate contrast ratios for accessibility
- Implement consistent spacing using Tailwind spacing scale (p-4, m-6, space-y-4)
- Use proper typography scale (text-xs to text-6xl)

## Animation Guidelines
- Use Framer Motion for smooth animations and interactions
- Implement scroll-triggered animations with `whileInView` and `viewport={{ once: true }}`
- Add hover effects with `whileHover={{ scale: 1.05 }}` for interactive elements
- Use `whileTap={{ scale: 0.95 }}` for click feedback
- Keep animations subtle and performant (avoid complex transforms)
- Use appropriate transition durations (0.2s for quick interactions, 0.8s for page loads)

## Interactive Elements & Functionality
- Always ensure buttons and links have proper functionality:
  - Use `onClick` handlers with `scrollIntoView()` for smooth scrolling to sections (better than anchor links in Next.js)
  - Use `href` attributes for external navigation (external: https://) 
  - Use Next.js Link component for internal page navigation (/about, /services, etc.)
  - Make email/phone links clickable with `mailto:` and `tel:` protocols
  - Remove or replace placeholder links (href="#") with functional alternatives
- **Smooth Scrolling Implementation:**
  ```typescript
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  ```
- **Button Pattern:**
  ```jsx
  <button onClick={() => scrollToSection('contact')} className="...">
    Get Started
  </button>
  ```
- Form handling:
  - Use controlled components with useState for form data
  - Implement proper form validation and error handling
  - Provide user feedback for form submissions (success/error states)
  - Use proper form accessibility (labels, required fields)

## Navigation & Routing
- Use Next.js Link component for internal navigation between pages
- Use `onClick` handlers with `scrollIntoView({ behavior: 'smooth' })` for smooth scrolling to sections
- Add proper section IDs for scroll navigation (#about, #services, #contact)
- Ensure mobile menu closes after navigation with `setIsOpen(false)`
- Use proper ARIA attributes for navigation elements
- **Avoid using anchor links (href="#section") in Next.js as they don't work reliably**

## Troubleshooting Interactive Elements
- **Buttons not working?** Check:
  1. Are you using `onClick` handlers instead of anchor links for scrolling?
  2. Do target sections have proper IDs?
  3. Is `scrollIntoView({ behavior: 'smooth' })` implemented correctly?
  4. Are buttons inside forms without `type="button"`? (they might be submitting the form)
- **Smooth scrolling not working?** 
  1. Add `scroll-behavior: smooth` to CSS
  2. Use JavaScript `scrollIntoView({ behavior: 'smooth' })` for better control
  3. Ensure section IDs are unique and properly set

## Performance & SEO
- Use Next.js Image component for optimized images when needed
- Implement proper SEO with metadata in layout.tsx and page files
- Use semantic HTML structure (header, nav, main, section, article, footer)
- Optimize bundle size (avoid unnecessary dependencies)
- Implement proper loading states for async operations

## Development Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Code Quality Standards
- Write clean, readable, and maintainable code
- Use meaningful variable and function names
- Add TypeScript types for all props and function parameters
- Handle edge cases and error states appropriately
- Follow React best practices (proper dependency arrays, avoid side effects in render)
- Test interactive elements to ensure they work as expected

## Accessibility Requirements
- Use proper heading hierarchy (h1 → h2 → h3)
- Provide alt text for images and icons
- Ensure keyboard navigation works properly
- Use sufficient color contrast ratios
- Add ARIA labels for complex interactive elements
- Test with screen readers when possible

## Common Patterns
- Section structure: `<section id="section-name" className="py-20 bg-color">`
- Animation wrapper: `<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>`
- Button styling: Consistent padding, rounded corners, hover states
- Grid layouts: Use CSS Grid with responsive breakpoints
- Form inputs: Consistent styling with focus states and validation

## File Organization
```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout with navigation
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
│   ├── About.tsx       # About section component
│   ├── Contact.tsx     # Contact form and info
│   ├── Footer.tsx      # Footer with links
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation component
│   └── Services.tsx    # Services showcase
```

## Testing Interactive Elements
Always verify that:
- All buttons perform their intended action
- All links navigate to correct destinations
- Forms submit properly and provide feedback
- Animations work smoothly across devices
- Mobile navigation functions correctly
- Contact information is clickable (email/phone)

Remember: Every interactive element should have a clear purpose and function. Remove or replace any placeholder content that doesn't serve the user.
