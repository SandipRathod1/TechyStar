import React from "react";
import "../style/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techy Star</h1>
          <p>Sollution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
            assumenda autem impedit dolorum. Consequatur sed molestias,
            accusantium officiis similique incidunt beatae delectus consequuntur
            sequi reprehenderit quaerat blanditiis facilis fugiat voluptas quos
            earum. Provident, voluptas corporis? Sed recusandae voluptas tempore
            dolorum deleniti expedita, aperiam veritatis vero, sequi
            necessitatibus ab ipsam!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            maxime laborum incidunt iste numquam soluta eligendi cum repudiandae
            in, inventore quas! Qui nihil quos possimus assumenda nobis dicta
            vitae deleniti? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sed eos, voluptatibus quas rem amet corrupti nihil modi, nisi
            laborum sint nostrum exercitationem iure. Facilis quis assumenda,
            ipsam quia labore quibusdam doloribus mollitia voluptates, repellat
            atque cum nihil a. Consequatur sapiente obcaecati assumenda facere
            doloribus? Doloribus omnis recusandae consequatur voluptates
            architecto.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
