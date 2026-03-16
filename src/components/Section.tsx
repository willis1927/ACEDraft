

import styles from './Section.module.css'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children?: React.ReactNode
  icon?: string
}

export function Section({ id, title, subtitle, children, icon }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {children && <div className={styles.content}>{children}</div>}
      </div>
    </section>
  )
}

