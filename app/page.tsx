import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import { HomeProps } from "@/interfaces/interfaces";
import "./globals.css";

export default function Page({ searchParams }: HomeProps) {
  const page = parseInt(searchParams?.page || "1");

  return (
    <div className="wrapper">
      <Featured />
      <CategoryList />
      <main className="flex gap-12">
        <CardList page={page} />
        <Menu />
      </main>
    </div>
  );
}
