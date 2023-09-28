import Link from "next/link";

export default function Home() {
  return (
    <main>
      Home Page
      <Link className="text-blue-400" href='/about'>Link About Page</Link>
    </main>
  );
}
