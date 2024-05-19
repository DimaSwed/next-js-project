import React from 'react'
import styles from '../../styles/weatherSkeleton.module.sass'
import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'

const WeatherForecastSkeleton = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
      centerMode: false
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 3,
      slidesToSlide: 1,
      centerMode: false
    },
    mobile: {
      breakpoint: { max: 764, min: 468 },
      items: 2,
      slidesToSlide: 1,
      centerMode: true
    },
    mobile_min: {
      breakpoint: { max: 468, min: 0 },
      items: 1,
      slidesToSlide: 1,
      centerMode: true
    }
  }
  return (
    <Carousel
      containerClass="react-multi-carousel-list"
      additionalTransfrom={0}
      arrows={true}
      centerMode={false}
      responsive={responsive}
      itemClass="custom-carousel-item"
      removeArrowOnDeviceType={['mobile', 'mobile_min']}
      partialVisible={false}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div className={styles.weather_wrapper} key={index}>
          <div className={`${styles.weather_card} ${styles.skeleton}`}>
            <div className={`${styles.weather_icon} ${styles.skeleton_element}`}></div>
            <h1 className={`${styles.title_h1} ${styles.skeleton_element}`}></h1>
            <div className={styles.weather_parametrs}>
              <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}> </h2>
              <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}> </h2>
              <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}></h2>
              <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}></h2>
            </div>
            <p className={`${styles.paragraph} ${styles.skeleton_element}`}></p>
          </div>
        </div>
      ))}
    </Carousel>
    // <div className="weather_wrapper">
    //   <div className="weather_card skeleton">
    //     <div className="weather_icon skeleton-element"></div>
    //     <h1 className="skeleton-element"></h1>
    //     <div className="weather_parametrs">
    //       <h2 className="skeleton-element"></h2>
    //       <h2 className="skeleton-element"></h2>
    //       <h2 className="skeleton-element"></h2>
    //       <h2 className="skeleton-element"></h2>
    //     </div>
    //     <p className="skeleton-element"></p>
    //   </div>
    // </div>
    // <div className={styles.skeleton_container}>
    // <div className={styles.weather_wrapper}>
    //   <div className={`${styles.weather_card} ${styles.skeleton}`}>
    //     <div className={`${styles.weather_icon} ${styles.skeleton_element}`}></div>
    //     <h1 className={`${styles.title_h1} ${styles.skeleton_element}`}></h1>
    //     <div className={styles.weather_parametrs}>
    //       <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}> </h2>
    //       <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}> </h2>
    //       <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}></h2>
    //       <h2 className={`${styles.title_h2} ${styles.skeleton_element}`}></h2>
    //     </div>
    //     <p className={`${styles.paragraph} ${styles.skeleton_element}`}></p>
    //   </div>
    // </div>
    // </div>
  )
}

export default WeatherForecastSkeleton
