import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function CylindoViewer() {
  const [imgId, setImgId] = useState(1);
  const [clientX, setClientX] = useState();
  const [animate, setAnimate] = useState(false);

  function sequenceForward() {
    if (imgId == 32) {
      setImgId(1);
    } else {
      setImgId((previmgId) => previmgId + 1);
    }
  }

  function sequenceBackwards() {
    if (imgId == 1) {
      setImgId(32);
    } else {
      setImgId((previmgId) => previmgId - 1);
    }
  }

  function pointerDown(e) {
    setAnimate(true);
    setClientX(e.clientX);
  }

  function pointerUp(e) {
    setAnimate(false);
  }

  function pointerMove(e) {
    if (!animate) {
      return;
    }
    let diffClientX = e.clientX - clientX;
    if (Math.abs(diffClientX) > 0) {
      if (diffClientX > 0) {
        sequenceForward();
      } else {
        sequenceBackwards();
      }
      setClientX(e.clientX);
    }
  }

  return (
    <div
      className={styles.container}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
    >
      <div style={imgId == 1 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/1?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 2 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/2?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 3 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/3?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 4 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/4?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 5 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/5?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 6 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/6?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 7 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/7?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 8 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/8?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 9 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/9?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 10 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/10?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 11 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/11?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 12 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/12?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 13 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/13?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 14 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/14?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 15 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/15?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 16 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/16?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 17 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/17?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 18 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/18?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 19 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/19?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 20 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/20?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 21 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/21?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 22 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/22?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 23 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/23?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 24 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/24?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 25 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/25?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 26 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/26?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 27 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/27?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 28 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/28?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 29 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/29?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 30 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/30?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 31 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/31?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
      <div style={imgId == 32 ? { display: "block" } : { display: "none" }}>
        <Image
          onPointerDown={pointerDown}
          className={styles.frame}
          src="http:/content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/32?size=512"
          priority="true"
          draggable="false"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}

export default CylindoViewer;
