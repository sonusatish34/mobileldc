import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from 'react';
<meta property="og:title" content="Title Here" />

const Layout = ({ children }) => {
    const backgroundImage = 'https://images.pexels.com/photos/9796251/pexels-photo-9796251.jpeg?auto=compress&cs=tinysrgb&w=600';
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
