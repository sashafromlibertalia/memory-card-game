import React from 'react';
import Card from './components/Card';
import Footer from "./components/Footer";

function App() {
    return (
        <div id="game">
            <section>
                <h1>Memory card game</h1>
            </section>
            <section id="cards-container">
                <Card/>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
}

export default App;
