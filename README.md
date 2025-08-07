# Worklance.AI - AI-First Service Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS for Worklance.AI - an AI-first service company.

## 🚀 Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Next.js for fast loading
- 🎭 **Smooth Animations** - Enhanced user experience with Framer Motion
- 🔧 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first styling
- 📞 **Contact Forms** - Interactive contact with WhatsApp integration
- 🔍 **SEO Optimized** - Built-in SEO best practices
- ✅ **Form Validation** - Real-time validation with error handling

## 📱 Contact Integration

- **WhatsApp Integration**: Direct messaging to +91 88968 94327
- **Form Validation**: Name, email, and message validation
- **Real-time Feedback**: Success/error states with visual confirmation
- **Mobile Optimized**: Touch-friendly interface for all devices

## Pages

- **Homepage** - Hero section, services overview, company highlights
- **About** - Company story, team, and values
- **Services** - Detailed AI service offerings
- **Contact** - Contact forms and company information

## Tech Stack

- **Framework**: Next.js 13.5.6 (Compatible with Node.js 18.2.0+)
- **Language**: TypeScript 5.1.6
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **Forms**: React Hooks with custom validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd worklance-ai
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   └── Services.tsx    # Services section
\`\`\`

## Customization

### Colors

Update colors in \`tailwind.config.js\`:

\`\`\`javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your brand colors
  }
}
\`\`\`

### Content

- Update company information in components
- Modify service offerings in \`Services.tsx\`
- Update team information in \`About.tsx\`
- Customize contact details in \`Contact.tsx\` and \`Footer.tsx\`

## Deployment

This project can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Digital Ocean**

## License

This project is licensed under the MIT License.

## Support

For support, email support@worklance.ai or visit our website.
