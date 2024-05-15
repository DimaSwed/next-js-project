import React from 'react'
import styles from '@/app/about/about.module.sass'

const EducationInfo = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title_h2}>Образование</h2>

      <div className={styles.education}>
        <div className={styles.top_row}>
          <p className={styles.paragraph}>
            Ивановский государственный энергетический университет им. В.И. Ленина, Иваново
            (Ивановская область)
          </p>

          <div className={styles.duration}>
            <span>2005</span>
            &nbsp;&mdash;&nbsp;
            <span>2010</span>
          </div>
        </div>

        <p className={styles.paragraph}>
          Теплоэнергетический факультет, <br />
          кафедра промышленной теплоэнергетики
        </p>
      </div>
    </section>
  )
}

export default EducationInfo
