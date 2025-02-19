"use client";
import { useRouter } from "next/navigation";

export default function AppHeader() {

    const router = useRouter();

    return (
      <header>
        <div onClick={() => router.push("/")}>
          <h1>头部内容</h1>
        </div>
        <hr />
      </header>
    );
}