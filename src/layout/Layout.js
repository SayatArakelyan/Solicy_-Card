import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Instructions from "./instructions/Instructions";
import "./layout.css"


function Layout() {


    return (
        <>
        <main>
            <Header/>
            <Instructions/>
        </main>
    <Footer/>
        </>
    );
}

export default Layout;