// // import React, { useContext } from 'react'
// // import './Cart.css'
// // import { StoreContext } from '../../components/context/StoreContext'
// // import { assets } from '../../assets/assets'
// // import { useNavigate } from 'react-router-dom'
// // const Cart = () => {
// //     const {cartItems,food_list,removeFromCart, getTotalCartAmount, setCartItems} = useContext(StoreContext)

// //     const navigate = useNavigate();
    
// //     const clearCart = () => {
// //         setCartItems({});
// //     };

// //     const isCartEmpty = Object.keys(cartItems).length === 0;


// //   return (
// //     <div className='cart'>
// //      <div className="cart-items">
// //         <div className="cart-items-title">
// //             <p>Items</p>
// //             <p>Title</p>
// //             <p>Price</p>
// //             <p>Quantity</p>
// //             <p>Total</p>
// //             <p>Remove</p>
// //         </div>
// //         <br />
// //         <hr />
// //         {food_list.map((item,index)=>{
// //         if(cartItems[item._id]>0)
// //             {
// //                 return (
// //                     <>
// //                     <div className='cart-items-title cart-items-item'>
// //                    <img src={item.image} alt="" />
// //                    <p>{item.name}</p>
// //                    <p>${item.price}</p>
// //                    <p>{cartItems[item._id]}</p>
// //                    <p>${item.price*cartItems[item._id]}</p>
// //                    <p onClick={()=>removeFromCart(item._id)} className='cross'>
// //                     <img src ={assets.remove_icon_2} alt="" />
// //                    </p>
// //                     </div>
// //                     <hr />
// //                     </>
// //                 )
// //             }

// //         })}
// //          {!isCartEmpty && (
// //                     <button className="empty-cart-button" onClick={clearCart}>Empty Cart</button>
// //                 )}

// //      </div>

// //      <div className="card-bottom">
// //         <div className="cart-total">
// //             <h2>Cart Totals</h2>
// //             <div>
// //             <div className="cart-total-details">
// //                 <p>SubTotal</p>
// //                 <p>${getTotalCartAmount()}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //             <p>Delivery Fee</p>
// //             <p>${getTotalCartAmount()===0?0:2}</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //                 <b>Total</b>
// //                 <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
// //             </div>
// //             </div>
// //             <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
// //         </div>
// //         <div className="cart-promocode">
// //             <div>
// //                 <p>If you have a promocode enter it here</p>
// //                 <div className='cart-promocode-input'>
// //                  <input type="text" placeholder='promo code' />
// //                  <button>Submit</button>
// //                 </div>
// //             </div>
// //         </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Cart

// // //proceed to checkout waaale button pr place order wala page navigate krdia jis / se humne app.jsx m route bnaya tha 



// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../components/context/StoreContext';
// import { assets } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//     const { cartItems, food_list, removeFromCart, getTotalCartAmount, setCartItems } = useContext(StoreContext);
//     const navigate = useNavigate();
//     const isCartEmpty = Object.keys(cartItems).length === 0;

//     const clearCart = () => {
//         setCartItems({});
//     };

//     return (
//         <div className='cart'>
//             <div className="cart-items">
//                 <div className="cart-items-title">
//                     <p>Items</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Quantity</p>
//                     <p>Total</p>
//                     <p>Remove</p>
//                 </div>
//                 <br />
//                 <hr />
//                 {food_list.map((item, index) => {
//                     if (cartItems[item._id] > 0) {
//                         return (
//                             <div key={index} className='cart-items-title cart-items-item'>
//                                 <img src={item.image} alt="" />
//                                 <p>{item.name}</p>
//                                 <p>${item.price}</p>
//                                 <p>{cartItems[item._id]}</p>
//                                 <p>${item.price * cartItems[item._id]}</p>
//                                 <p onClick={() => removeFromCart(item._id)} className='cross'>
//                                     <img src={assets.remove_icon_2} alt="" />
//                                 </p>
//                             </div>
//                         )
//                     }
//                     return null;
//                 })}
//                 <button className="empty-cart-button" onClick={clearCart}>Empty Cart</button>
//             </div>

//             <div className="card-bottom">
//                 <div className="cart-total">
//                     <h2>Cart Totals</h2>
//                     <div>
//                         <div className="cart-total-details">
//                             <p>SubTotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <p>Delivery Fee</p>
//                             <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <b>Total</b>
//                             <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
//                         </div>
//                     </div>
//                     <button className="proceed-to-checkout-button" onClick={() => navigate('/order')} disabled={isCartEmpty}>
//                         Proceed To Checkout
//                     </button>
//                 </div>
//                 <div className="cart-promocode">
//                     <div>
//                         <p>If you have a promocode enter it here</p>
//                         <div className='cart-promocode-input'>
//                             <input type="text" placeholder='promo code' />
//                             <button>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart;

import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount, setCartItems } = useContext(StoreContext);
    const navigate = useNavigate();
    const [isCartEmpty, setIsCartEmpty] = useState(true); // State to track if cart is empty

    useEffect(() => {
        // Check if cartItems is empty whenever it changes
        setIsCartEmpty(Object.keys(cartItems).length === 0);
    }, [cartItems]);

    const clearCart = () => {
        setCartItems({});
        setIsCartEmpty(true); // Reset isCartEmpty state when clearing cart
    };

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
        // Check if cart is empty after removing an item
        setIsCartEmpty(Object.keys(cartItems).length === 0);
    };

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} className='cart-items-title cart-items-item'>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price * cartItems[item._id]}</p>
                                <p onClick={() => handleRemoveItem(item._id)} className='cross'>
                                    <img src={assets.remove_icon_2} alt="" />
                                </p>
                            </div>
                        )
                    }
                    return null;
                })}
                <button className="empty-cart-button" onClick={clearCart} disabled={isCartEmpty}>
                    Empty Cart
                </button>
            </div>

            <div className="card-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button className="proceed-to-checkout-button" onClick={() => navigate('/order')} disabled={isCartEmpty}>
                        Proceed To Checkout
                    </button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promocode enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;



