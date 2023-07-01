import Link from "next/link";

export default function Home() {
  let name = "hyna";
  return (
    <div>
      <h3 className="title">apple fresh</h3>
      <p className="title-sub">by {name}</p>
    </div>
  );
}
