
import { Link } from "react-router-dom";

import "./highlights.css";

function Highlights() {
  return (
    <section id="highlights">
      <div id="specials-banner">
        <h1>Special Offers</h1>
        <Link to="/bookingpage" className="btn">Reserve Table</Link>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="/images/food1.jpg" alt="Image 1" />
          <div className="card-content">
            <h3>Delish Dish</h3>
            <p>Made from some of the finest ingredients known to the planet.</p>
          </div>
        </div>
        <div className="card">
          <img src="/images/food2.jpg" alt="Image 2" />
          <div className="card-content">
            <h3>Tasty Meal</h3>
            <p>Tastebuds will write you a thank-you card and send flowers.</p>
          </div>
        </div>
        <div className="card">
          <img src="/images/food3.jpg" alt="Image 3" />
          <div className="card-content">
            <h3>Food Hungry</h3>
            <p>For a VIP experience in taste, even those who never eat food will be surprised.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Highlights;