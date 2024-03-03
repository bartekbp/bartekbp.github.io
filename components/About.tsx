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

const tiles: Tile[] = sortBy(tile => tile.name, [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    name: 'AWS',
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    name: 'Typescript'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    name: 'Javascript'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    name: 'NodeJS'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    name: 'React'
  }, {
    icon: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon.png',
    name: 'Webpack'
  }, {
    icon: 'https://www.svgrepo.com/download/353930/jest.svg',
    name: 'Jest'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/262px-Java_programming_language_logo.svg.png',
    name: 'Java',
    className: styles.imgNarrow
  }, {
    icon: 'https://avatars.githubusercontent.com/u/1483254?s=280&v=4',
    name: 'MyBatis'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png',
    name: 'Spring',
    className: styles.imgWide,
  }, {
    icon: 'https://raw.githubusercontent.com/spockframework/spock-logo/main/Spock-Brand-Materials/logos/primary/spock-main-logo.png',
    name: 'Spock'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    name: 'Python'
  }, {
    icon: 'https://www.sqlalchemy.org/img/sqla_logo.png',
    name: 'SQLAlchemy',
    className: styles.imgWide
  }, {
    icon: 'https://avatars.githubusercontent.com/u/48071860?s=200&v=4',
    name: 'Strawberry GraphQL'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    name: 'SQL'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Erlang_logo.svg',
    name: 'Erlang'
  }, {
    icon: 'https://www.datocms-assets.com/2885/1620155116-brandhcterraformverticalcolor.svg',
    name: 'Terraform'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    name: 'PostgreSQL'
  }, {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Elasticsearch_logo.svg',
    name: 'Elasticsearch',
    className: styles.imgWide
  }
])

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
              Hi! It&apos;s great to meet you! My name is <TextBody variant={"emph"}>Bartek</TextBody> and I&apos;m a{" "}
              <TextBody variant={"emph"}>full-stack developer</TextBody> with over{" "}
              <TextBody variant={"emph"}>10 years</TextBody> of professional experience.
            </TextBody>
            <TextBody variant={"body"}>
              I&apos;ve been drawn to computers since I remember. I always loved them for their interactiveness and
              unlimited possibilities. When I was <TextBody variant={"emph"}>15 years old</TextBody>, I found a book
              about Macromedia Flesh and created <TextBody variant={"emph"}>my first animations</TextBody>.
            </TextBody>
            <TextBody variant={"body"}>
              Since then, I graduated CS at <Link href={"https://iet.agh.edu.pl/en/"} variant={"text"}>AGH UST</Link>, learnt how to effectively build features involving frontend, backend, devops and had a pleasure
              of <TextBody variant={"emph"}>working with</TextBody> amazing people in{" "}
              <TextBody variant={"emph"}>startups</TextBody>, a <TextBody variant={"emph"}>marking agency</TextBody>,{" "}
              <TextBody variant={"emph"}>corporations</TextBody> and{" "}
              <TextBody variant={"emph"}>open source community</TextBody>. Now at{" "}
              <Link href={"https://genieai.tech/"} variant={"text"}>
                Genie
              </Link>, I&apos;m helping to build a system augmenting people to make better investment decision.
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
