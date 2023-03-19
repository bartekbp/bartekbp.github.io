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
            role={"Senior Fullstack Developer, Founding Engineer"}
            technology={["ReactJS", "Strawberry GraphQL", "Python", "SQLAlchemy", "PostgreSQL", "AWS"]}
          >
            Portfolio management system supported by a virtual assistant. Helps users to analyze their investment portfolios, stress test them, and improve their KPIs.
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
            Next-gen cloud based core banking system. Fully featured solution allowing you to run a modern bank. With
            instant payments, wire transfers, checks, ATM, mobile app integration and reporting.
            Trusted by dozens of small and medium banks in developing countries.
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
            Developed a highly optimized website for the best seller sweets from a leading candy producer in Europe.
            Complex animations, localization and content varying per country.
          </Project>
          <Project title={"ADS"} role={"Fullstack Developer"} technology={["Spring", "Angular", "Webpack", "HBase"]}>
            Framework for dynamically injecting advertisements based on a set of customizable rules for a corporate client.
          </Project>
          <Project
            title={"Search"}
            role={"Fullstack Developer Associate"}
            technology={["Sprint", "ReactJS", "RequireJS", "ElasticSearch", "Hibernate", "Retrofit", "RxJava", "Grunt"]}
          >
            An ultra fast search engine populated with heterogeneous data, such as internet domains,
            user accounts, content of internal applications and documents. Tuned for relevance
            and supporting inexact matches.
          </Project>
          <Project
            title={"VFS"}
            role={"Erlang Developer"}
            technology={["Erlang", "Ranch", "Mnesia", "Gen_Server_Mock", "Rebar"]}
          >
            A distributed virtual file system for high performance computing environments. Built to maximize the speed of file transfer, provide location transparency,
            and abstract away differences between file systems installed on dozens of computing nodes across different data centers.
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
            My own open source contribution. The tool collects errors from Typescript and makes them available through integrations in Bitbucket and Github. Trusted by{" "}
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
