import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'

import 'react-id-swiper/src/styles/css/swiper.css'

Carousel.propTypes = {
  children: PropTypes.any.isRequired,
  pagination: PropTypes.bool,
  autoplay: PropTypes.number,
  slidesPerView: PropTypes.number
}

const paginationProp = {
  el: '.carousel-pagination',
  clickable: true
}

const autoplayProp = delay => ({
  delay,
  disableOnInteraction: true
})

function Carousel ({ children, slidesPerView, pagination, autoplay }) {
  const swiperProps = {
    pagination: pagination && paginationProp,
    autoplay: autoplay ? autoplayProp(autoplay) : undefined,
    spaceBetween: 16,
    slidesPerView
  }
  console.log(slidesPerView)
  return (
    <Swiper key={slidesPerView} {...swiperProps}>
      {children}
    </Swiper>
  )
}

export default Carousel
