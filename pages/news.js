import styles from "@/styles/Home.module.css";
import { Analytics } from "@vercel/analytics/next"
export default function News() {
  return (
    <main className={styles.main}>
        <Analytics />
    <div>
      <h1>News</h1>
      <p>Latest news updates will be displayed here.</p>
    </div>
    </main>
  );
}