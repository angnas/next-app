import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <h2>angela</h2>
      <Link href="/users">USERS</Link>
      <ProductCard />
    </main>
  );
}
