import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
import Image from 'next/image';
import logo from '../../images/newlog.png';
<meta property="og:title" content="Title Here" />

const Layout = ({ children }) => {
    const backgroundImage = 'https://images.pexels.com/photos/9796251/pexels-photo-9796251.jpeg?auto=compress&cs=tinysrgb&w=600';

    return (
        <div className="flex flex-col min-h-screen font-manrope">
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P3SZC8HS"
                height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>
            <Header />

            <main className="flex-grow bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
