import "./App.css";

function App() {
  return (
    <main className="bitewise-landing">
      <header className="hero">
        <nav className="navbar" aria-label="Main Navigation">
          <div className="logo">BiteWise</div>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <section className="hero-content">
          <h1>Smarter Food Choices, Healthier Life</h1>
          <p className="subtitle">
            Empowering you to make informed decisions about what you eat, every
            day.
          </p>
          <a href="#features" className="cta-btn">
            Learn More
          </a>
        </section>
      </header>
      <section id="features" className="features">
        <h2>Why Choose BiteWise?</h2>
        <div className="features-list">
          <div className="feature-card">
            <h3>Personalized Insights</h3>
            <p>
              Get tailored recommendations based on your dietary needs and
              preferences.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Food Scanning</h3>
            <p>
              Scan barcodes or search foods to instantly see nutrition facts and
              health scores.
            </p>
          </div>
          <div className="feature-card">
            <h3>Track & Improve</h3>
            <p>
              Monitor your eating habits and get actionable tips to improve your
              health.
            </p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>
              Join a community of health-conscious users and share your journey.
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About BiteWise</h2>
        <p>
          BiteWise is your smart companion for making better food choices. Our
          mission is to simplify nutrition and empower everyone to live a
          healthier, happier life. With advanced food scanning, personalized
          insights, and a supportive community, BiteWise helps you take control
          of your nutrition journey.
        </p>
        <ul className="about-list">
          <li>Founded: 2025</li>
          <li>Location: Global, remote-first</li>
          <li>Platform: Web & Mobile</li>
        </ul>
      </section>
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>Is BiteWise free to use?</h4>
            <p>
              Yes! BiteWise offers a free plan with essential features. Premium
              plans are available for advanced analytics and coaching.
            </p>
          </div>
          <div className="faq-item">
            <h4>How accurate is the food database?</h4>
            <p>
              Our food database is updated regularly and uses trusted sources
              for nutrition data. Users can also contribute and suggest edits.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can I use BiteWise on my phone?</h4>
            <p>
              Absolutely! BiteWise is available on both web and mobile platforms
              for your convenience.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div>© {new Date().getFullYear()} BiteWise. All rights reserved.</div>
        <div id="contact">
          Contact: <a href="mailto:info@bitewise.com">info@bitewise.com</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
