function Footer() {
  return (
    <footer className="footer">
      <div
        className="social-icons"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center"
        }}
      >
        <a
          href="https://t.me/bitewiseuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://instagram.com/bitewise"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://facebook.com/bitewise"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            width="40"
            height="40"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
