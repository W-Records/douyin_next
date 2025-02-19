import Image from "next/image";
import styles from "./page.module.css";

import { Button } from 'antd';
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>

      
      <Link href="/about">跳到/about</Link>
      <Button type="primary">Button</Button>

    </main>
  );
}
