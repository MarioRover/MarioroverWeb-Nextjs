import type { NextPage } from "next";
import styles from "../styles/home.module.scss";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.image}>
          <Image
            src={require("../public/images/icons/mario-icon.png")}
            alt="Mario Picture"
            width="100"
            height="100"
          />
        </div>
        <p className={styles.title}>
          Welcome to <span>Mario</span> website
        </p>
        <p>My name is Hossein Akbari.</p>
        <p>I'm a software enginner who made this page </p>
        <p>I'll put my information here, very soon!</p>
        <p>But you can see my social pages from bottom.</p>
        <div className={styles.social_contaienr}>
          <a href="https://github.com/MarioRover" target="_blank">
            <Image
              src={require("../public/images/icons/github.svg")}
              width="50"
              height="50"
            />
          </a>
          <a href="https://twitter.com/HusseinAkbariiim" target="_blank">
            <Image
              src={require("../public/images/icons/twitter.svg")}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.instagram.com/iamhosseinakbari/" target="_blank">
            <Image
              src={require("../public/images/icons/instagram.svg")}
              width="50"
              height="50"
            />
          </a>
          <a href="https://www.linkedin.com/in/mariorover/" target="_blank">
            <Image
              src={require("../public/images/icons/linkedin.svg")}
              width="50"
              height="50"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
