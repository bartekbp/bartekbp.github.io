import React, { useEffect } from "react";
import ResponsiveColumn from "./ResponsiveColumn";

import { Link } from "./Link";
import TextBody from "./TextBody";
import HLine from "./HLine";
import Stack from "./Stack";
import gsap from "./initializedGsap";
import LinkedInLogo from "./LinkedinLogo.svg";

import styles from "./Contact.module.css";
import Tile from "./Tile";
import IconLink from "./IconLink";
import GithubIconLink from "./GithubIconLink";

const Contact = () => {
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
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ResponsiveColumn className={styles.container}>
      <Stack spacing={"5rem"}>
        <TextBody variant={"h3"} id={"contact"} className={styles.header}>
          <Link href={"#contact"} variant={"text"}>
            Contact
          </Link>
          <HLine className={styles.line} />
        </TextBody>

        <div className={styles.box}>
          <Tile className={styles.message}>
            <Stack spacing={"1rem"}>
              <TextBody variant={"body"}>
                You can always reach me via{" "}
                <Link
                  variant={"text"}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    window.open(`mailto:bartoszpolnik@gmail.com`, "_blank");
                  }}
                >
                  email
                </Link>{" "}
                or message me at Linkedin{" "}
                <IconLink href={"https://www.linkedin.com/in/bartosz-polnik-5b702181/"} className={styles.iconLogoText}>
                  <LinkedInLogo />
                </IconLink>
                .
              </TextBody>
              <TextBody variant={"body"}>
                If you would like to see more of my contributions, don&apos;t hesitate to visit my Github Profile{" "}
                <GithubIconLink href={"https://github.com/bartekbp"} className={styles.iconLogoText} />.
              </TextBody>
            </Stack>
          </Tile>
        </div>
      </Stack>
    </ResponsiveColumn>
  );
};

export default Contact;
