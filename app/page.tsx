import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-96 h-32 bg-gray-300 rounded-3xl justify-center items-center flex-col">
        <h3 className="text-black">NextJS HELLO!!!</h3>
        <Link href="/users" className="text-blue-500">Users</Link>
        <Link href="/about" className='text-blue-400'>About</Link>
      </div>
    </main>
  );
}
