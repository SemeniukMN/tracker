import Link from 'next/link';

export default function Header({className}: {className: string}) {
  return (
    <header className={`h-12 p-4 shadow bg-white rounded-lg flex items-center ${className}`}>
      <Link href="/" className="text-xl">Tracker</Link>
      <nav className="mx-auto flex gap-5">
        <Link href="../dashboard">Home</Link>
        <Link href="../dashboard">Dashboard</Link>
        <Link href="../dashboard">Account</Link>
        <Link href="../issues">Issues</Link>
      </nav>
    </header>
  );
}
