import React from "react";
import "./header.scss";
import {Switch, Assignment, Mail, ArrowBack} from '../svg';
import Image from '../img/image.png';
import CastomSwiper from "../castom-ant-components/swiper-container/swiper-container";
import CastomHeaderMenu from "../castom-ant-components/castom-header-menu/castom-header-menu";



let MasOfHederNavItems = [
	{id:1, title: "ПЕРЕЛЁТЫ"},
	{id:2, title: "ОТЕЛИ"},
	{id:3, title: "ЖД"},
	{id:4, title: "ТРАНСФЕРЫ"},
	{id:5, title: "АЭРОЭКСПРЕСС"},
	{id:6, title: "ВИЗЫ"},
	{id:7, title: "СТРАХОВКИ"},
	{id:8, title: "ЛЕНИВЫЙ"},
	{id:9, title: "ЗАКАЗ"},
	{id:10, title: "КОМАНДИРОВКИ"}
]

const Header = (props) => {
  return (
  	<div className="root__header header">
    	<div className="header__top-string">
				<CastomHeaderMenu 
					styles="header__burger-menu"
					MasOfHederNavItems={MasOfHederNavItems}
				/>
				<Switch className="header__logo"/>
  			<ul className="header__tools-container tools-container" scroll-left="100px">
    			<a className="tools-container__item" href="#!">
    				<Assignment className="tools-container__logo"/>
    				<span className="tools-container__name">Заказы</span>
    			</a>
    			<a className="tools-container__item" href="#!">
    				<Mail className="tools-container__logo"/>
    				<span className="tools-container__name">Сообщения</span>
    			</a>
    			<a className="tools-container__item" href="#!">
    				<img className="tools-container__profile-logo" src={Image}/>
    				<span className="tools-container__name">Константин Константинопольский</span>
    			</a>
    		</ul>
    	</div>	
			<CastomSwiper MasOfHederNavItems={MasOfHederNavItems}/>
    	<div className="header__background-string"></div>
	    <div className="header__bottom-string">
    		<ArrowBack className="header__arrow-back"/>
    		<span className="header__arrow-back--text">Назад к выдаче</span>
	    	<div className="header__container">
	    		<div className="header__info brief-client-info">
	    			Санкт-Петербург — Москва, 3 пассажира из аэропорта <br/>в отель 20.09.2019
	    		</div>
	    		<div className="header__change-search">
	    			Изменить поиск
	    		</div>
	    	</div>		    	
	    </div>
    </div>
	);    	
}
export default Header;










/*const He = (props) => {
    return (
    	<div className="root__header header">
        	<div className="header__top-string">
	        		<Menu className="burger-menu burger-menu-wrapper">
				        <SubMenu
				          	title={			          		
				            	<span><BurgerMenu className="burger-menu__logo"/></span>
				          	}
				        >
				          <Menu.Item key="1">ПЕРЕЛЁТЫ</Menu.Item>
				          <Menu.Item key="2">ОТЕЛИ</Menu.Item>
				          <Menu.Item key="3">ЖД</Menu.Item>
				          <Menu.Item key="4">ТРАНСФЕРЫ</Menu.Item>
				          <Menu.Item key="5">АЭРОЭКСПРЕСС</Menu.Item>
				          <Menu.Item key="6">ВИЗЫ</Menu.Item>
				          <Menu.Item key="7">СТРАХОВКИ</Menu.Item>
				          <Menu.Item key="8">ЛЕНИВЫЙ ЗАКАЗ</Menu.Item>
				          <Menu.Item key="9">КОМАНДИРОВКИ</Menu.Item>
				        </SubMenu>
				    </Menu>    			
					<Switch className="header__logo"/>
        		<ul className="header__tools-container tools-container" scroll-left="100px">
        			<a className="tools-container__item" href="#!">
        				<Assignment className="tools-container__logo"/>
        				<span className="tools-container__name">Заказы</span>
        			</a>
        			<a className="tools-container__item" href="#!">
        				<Mail className="tools-container__logo"/>
        				<span className="tools-container__name">Сообщения</span>
        			</a>
        			<a className="tools-container__item" href="#!">
        				<img className="tools-container__profile-logo" src={Image}/>
        				<span className="tools-container__name">Константин Константинопольский</span>
        			</a>
        		</ul>
        	</div>
        	<div className="header__nav-container nav-container">
        		<LeftArrow
		    		className="nav-container__left-arrow"
		    	 />
	        	<RightArrow
		    		className="nav-container__right-arrow"
		    	 />
		    	<Carousel breakPoints={breakPoints}>
			      <Item>ПЕРЕЛЁТЫ</Item>
			      <Item>ОТЕЛИ</Item>
			      <Item>ЖД</Item>
			      <Item>ТРАНСФЕРЫ</Item>
			      <Item>АЭРОЭКСПРЕСС</Item>
			      <Item>ВИЗЫ</Item>
			      <Item>СТРАХОВКИ</Item>
			      <Item>ЛЕНИВЫЙ ЗАКАЗ</Item>
			      <Item>КОМАНДИРОВКИ</Item>
			    </Carousel> 
		    	<ul className="nav-container__list">
		    		<li className="header__nav-item">ПЕРЕЛЁТЫ</li>
		    		<li className="header__nav-item">ОТЕЛИ</li>
		    		<li className="header__nav-item">ЖД</li>
		    		<li className="header__nav-item">ТРАНСФЕРЫ</li>
		    		<li className="header__nav-item">АЭРОЭКСПРЕСС</li>
		    		<li className="header__nav-item">ВИЗЫ</li>
					<li className="header__nav-item">СТРАХОВКИ</li>
					<li className="header__nav-item">ЛЕНИВЫЙ ЗАКАЗ</li>
					<li className="header__nav-item">КОМАНДИРОВКИ</li>
		    	</ul>
	    	</div>
	    	<div className="header__background-string"></div>
		    <div className="header__bottom-string">
		    		<ArrowBack className="header__arrow-back"/>Назад к выдаче
		    	<div className="header__container">
		    		<div className="header__info brief-client-info">
		    			Санкт-Петербург — Москва, 3 пассажира из аэропорта <br/>в отель 20.09.2019
		    		</div>
		    		<div className="header__change-search">
		    			Изменить поиск
		    		</div>
		    	</div>		    	
		    </div>

      	</div>
	    );    	
  }
  */