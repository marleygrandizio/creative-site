import { motion } from 'framer-motion'

const navLinks = [
  { label: 'The Design', target: '#the-design' },
  { label: 'The Details', target: '#the-details' },
  { label: 'About', target: '#story' },
]

export default function Navbar() {
  return (
    <motion.nav className="site-nav" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} aria-label="Main navigation">
      <a className="site-brand" href="#top" aria-label="Google Sunset Tee home">
        <span className="brand-mark" aria-hidden="true">G</span>
        <span>Google</span>
      </a>
      <div className="site-nav__links">
        {navLinks.map((link) => <a key={link.target} href={link.target}>{link.label}</a>)}
      </div>
      <motion.a className="nav-cta" href="#the-details" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        Explore the tee <span aria-hidden="true">↗</span>
      </motion.a>
    </motion.nav>
  )
}
