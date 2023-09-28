import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
      <Link className="text-blue-400" href='/about'>Link About Page</Link>
    </main>
  );
}
