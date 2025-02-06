'use client';

import React, { useState } from 'react'
import Nav from './Nav'
import MobailNav from './MobailNav'

const Responsive = () => {

  const [showNav, setShowNav] = useState(false);
const showNavHandler = ()=>setShowNav(true);
const hideNavHandler = ()=>setShowNav(false)
  return (
    <>
    <Nav openNav={showNavHandler} />
    <MobailNav showNav={showNav} closeNav={hideNavHandler} />
    </>
    );
  
}

export default Responsive
