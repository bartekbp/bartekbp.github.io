import React, { ReactNode, useLayoutEffect, useRef } from "react";
import TextBody from "./TextBody";
import Stack from "./Stack";

import styles from "./Project.module.css";
import useMouse from "@react-hook/mouse-position";
import Tile from "./Tile";

const maxRotationY = 12;
const maxRotationX = 6;

const Project = ({
  title,
  children,
  notes,
  technology,
  role,
}: {
  title: ReactNode;
  children: ReactNode;
  role: string;
  technology: string[];
  notes?: ReactNode;
}) => {
  const mouseRoot = useRef<HTMLDivElement>();
  const mouse = useMouse(mouseRoot.current);
  const mouseXPercentage = mouse.isOver ? mouse.x / mouse.elementWidth : 0.5;
  const mouseYPercentage = mouse.isOver ? mouse.y / mouse.elementHeight : 0.5;
  const rotationX = -1 * (mouseXPercentage - 0.5) * 2 * maxRotationX;
  const rotationY = -1 * (mouseYPercentage - 0.5) * 2 * maxRotationY;

  useLayoutEffect(() => {
    mouseRoot.current.style.setProperty("--radius-center", `${mouseXPercentage * 100}% ${mouseYPercentage * 100}%`);
  }, [mouseXPercentage, mouseYPercentage]);

  return (
    <div
      className={styles.container}
      ref={mouseRoot}
      style={{
        transform: `scale(${mouse.isOver ? '1.02' : '1'}) rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
      }}
    >
      <Tile className={styles.tile}>
        <Stack spacing={"1rem"} className={styles.textContainer}>
          <TextBody variant={"h4"}>{title}</TextBody>
          <TextBody variant={"body"}>{children}</TextBody>
          <Stack spacing={"0.5rem"} className={styles.metaContainer}>
            <div className={styles.roleContainer}>
              <TextBody variant={"h5"}>Role</TextBody>
              <TextBody variant={"body"} className={styles.role}>
                {role}
              </TextBody>
            </div>
            <div className={styles.techContainer}>
              <TextBody variant={"h5"}>Tech</TextBody>
              {technology.map((tech) => (
                <div className={styles.tech} key={tech}>
                  {tech}
                </div>
              ))}
            </div>
          </Stack>
          <div className={styles.links}>{notes}</div>
        </Stack>
      </Tile>
    </div>
  );
};

export default Project;
