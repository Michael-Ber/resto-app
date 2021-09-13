import React from 'react';
import './menu-list-item.scss';
import saladsIcon from '../app/salad.svg';
import meatIcon from '../app/meat.svg';
import pizzaIcon from '../app/pizza.svg';

const MenuListItem = ( {menuItem} ) => {
    const {title, price, url, category} = menuItem;
    let icon;
    if(category === 'salads') {
        icon = saladsIcon;
    }else if(category === 'meat') {
        icon = meatIcon;
    }else if(category === 'pizza') {
        icon = pizzaIcon;
    }
    
    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category} <img src={icon} alt={category} style={{width: '20px', height: '20px'}}></img></span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;