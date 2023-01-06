import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>My Home | Home</Head>
      <div className="content">
        <h1 className={styles.title}>Home Page</h1>

        <p className={styles.text}>
          Use microfrontends to architect an app that dozens of teams can work
          on at the same time
        </p>
        <p className={styles.text}>
          Structure your apps to scale to millions of users
        </p>
        <Link className={styles.btn} href="/courses">
          Courses
        </Link>
      </div>
    </>
  );
}
