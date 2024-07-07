import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 child:border-white child:border-2 child:p-4 child:mb-2">
      <Link href="/frontend">Frontend</Link>
      <Link href="/backend">Backend</Link>
      <Link href="/ux">UX</Link>
      <Link href="/devops">Devops</Link>
      <Link href="/domain">Domain</Link>
    </main>
  );
}
