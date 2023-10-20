"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../components/Header/Header";

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      const data: any = await fetch("/api/skills");
      const dataJson = await data.json();
      setSkills(dataJson.results);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
