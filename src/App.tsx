import React from 'react';
import Footer from "./components/Footer";
import Field from "./components/Field";

function App() {
    return (
        <div id="game">
            <section>
                <h1>Memory card game</h1>
                <h6>Rules are simple: try to find all pairs of given cards.</h6>
            </section>
            <section id="cards-container">
                <Field/>
            </section>
            <Footer/>
        </div>
    );
}

export default App;
