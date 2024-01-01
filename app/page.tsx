import { Navbar } from "@/components";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      Home Page
      <Button />
    </main>
  );
}
