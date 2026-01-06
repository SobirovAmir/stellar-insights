// Footer.js
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-footer">
      <p>Author: <strong>Zavkiddin Mirtoshev</strong></p>
      <p>© 2025. All right reserved.</p>
    </footer>
  );
};

export default Footer;
