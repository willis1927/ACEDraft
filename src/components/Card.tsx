

import styles from './Card.module.css'

interface CardProps {
  title: string
  description: string
  image?: string
  cta?: { text: string; href: string }
}

export function Card({ title, description, image, cta, uploadDate }: CardProps) {
  const isUrl = image && (image.startsWith('http') || image.startsWith('/'));
  
  return (
    <div className={styles.card}>
      {image && <div className={styles.imageContainer}>
        {isUrl ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>{image}</div>
        )}
      </div>}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {cta && (
          <a href={cta.href} className={styles.cta} target='_blank' rel='noopener noreferrer'>
            {cta.text} →
          </a>)}
        {uploadDate && <p className={styles.uploadDate}>{uploadDate}</p>}
      </div>
    </div>
  )
}

