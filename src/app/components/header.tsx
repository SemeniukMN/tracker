import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-12 m-4 p-4 shadow-lg rounded-lg flex items-center">
      <Link href="/">LOGO</Link>
      <nav className="mx-auto flex gap-5">
        <Link href="../dashboard">Home</Link>
        <Link href="../dashboard">Dashboard</Link>
        <Link href="../dashboard">Account</Link>
        <Link href="../dashboard">Tasks</Link>
      </nav>
    </header>
  );
}
