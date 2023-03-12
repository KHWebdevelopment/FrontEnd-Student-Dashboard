function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
      <div className="footer">
          <div className="footer-text">Copyright © {year}</div>
          <div className="footer-text">KHDevelopment</div>
      </div>
    );
};
  
export default Footer;
