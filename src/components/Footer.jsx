import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

export default function Footer() {
  return (
    <footer className="border-t border-rim bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-fog">
          © {new Date().getFullYear()} Patryk Pawlak
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Sposki87"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/patryk-pawlak-81bb00218/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:patrykpawlak6789@gmail.com"
            className="text-fog hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
