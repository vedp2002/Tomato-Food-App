import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets/frontend_assets/assets.js'


const ExploreMenu = ({category,setCategory}) => {



  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>choose form a diverse menu featuring a delectable arry of dishes crafted with the finest ingredients and culinary expertise, Our mission is to satisfy your cravings and elevate your dining expenses. one delicious meal at a time</p>
        <div className="explore-manu-list">
            {menu_list.map((item, index)=>{

                return (
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}


export default ExploreMenu
