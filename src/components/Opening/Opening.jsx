import React from "react";
import styles from "./opening.module.css";
import { getImageUrl } from "../../utils";

export const Opening = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Emilio</h1>
                <p className={styles.description}>I'm a 4th Year BCIS student from Mount Royal University. My goal is to become a full stack
                    developer. Reach out if you'd like to learn more.
                </p>
                <a href="mailto:eguaj552@mtroyal.ca" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/MRU Pic.jpg")} alt="Image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};