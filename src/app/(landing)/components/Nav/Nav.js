import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-between px-[35px] pt-3 transition-colors delay-[0.5s] ease-in-out">
      <Link href="/">jechel sanchez</Link>
      <button>+</button>
      {/* <Link></Link> */}
    </nav>
  );
}
 
export default Nav;