import React from 'react'
import Slider from 'infinite-react-carousel';
import PropTypes from 'prop-types';
import './Slide.scss'
const Slide = ({arrowsScroll,slidesToShow,centerPadding,children}) => {
  
  Slide.propTypes = {
    arrowsScroll: PropTypes.number.isRequired,
    slidesToShow: PropTypes.number.isRequired,
    centerPadding: PropTypes.number.isRequired,

    children: PropTypes.node.isRequired,
  };

  return (
    <div className='slide'>
        <div className='container'>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} centerPadding={centerPadding}>
          {children}
     </Slider>
        </div>
    </div>
  )
}

export default Slide