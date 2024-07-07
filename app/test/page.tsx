import Link from "next/link";
import { Tweets } from "./tweets";
import { useState } from "react";
import { Reels } from "./reels";

export const dynamic = "force-dynamic";

export default function Test() {
  return (
    <div>
      <div style={{ backgroundColor: "lightblue" }} data-ABC="abc">
        home page
      </div>
      <Link href="/" prefetch>
        link to /
      </Link>
      {<Reels />}
      {<Tweets />}
      {<Tweets />}
    </div>
  );
}
