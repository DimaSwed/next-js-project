'use client'
import React from 'react'
import Link from 'next/link'
import { useAppSelector } from '@/redux/hooks/hooks'
import styles from '@/app/about/about.module.sass'

const PetLinks = () => {
  const selectedLink = useAppSelector((state) => state.links.value)
  console.log(selectedLink)
  return (
    <section className={styles.section}>
      {selectedLink ? (
        <>
          <h2 className={styles.title_h2}>ПЭТ-проекты (из последних):</h2>

          <div className={styles.cards}>
            <ul className={styles.link_list}>
              <li className={styles.link_item}>
                <p className={styles.link_item_p}>
                  Трехстраничный веб-сайт, разработанный с использованием фреймворка React
                </p>
                <div className={styles.link_item_box}>
                  <Link
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/DimaSwed/CoffeeShop"
                  >
                    Ссылка на GitHub
                  </Link>
                  <Link
                    className={styles.link}
                    target="_blank"
                    href="https://coffee-shop-delta-sepia.vercel.app/"
                  >
                    Ссылка на Deploy
                  </Link>
                </div>
              </li>
              <li className={styles.link_item}>
                <p className={styles.link_item_p}>
                  Адаптивный сайт с использованием HTML, CSS (Sass), и JavaScript
                </p>
                <div className={styles.link_item_box}>
                  <Link
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/DimaSwed/NightExpress-LP"
                  >
                    Ссылка на GitHub
                  </Link>
                  <Link
                    className={styles.link}
                    target="_blank"
                    href="https://dimaswed.github.io/NightExpress-LP/"
                  >
                    Ссылка на Deploy
                  </Link>
                </div>
              </li>
              <li className={styles.link_item}>
                <p className={styles.link_item_p}>
                  Простой сайт CSS Generator - на HTML, CSS и JavaScript
                </p>
                <div className={styles.link_item_box}>
                  <Link
                    className={styles.link}
                    target="_blank"
                    href="https://dimaswed.github.io/textCssGenerator/"
                  >
                    Ссылка на GitHub
                  </Link>
                  <Link
                    className={styles.link}
                    target="_blank"
                    href="https://dimaswed.github.io/textCssGenerator/"
                  >
                    Ссылка на Deploy
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default PetLinks
