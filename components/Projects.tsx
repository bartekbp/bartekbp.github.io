import React, { useEffect } from "react";
import ResponsiveColumn from "./ResponsiveColumn";

import { Link } from "./Link";
import TextBody from "./TextBody";
import HLine from "./HLine";
import Stack from "./Stack";
import gsap from "./initializedGsap";

import styles from "./Projects.module.css";
import Project from "./Project";
import GithubIconLink from "./GithubIconLink";
import ExternalIconLink from "./ExternalIconLink";
import DownloadIcon from "./DownloadIcon.svg";
import Icon from "./Icon";

const Projects = () => {
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
        .from(`.${styles.projects}`, {
          y: "+30vw",
          opacity: 0,
          duration: 0.8,
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ResponsiveColumn className={styles.container}>
      <Stack spacing={"2rem"}>
        <TextBody variant={"h3"} id={"projects"} className={styles.header}>
          <Link href={"#projects"} variant={"text"}>
            Things I&apos;ve built
          </Link>
          <HLine className={styles.line} />
        </TextBody>
        <div className={styles.projects}>
          <Project
            title={"Genie AI"}
            notes={
              <>
                <ExternalIconLink href={"https://genieai.tech/"} />
              </>
            }
            role={"Senior Fullstack Developer"}
            technology={["ReactJS", "Strawberry GraphQL", "Python", "SQLAlchemy", "PostgreSQL", "AWS"]}
          >
            Portfolio management system with batteries included. Supporting cryptocurrencies, futures. Allowing you to
            import portfolio, analyze it and optimize future investments. Providing builtin forecasts and alerting.
          </Project>
          <Project
            title={"Nextbank CBS"}
            notes={
              <>
                <ExternalIconLink href={"https://nextbank.ph/"} />
              </>
            }
            role={"TechLead Fullstack Developer"}
            technology={["ReactJS", "Spring", "Java", "MyBatis", "PostgreSQL", "AWS"]}
          >
            Next-gen cloud based core banking system. Fully packaged solution allowing you to run a modern bank. With
            instant payments, wire transfers, checks, atm, mobile application and reporting.
          </Project>
          <Project
            title={"Ferrero Rocher"}
            notes={
              <>
                <ExternalIconLink href={"https://www.ferrerorocher.com/"} />
              </>
            }
            role={"TechLead Fullstack Developer"}
            technology={["Liferay"]}
          >
            Master version of the website implemented in a content management system. Allowing for different subpages
            per language and embedding ad-hoc content.
          </Project>
          <Project title={"ADS"} role={"Fullstack Developer"} technology={["Spring", "Angular", "Webpack", "HBase"]}>
            Application dynamically injecting advertisements based on a set of customizable rules for corporate client.
          </Project>
          <Project
            title={"Search"}
            role={"Fullstack Developer Associate"}
            technology={["Sprint", "ReactJS", "RequireJS", "ElasticSearch", "Hibernate", "Retrofit", "RxJava", "Grunt"]}
          >
            Ultra fast search engine. Populated with domains, accounts, applications and documents. Tuned for relevance
            and supporting fuzzy searching.
          </Project>
          <Project
            title={"VFS"}
            role={"Erlang Developer"}
            technology={["Erlang", "Ranch", "Mnesia", "Gen_Server_Mock", "Rebar"]}
          >
            Virtual file system abstracting location of files, supporting custom rules for transfering content. Bultin
            with efficiency of data transfer and scalability in mind.
          </Project>
          <Project
            title={"Typescript-Checkstyle"}
            role={"Author, Core Maintainer"}
            technology={["Typescript", "NodeJS"]}
            notes={
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  4k
                  <Icon>
                    <DownloadIcon />
                  </Icon>
                  /week
                </div>
                <GithubIconLink href={"https://github.com/bartekbp/typescript-checkstyle"} />
              </>
            }
          >
            My own tool for reporting errors from typescript compiler to checkstyle format. It makes it possible to
            collect typescript errors from codebase and publish using other tools to Bitbucket or Github. Trusted by{" "}
            <Link href={"https://automattic.com/"} variant={"text"}>
              Automattic
            </Link>
            , the team behind{" "}
            <Link href={"https://wordpress.com/"} variant={"text"}>
              WordPress.com
            </Link>
          </Project>
        </div>
      </Stack>
    </ResponsiveColumn>
  );
};

export default Projects;
