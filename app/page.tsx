import Button from "@/components/Button";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className=" ">
        <Button>Get Started</Button>
        <Link href="/Tutorials">Take me </Link>
      </main>
    </>
  );
}
