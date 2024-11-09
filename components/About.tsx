import React, { ReactElement, useEffect } from "react";
import ResponsiveColumn from "./ResponsiveColumn";

import styles from "./About.module.css";
import { Link } from "./Link";
import TextBody from "./TextBody";
import HLine from "./HLine";
import Stack from "./Stack";
import gsap from "./initializedGsap";
import clsx from "clsx";
import Tile from "./Tile";
import sortBy from 'lodash/fp/sortBy';

const Img = ({ alt, src, className }: { src: string; alt: string; className?: string }): ReactElement => {
  return <img src={src} alt={alt} className={clsx(styles.img, className)} title={alt} />;
};

interface Tile {
  name: string;
  icon: string;
  className?: string;
}

const tiles: Tile[] = [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    name: 'AWS',
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    name: 'NodeJS'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    name: 'PostgreSQL'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/262px-Java_programming_language_logo.svg.png',
    name: 'Java',
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    name: 'React'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    name: 'Typescript'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png',
    name: 'Vite'
  }, {
    icon: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg',
    name: 'Terraform'
  }, {
    icon: 'https://opentelemetry.io/img/logos/opentelemetry-horizontal-color.svg',
    name: 'Open telemetry',
    className: styles.imgWide
  }
]

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${styles.container}`,
            start: "-50% top",
          },
        })
        .from(`.${styles.line}`, {
          maxWidth: 0,
          duration: 0.3,
        })
        .from(`.${styles.text}`, {
          x: "-100vw",
          duration: 0.5,
        })
        .from(
          `.${styles.technology}`,
          {
            x: "+100vw",
            duration: 0.5,
          },
          "=-0.5"
        )
        .from(`.${styles.text} div`, {
          y: "+100",
          opacity: 0,
          stagger: 0.2,
        })
        .from(`.${styles.technology} div`, {
          opacity: 0,
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const headerSpacing = "1rem";
  return (
    <ResponsiveColumn className={styles.container}>
      <Stack spacing={headerSpacing} className={clsx(styles.textColumn, styles.maxWidth)}>
        <TextBody variant={"h3"} id={"about"} className={styles.header}>
          <Link href={"#about"} variant={"text"}>
            About Me
          </Link>
          <HLine className={styles.line} />
        </TextBody>
        <Tile className={styles.text}>
          <Stack spacing={"1rem"}>
            <TextBody variant={"body"}>
              Hello! I&apos;m <TextBody variant={"emph"}>Bartek</TextBody>, a full-stack developer with over a <TextBody variant={"emph"}>decade</TextBody> of experience in the industry
            </TextBody>
            <TextBody variant={'body'}>
              I hold a degree in Computer Science from <Link href={"https://iet.agh.edu.pl/en/"} variant={"text"} wrap>AGH University of Science and Technology</Link>, where I
              developed a strong foundation in building robust solutions across frontend, backend, and devops domains
            </TextBody>
            <TextBody variant={'body'}>
              Throughout my career, I&apos;ve successfully delivered projects such as portfolio management system, core banking platform, multilingual CMS websites,
              search engines, and virtual file system.
              I&apos;ve had the privilege of collaborating with talented teams across startups, marketing agencies, large organizations, and the open-source community
            </TextBody>
            <TextBody variant={'body'}>
              At <Link href={"https://genieai.tech/"} variant={"text"}>Genie</Link>, I&apos;m focused on developing a system that enhances decision-making for crypto investors
            </TextBody>
          </Stack>
        </Tile>
      </Stack>
      <Stack spacing={headerSpacing} className={clsx(styles.techColumn, styles.maxWidth)}>
        <TextBody variant={"h3"} className={clsx(styles.header, styles.rightHeader)}>
          <HLine maxWidth={"7rem"} className={styles.line} />
          <TextBody variant={"emph"}>My Skills</TextBody>
        </TextBody>
        <Tile className={clsx(styles.technology)}>
          <div className={styles.iconContainer}>
            {
              tiles.map(tile => <div className={styles.tile} key={tile.name}>
                <Img src={tile.icon} alt='' className={clsx(styles.icon, tile.className)} />
                <span className={styles.caption}>{tile.name}</span>
              </div>)
            }
          </div>
        </Tile>
      </Stack>
    </ResponsiveColumn>
  );
};

export default About;
