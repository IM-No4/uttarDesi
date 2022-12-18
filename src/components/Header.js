import React, { useState } from 'react';
import {FiShoppingBag,FiLogOut,FiPlus} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import Logo from './img/logo.png';
import Avatar from './img/avatar.png';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user},dispatch] = useStateValue();
  
  const [isMenu, setIsMenu] = useState(false);
  
  const login = async () => {
    if(!user)
    {
      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user",JSON.stringify(providerData[0]));
    }else{
      setIsMenu(!isMenu); 
    }
  };

  const logout = () =>
  {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  }
  return (
    <header className='fixed z-50 w-screen p-4 px-4 md:p-6 md:px-10 bg-white'>
      {/* desktop and tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className="w-20 md:w-150 object-cover" alt='logo' />
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul 
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:50}}
            className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to={"/"}>Home</Link></li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
          </motion.ul>
          <div className='relative flex items-center justify-center'>
            <FiShoppingBag className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img 
            whileTap={{scale : 0.8}} 
            src={user ? user.photoURL : Avatar} 
            className="w-12 min-w-[40px] h-12 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt='User' 
            onClick={login} />
            {
            isMenu && (
            <motion.div 
            initial={{opacity:0,scale:0.6}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0.6}}
            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col px-4 py-2 right-0 absolute'>
              {
                user && user.email === "amritpatel425@gmail.com" && (
                  <Link to={"/createItem"}>
                  <p className='px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-400 transition-all duration-100 ease-in-out text-textColor text-base'>
                    Create Item 
                    <FiPlus className='text-textColor m-0 text-xl cursor-pointer'/></p>
                  </Link>
                )
              }
              <p className='px-0 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-400 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>
                Logout
                <FiLogOut className='text-textColor m-0 text-xl cursor-pointer'/></p>
            </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className="w-20 object-cover" alt='logo' />
        </Link>
          <div className='relative flex items-center justify-center'>
            <FiShoppingBag className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-2 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img 
            whileTap={{scale : 0.8}} 
            src={user ? user.photoURL : Avatar} 
            className="w-12 min-w-[40px] h-12 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" alt='User' 
            onClick={login} />
            {
            isMenu && (
            <motion.div 
            initial={{opacity:0,scale:0.6}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0.6}}
            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col px-4 py-2 right-0 absolute'>
              {
                user && user.email === "amritpatel425@gmail.com" && (
                  <Link to={"/createItem"}>
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer'>Create Item</p>
                  </Link>
                )
              }
              <ul 
                className='flex flex-col gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
              </ul>
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-400 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout<FiLogOut className='text-textColor m-0 text-xl cursor-pointer'/></p>
            </motion.div>
            )}
          </div>
      </div>
    </header>
  )
}

export default Header
