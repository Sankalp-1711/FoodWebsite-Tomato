// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../components/context/StoreContext'

// const PlaceOrder = () => {
//    const {getTotalCartAmount} =  useContext(StoreContext)
//   return (
//     <div>
//       <form className='place-order'>
//         <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className='multi-fields'>
//           <input type="text" placeholder='First Name' />
//           <input type="text"  placeholder='Last Name' />
//         </div>
//         <input type="email" placeholder='Email address' />
//         <input type="text" placeholder='Street' />
//         <div className='multi-fields'>
//           <input type="text" placeholder='City' />
//           <input type="text"  placeholder='State' />
//         </div>
//         <div className='multi-fields'>
//           <input type="text" placeholder='Zip code' />
//           <input type="text"  placeholder='Country' />
//         </div>
//         <input type="text" placeholder='Phone' />
//         </div>

//         <div className="place-order-right">
//         <div className="cart-total">
//             <h2>Cart Totals</h2>
//             <div>
//             <div className="cart-total-details">
//                 <p>SubTotal</p>
//                 <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//             <p>Delivery Fee</p>
//             <p>${getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//                 <b>Total</b>
//                 <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
//             </div>
//             </div>
//             <button>Proceed To Payment</button>
//         </div>
//         </div>


//       </form>
        
//     </div>
//   )
// }

// export default PlaceOrder

import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../components/context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handlePaymentClick = (e) => {
    e.preventDefault();  // Prevent form submission
    setPaymentModalOpen(true);
  };

  const closeModal = () => {
    setPaymentModalOpen(false);
  };

  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className='multi-fields'>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className='multi-fields'>
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className='multi-fields'>
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>

        <div className="place-order-right">
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
            <button onClick={handlePaymentClick}>Proceed To Payment</button>
          </div>
        </div>
      </form>

      {isPaymentModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Payment Successful</h2>
            <p>The Payment is Successfully done. Your Meal is on the way.</p>
            <button className='closebtn' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaceOrder;


