"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Home = () => {
  const [message, setMessage] = useState("Loading");
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>{message}</div>
    </main>
  );
};

export default Home;
