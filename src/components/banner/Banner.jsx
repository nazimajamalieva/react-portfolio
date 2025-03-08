import "./banner.css";
import bannerImg from "../../assets/hero-img.jpg";
import ButtonAccept from "../button-accent/ButtonAccent";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-text">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <ButtonAccept url="#" label="Download Resume" />
        </div>
        <div className="banner-img-wrapper">
          <img src={bannerImg} alt="John Doe" />
        </div>
      </div>
    </section>
  );
}
