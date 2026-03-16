import { useState } from 'react'
import styles from './Navbar.module.css'
import ACELogo from '../assets/ACELogo.png'
import FacebookIcon from '../assets/Icons/facebook.svg'
import TwitterIcon from '../assets/Icons/twitter.svg'
import InstagramIcon from '../assets/Icons/instagram.svg'
import YouTubeIcon from '../assets/Icons/youtube.svg'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { label: 'Events', href: '#events' },
    { label: 'Sports', href: '#sports' },
    { label: 'Channels', href: '#channels' },
    { label: 'Live Streaming', href: '#livestream' },
  ]

  const socialLinks = [
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
    { icon: TwitterIcon, label: 'Twitter', href: '#' },
    { icon: InstagramIcon, label: 'Instagram', href: '#' },
    { icon: YouTubeIcon, label: 'YouTube', href: '#' },
  ]

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src={ACELogo} alt="ACE Podcast Nation Logo" className={styles.logo} />
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <div className={`${styles.navLinksContainer} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          {/* Social links visible only in mobile menu
          <li className={styles.mobileOnly}>
            <span className={styles.divider}>Connect</span>
          </li>
          {socialLinks.map((social) => (
            <li key={social.label} className={styles.mobileOnly}>
              {/* <a href={social.href} aria-label={social.label}> 
                <img src={social.icon} alt={social.label} />
              {/* </a> 
            </li> 
          ))}*/}
        </ul>
      </div>

      {/* Social Links - Desktop Only */}
      <div className={styles.socialLinks}>
        {socialLinks.map((social) => (
          <a key={social.label} href={social.href} aria-label={social.label} className={styles.socialLink}>
            <img src={social.icon} alt={social.label} />
          </a>
        ))}
      </div>
    </nav>
  )
}
