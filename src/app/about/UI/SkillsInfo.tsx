import React from 'react'
import styles from '@/app/about/about.module.sass'

interface Skill {
  name: string
}

const SkillsInfo: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'SASS' },
    { name: 'BEM' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'NextJs' },
    { name: 'Web Components' }
  ]

  return (
    <section className={styles.section}>
      <h2 className={styles.title_h2}>Скилы</h2>

      <div className={styles.chips}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.chip}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsInfo
