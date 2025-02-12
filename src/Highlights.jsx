

function Highlights() {
  return (
    <section id="highlights">
      <div id="specials-banner">
        <h1>Special Offers</h1>
        <a href="#" className="button">Online Menu</a>
      </div>
      <div className="card-container">
        <div class="card">
          <img src="/images/food-special.jpg" alt="Image 1" />
          <div class="card-content">
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div class="card">
          <img src="/images/food-special.jpg" alt="Image 2" />
          <div class="card-content">
            <h3>Card Title 2</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
        <div class="card">
          <img src="/images/food-special.jpg" alt="Image 3" />
          <div class="card-content">
            <h3>Card Title 3</h3>
            <p>Card description goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Highlights;