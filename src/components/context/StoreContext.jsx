import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";



export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {


const [cartItems , setCartItems]  = useState({});


const addToCart = (itemId) => {
    if(!cartItems[itemId]){  // This is actually for if this item is not previously in the cart with key id will be itemId. 
       setCartItems((prev) => ({...prev , [itemId]:1}))
    } // This will create a new entry for our food product


else {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) // This is for that if the cart did have previusly that item 

}
}

//Now we will make remove from cart

const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1})) //This is remove from cart will decrease the value by 1.
}

// useEffect(()=>{
// console.log(cartItems)  // To log the clicked item in cart along with it quantity(no. of time +- clicked)
// },[cartItems]  
// )

const getTotalCartAmount = () => {
    let totalAmount = 0 ;
    for(const item in cartItems)  //The item here is the key value her for cart items
        {
            if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=>product._id === item)
            totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;

}


    const contextValue = {
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider