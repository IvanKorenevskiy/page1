import React from "react";
import "./swiper-container.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import PropTipes from "prop-types";



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CastomSwiper = (props) => {
	return (
  	<Swiper
			slidesPerView= {'auto'}
			spaceBetween= {4.6}
			navigation
		>
			{props.MasOfHederNavItems.map(HederNavItem => {
				return (
					<SwiperSlide key={HederNavItem.id}>
						<a className="swiper-slide__link">{HederNavItem.title}</a>
					</SwiperSlide>)
			})}	
		</Swiper>
  );    	
}

CastomSwiper.propTipes={
	MasOfHederNavItems: PropTipes.arrayOf(PropTipes.object).isRequied
}

export default CastomSwiper;