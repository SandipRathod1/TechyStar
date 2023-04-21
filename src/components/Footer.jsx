import React from 'react';
import '../style/footer.scss';

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>Test Star</h1>
            <p>@ all rights reserved</p>
        </div>
        <div>
            <h5>Fallow Us</h5>
            <div className="adiv">
            <a href="https://www.youtube.com" target={"blank"}>youtube</a>
            <a href="https://www.instagram.com" target={"blank"}>instagram</a>
            <a href="https://www.facebook.com" target={"blank"}>facebook</a>
        </div>
        </div>
    </footer>
  )
}

export default Footer;
