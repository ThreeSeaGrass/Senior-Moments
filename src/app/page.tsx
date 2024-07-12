import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 child:border-white child:border-2 child:p-4 child:mb-2 child:w-full child:text-center child:md:py-16 child:text-xl">
      <Link className="active:bg-slate-900" href="/frontend">Frontend</Link>
      <Link className="active:bg-slate-900" href="/backend">Backend</Link>
      <Link className="active:bg-slate-900" href="/ux">UX</Link>
      <Link className="active:bg-slate-900" href="/devops">Devops</Link>
      <Link className="active:bg-slate-900" href="/domain">Domain</Link>
    </main>
  );
}
