import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function MainPage() {
    return (
        <div className="container">
            <Header/>
            <h1>MainPage

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>

                </ul>

            </h1>
            <Footer/>
        </div>
    );
}

export default MainPage;