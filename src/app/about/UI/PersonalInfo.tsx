import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import styles from '@/app/about/about.module.sass'

const PersonalInfo = () => {
  return (
    <div className={styles.head}>
      <h1 className={styles.title_h1}>Буланкин&nbsp;Дмитрий</h1>

      <p className={styles.paragraph}>Frontend разработчик</p>

      <div className={styles.contact_info}>
        <Link className={styles.link} href="mailto:dmitry.rezultta@gmail.com">
          <AiOutlineMail className={styles.svg} />
          <span className={styles.text}>dmitry.rezulttat@gmail.com</span>
        </Link>

        <Link className={styles.link} href="tel:+79303599222">
          <AiOutlinePhone className={styles.svg} />
          <span className={styles.text}>+7(930)3599222</span>
        </Link>

        <Link
          className={styles.link}
          target="_blank"
          href="https://www.google.com/maps/d/embed?mid=1Vl2aD-Rh2qVES1UJ0JuvDDTFU5Q&hl=en_US&ehbc=2E312F"
        >
          <AiOutlineEnvironment className={styles.svg} />
          <span className={styles.text}>Новороссийск, Россия</span>
        </Link>

        <Link className={styles.link} target="_blank" href="https://github.com/DimaSwed">
          <FaGithub className={styles.svg} />
          <span className={styles.text}>github.com/dimaswed</span>
        </Link>
      </div>
    </div>
  )
}

export default PersonalInfo
