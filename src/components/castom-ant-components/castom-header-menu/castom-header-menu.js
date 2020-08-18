import React from "react";
import "./castom-header-menu.scss";
import PropTipes from "prop-types";
import {Menu} from 'antd';
import {BurgerMenu} from '../../svg';



const { SubMenu } = Menu;

const CastomHeaderMenu = (props) => {
	return (
		<Menu className={`${props.styles} castom-header-menu`}>
      <SubMenu
      	title={			          		
        	<span><BurgerMenu className="castom-header-menu__logo"/></span>
      	}
      >
      {props.MasOfHederNavItems.map(HederNavItem => {return <Menu.Item key={HederNavItem.id}>{HederNavItem.title}</Menu.Item>})}
      </SubMenu>
    </Menu>
   );    	
}

CastomHeaderMenu.propTipes={
	MasOfHederNavItems: PropTipes.arrayOf(PropTipes.object).isRequied
}

export default CastomHeaderMenu;