import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>home page</div>
      <Link href="/test" prefetch>
        link to /test
      </Link>
    </>
  );
}
