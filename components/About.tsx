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
          <Stack spacing={"1.5rem"}>
            <TextBody variant={"body"}>
              Hello! I&apos;m a <TextBody variant={"emph"}>full-stack developer</TextBody> with over a <TextBody variant={"emph"}>decade</TextBody> of experience building all kinds of web solutions.
            </TextBody>
            <TextBody variant={'body'}>
              I studied Computer Science at <Link href={"https://iet.agh.edu.pl/en/"} variant={"text"} wrap>AGH University of Science and Technology</Link>, which gave me a solid foundation to work across frontend, backend, and devops.
            </TextBody>
            <TextBody variant={'body'}>
              Over the years, I&apos;ve built quite a few interesting projects - from <TextBody variant={"emph"}>portfolio management systems</TextBody>, <TextBody variant={"emph"}>core banking platforms</TextBody>, and <TextBody variant={"emph"}>multilingual websites</TextBody> to <TextBody variant={"emph"}>search engines</TextBody> and <TextBody variant={"emph"}>virtual file systems</TextBody>.
              I&apos;ve been lucky to work with great people in all sorts of environments - startups, marketing agencies, larger companies, and open-source communities.
            </TextBody>
            <TextBody variant={'body'}>
              I&apos;m passionate about writing clean, maintainable code and staying up-to-date with the latest technologies. When I&apos;m not coding, you&apos;ll find me exploring new frameworks or contributing to open source.
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
