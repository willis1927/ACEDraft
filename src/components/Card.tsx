

import styles from './Card.module.css'

interface CardProps {
  title: string
  description: string
  image?: string
  cta?: { text: string; href: string }
}

export function Card({ title, description, image, cta }: CardProps) {
  return (
    <div className={styles.card}>
      {image && <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>{image}</div>
      </div>}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {cta && (
          <a href={cta.href} className={styles.cta}>
            {cta.text} →
          </a>
        )}
      </div>
    </div>
  )
}

