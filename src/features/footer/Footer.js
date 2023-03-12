function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
      <div className="footer">
          <div className="footer-text">Copyright © {year}</div>
          <div className="footer-text">Kato Heijmans</div>
      </div>
    );
};
  
export default Footer;