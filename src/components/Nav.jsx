import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='flex gap-4 text-inherit'>
      <Link to='/' className='py-3 font-semibold transition-colors text-inherit hover:text-amber-400'>Home</Link>
      <Link to='/' className='py-3 font-semibold transition-colors text-inherit hover:text-amber-400'>About</Link>
      <Link to='/gamelist' className='py-3 font-semibold transition-colors text-inherit hover:text-amber-400'>Games</Link>
      <Link to='/' className='py-3 font-semibold transition-colors text-inherit hover:text-amber-400'>Contact</Link>
    </nav>
  );
};

export default Nav;