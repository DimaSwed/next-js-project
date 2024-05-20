'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/hooks'
import { linksReducer } from '@/redux/slices/linksSlice'
import styles from '@/app/about/about.module.sass'

interface LinkItem {
  text: string
  githubLink: string
  deployLink: string
}

const PetLinks: React.FC = () => {
  const dispatch = useAppDispatch()
  const selectedLink = useAppSelector((state) => state.links.value)

  useEffect(() => {
    const linksStatus = localStorage.getItem('linksVisibility')
    if (linksStatus !== null) {
      dispatch(linksReducer(linksStatus === 'true'))
    }
  }, [dispatch])

  const petProjects: LinkItem[] = [
    {
      text: 'Трехстраничный веб-сайт, разработанный с использованием фреймворка React',
      githubLink: 'https://github.com/DimaSwed/CoffeeShop',
      deployLink: 'https://coffee-shop-delta-sepia.vercel.app/'
    },
    {
      text: 'Адаптивный сайт с использованием HTML, CSS (Sass), и JavaScript',
      githubLink: 'https://github.com/DimaSwed/NightExpress-LP',
      deployLink: 'https://dimaswed.github.io/NightExpress-LP/'
    },
    {
      text: 'Простой сайт CSS Generator - на HTML, CSS и JavaScript',
      githubLink: 'https://dimaswed.github.io/textCssGenerator/',
      deployLink: 'https://dimaswed.github.io/textCssGenerator/'
    }
  ]

  return (
    <section className={styles.section}>
      {selectedLink ? (
        <>
          <h2 className={styles.title_h2}>ПЭТ-проекты (из последних):</h2>

          <div className={styles.cards}>
            <ul className={styles.link_list}>
              {petProjects.map((project, index) => (
                <li key={index} className={styles.link_item}>
                  <p className={styles.link_item_p}>{project.text}</p>
                  <div className={styles.link_item_box}>
                    <Link className={styles.link} target="_blank" href={project.githubLink}>
                      Ссылка на GitHub
                    </Link>
                    <Link className={styles.link} target="_blank" href={project.deployLink}>
                      Ссылка на Deploy
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default PetLinks
