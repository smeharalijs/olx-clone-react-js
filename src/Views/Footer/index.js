import './style.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="category-section">
        <div className="category-title">POPULAR CATEGORIES</div>
        <ul className="category-list">
          <li>Cars</li>
          <li>Flats for rent</li>
          <li>Mobile Phones</li>
          <li>Jobs</li>
        </ul>
      </div>

      <div className="trending-section">
        <div className="trending-title">TRENDING SEARCHES</div>
        <ul className="trending-list">
          <li>Bikes</li>
          <li>Watches</li>
          <li>Books</li>
          <li>Dogs</li>
        </ul>
      </div>

      <div className="about-section">
        <div className="about-title">ABOUT US</div>
        <ul className="about-list">
          <li>About Dubizzle Group</li>
          <li>OLX Blog</li>
          <li>Contact Us</li>
          <li>OLX for Businesses</li>
        </ul>
      </div>

      <div className="olx-section">
        <div className="olx-title">OLX</div>
        <ul className="olx-list">
          <li>Help</li>
          <li>Sitemap</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="follow-us-section">
        <div className="follow-us-title">FOLLOW US</div>
        <div className="social-icons">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter Logo" />
          <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="Facebook Logo" />
          <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg" alt="Youtube Logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="Instagram Logo" />
        </div>
        <div className="app-stores">
          <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="App Store" />
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" />
          <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="App Gallery" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
