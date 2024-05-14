import React from 'react'
import styles from '@/app/about/about.module.sass'

const SkillsInfo = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title_h2}>Скилы</h2>

      <div className={styles.chips}>
        <div className={styles.chip}>HTML</div>
        <div className={styles.chip}>CSS</div>
        <div className={styles.chip}>SASS</div>
        <div className={styles.chip}>BEM</div>
        <div className={styles.chip}>JavaScript</div>
        <div className={styles.chip}>React</div>
        <div className={styles.chip}>TypeScript</div>
        <div className={styles.chip}>NextJs</div>
        <div className={styles.chip}>Web Components</div>
      </div>
    </section>
  )
}

export default SkillsInfo
