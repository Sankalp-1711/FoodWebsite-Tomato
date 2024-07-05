import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {
// Here we destructure the setShowLogin
 const[menu,setMenu] = useState("home");
 
 const {getTotalCartAmount} = useContext(StoreContext);
 
  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
       <ul className="navbar-menu">
       <Link to='/' onClick={() => setMenu("home")}  className={menu==="home"?"active":""}>Home</Link>
       <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
       <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
       <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="" />
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>
            sign in
        </button>
       </div>
    </div>
  )
}

export default Navbar

// As the state varaible menu ko compare kra rhe h agar wo home h to active class name hoga home pr but nhi hui to empty string hogi 
// Abhi humne active class m thhodi css lagadi h jiski wjah se home pr lining aari h as default state hmne home kr rkhi h agar hmne menu krdi to menu pr aajaega is wajah se hme kuch logic bnana pdega
//Jisse jispe bhi cursor aae uspe line aajae mtlb active class uspe aajae
//onclick se setMenu function ne sbko active class name ka access dedia uspe click krte hi active class usi pr aajaegi. 

//When a menu item is clicked, setMenu updates the menu state to the corresponding value (e.g., "menu").
//The component re-renders, and the condition menu === "menu" is evaluated for each menu item.
//The clicked menu item gets the active class, applying the styles defined for active items (e.g., an underline).


//Link tag se cart k icon ko wrap krdia jisse uspe click krne se wha redirect hojhae