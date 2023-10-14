"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      const data: any = await fetch('/api/skills');
      const dataJson = await data.json();
      setSkills(dataJson.results);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {skills.map((skill: any) => (
          <div key={skill._id} className={styles.card}>
            <h2>{skill.title}</h2>
            <p>{skill.desc}</p>
          </div>
          ))}
      </div>
    </main>
  )
}
