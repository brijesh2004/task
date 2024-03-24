import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <p>Click Here to Visit the Sports Page</p>
      <button className="w-[150px] h-[45px] bg-blue-700 rounded-3xl"><Link href="/sport">Sports </Link></button>
    </div>
  );
}
