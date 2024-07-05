// // import React, { useState } from 'react'
// // import Navbar from './components/Navbar/Navbar'
// // import { Route, Routes } from 'react-router-dom'
// // import Cart from './pages/Cart/Cart'
// // import Home from './pages/Home/Home'
// // import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// // import Footer from './components/Footer/Footer'
// // import LoginPopup from './components/LoginPopup/LoginPopup'
// // const App = () => {

// //   const [showLogin ,setShowLogin] = useState(false)
// //   return (

// //     <>
// //    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
// //     <div className='app'>
// //     <Navbar setShowLogin = {setShowLogin} />
// //     <Routes>
// //     <Route path='/' element={<Home/>} />
// //      <Route path='/cart' element={<Cart/>} />
// //      <Route path='/order' element={<PlaceOrder/>} />
// //     </Routes>
// //     </div>
// //     <Footer />
// //     </>
// //   )
// // }

// // export default App

// // //Now we are creating routers for different pages
// // // We are returning two elements here thats why we were getting error in that
// // //We actually passed setShowLogin using prop 


// // App.jsx

// import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Cart from './pages/Cart/Cart';
// import Home from './pages/Home/Home';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// import Footer from './components/Footer/Footer';
// import LoginPopup from './components/LoginPopup/LoginPopup';

// const App = () => {
//     const [showLogin, setShowLogin] = useState(false);

//     return (
//         <>
//             {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//             <div className='app'>
//                 <Navbar setShowLogin={setShowLogin} />
//                 <Routes>
//                     <Route path='/' element={<Home />} />
//                     <Route path='/cart' element={<Cart />} />
//                     <Route path='/order' element={<PlaceOrder />} />
//                 </Routes>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default App;

// App.jsx

import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;

