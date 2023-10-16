import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link
            href='/'
            className='text-green-300 font-bold font-orbitron   hover:underline'
          >
            Epiq Gamer
          </Link>
        </li>
        <li className='ml-auto'>
          <Link href='/reviews' className='text-green-300 hover:underline'>
            Reviews
          </Link>
        </li>
        <li>
          <Link href='/about' className='text-green-300 hover:underline'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
