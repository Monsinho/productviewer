import Head from "next/head";
import styles from "../styles/Home.module.css";
import CylindoViewer from "../components/CylindoViewer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cylindo Viewer</title>
        <meta name="description" content="Created by Mans Nasman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heading}>
        <h1 className={styles.title}>Cylindo Viewer</h1>
      </div>
      <CylindoViewer />
    </>
  );
}
