import Head from "next/head";
import styles from "../styles/Home.module.css";
import CylindoViewer from "../components/CylindoViewer";

export default function Home() {
  /*
  
  <CylindoViewer
    src="http:/content.cylindo.com/api/v2/4965/products/EMMA_ARMCHAIR/frames/"
    width="720"
    height="454"
  />

  <CylindoViewer
    src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/"
    width="560"
    height="560"
  />

  */

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
      <CylindoViewer
        src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/"
        width="560"
        height="560"
      />
    </>
  );
}
