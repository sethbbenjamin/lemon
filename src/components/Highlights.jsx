
import {Link} from "react-router-dom";

import "./highlights.css";

function Highlights() {
  return (
    <section id="highlights">
      <div id="specials-banner">
        <h1>Special Offers</h1>
        <Link to="/menu" className="btn">Online Menu</Link>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="/images/food-special.jpg" alt="Image 1" />
          <div className="card-content">
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className="card">
          <img src="/images/food-special.jpg" alt="Image 2" />
          <div className="card-content">
            <h3>Card Title 2</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div className="card">
          <img src="/images/food-special.jpg" alt="Image 3" />
          <div className="card-content">
            <h3>Card Title 3</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Highlights;