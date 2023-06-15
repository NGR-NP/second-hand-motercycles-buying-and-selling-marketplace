import React from "react";

import styles from "./style/UserDashboard.module.css";
async function getData() {
  const res = await fetch("https://6482e61ff2e76ae1b95ba7cd.mockapi.io/todo");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const UserDashboard = async () => {
  const data = await getData();
  return (
    <main className={styles.main}>
      {data?.map((data): any => {
        return (
          <div key={data.id}>
            <div>{data.task}</div>
            <div>{data.deu}</div>
          </div>
        );
      })}
    </main>
  );
};

export default UserDashboard;
