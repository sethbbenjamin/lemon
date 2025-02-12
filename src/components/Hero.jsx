import "./hero.css"
import React from 'react'

export const Hero = () => {
    return (
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam molestiae aperiam dolor fugit? Possimus.</p>
            </div>
            <img src="/images/restaurantfood.jpg" alt="Restaurant Food" />
        </section>
    )
}

export default Hero;
