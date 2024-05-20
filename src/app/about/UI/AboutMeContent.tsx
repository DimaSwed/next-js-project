import React from 'react'
import styles from '@/app/about/about.module.sass'

const AboutMeContent: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title_h2}>Обо мне</h2>

      <p className={styles.paragraph}>
        Меня зовут Дмитрий Буланкин, я занимаюсь web-разработкой с 2023 года.
      </p>
      <p className={styles.paragraph}>
        Мои основные качества: адаптивность, умение работать в команде, самоорганизованность,
        усидчивость, управление временем.
      </p>
    </section>
  )
}

export default AboutMeContent
