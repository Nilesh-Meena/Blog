import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <main className="bg-red-600 h-[800px]">
        <CardList />
        <Menu />
        <h1>Heelo I ma Moon</h1>
      </main>
    </div>
  );
}
