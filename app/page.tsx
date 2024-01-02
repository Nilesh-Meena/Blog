import { Navbar } from "@/components";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="mt-10">Home Page</div>
      <Button />
    </main>
  );
}
