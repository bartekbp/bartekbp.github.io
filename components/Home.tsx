import React, { ReactElement, useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import styles from "./Home.module.css";
import gsap from "./initializedGsap";
import TextBody from "./TextBody";

import SplitWords from "./SplitWords";
import PersonIcon from "./PersonIcon";
import ScrollIcon from "./ScrollIcon";
import { Link } from "./Link";
import Stack from "./Stack";
import ResponsiveColumn from "./ResponsiveColumn";

const maxMoveXPx = 10;
const maxMoveYPx = 12.5;

const calculateTranslation = (mousePos: number, clientSize: number, maxMove: number): number => {
  const screenPosition = mousePos / clientSize;
  return (screenPosition - 0.5) * 2 * maxMove;
};

const Home = (): ReactElement => {
  const [mouseRoot, setMouseRoot] = useState<null | HTMLElement>(null);
  const mouse = useMouse(mouseRoot);
  const moveX = calculateTranslation(mouse.clientX, mouse.elementWidth, maxMoveXPx);
  const moveY = calculateTranslation(mouse.clientY, mouse.elementHeight, maxMoveYPx);
  const [completedAnimation, setCompletedAnimation] = useState(false);

  useEffect(() => {
    setMouseRoot(window.document.body);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          autoRemoveChildren: false,
          onComplete: () => setCompletedAnimation(true),
        })
        .to(`.${styles.words}`, {
          opacity: 1,
          duration: 0.3,
          ease: "ease-out",
          stagger: 0.3,
        })
        .fromTo(
          `.${styles.text}`,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "ease-out",
          }
        )
        .from(`.${styles.scrollIcon}`, {
          opacity: 0,
          duration: 0.5,
        })
        .seek(completedAnimation ? 100 : 0);
    });

    return () => {
      ctx.revert();
    };
  }, [completedAnimation]);

  return (
    <ResponsiveColumn className={styles.container}>
      <Stack spacing={"1rem"}>
        <TextBody variant={"h2"} className={styles.title}>
          <SplitWords wordClassName={styles.words}>Hi! I&apos;m Bartek Polnik</SplitWords>
        </TextBody>
        <TextBody variant={"body"} className={styles.text}>
          <span>A full stack developer passionate about building delightful products for the web. Now at</span>{" "}
          <Link href={"https://genieai.tech/"} variant={"text"}>
            Genie
          </Link>
          <span>, making robo advisor for crypto investing a reality.</span>
        </TextBody>
        <div
          className={styles.imgWrapper}
          style={{
            transform: `translateX(${moveX}px) translateY(${moveY}px)`,
          }}
        >
          <PersonIcon />
        </div>
        <ScrollIcon className={styles.scrollIcon} startAnimation={completedAnimation} />
      </Stack>
    </ResponsiveColumn>
  );
};

export default Home;