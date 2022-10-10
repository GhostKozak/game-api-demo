import { Link } from "react-router-dom";
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

const NavSocial = () => {
  return (
    <nav className='flex gap-3 justify-end text-inherit'>
      <Link to='/' className='py-3 text-inherit hover:text-gray-800'><FaSearch /></Link>
      <Link to='/' className='py-3 text-inherit hover:text-blue-800'><FaFacebookF /></Link>
      <Link to='/' className='py-3 text-inherit hover:text-blue-400'><FaTwitter /></Link>
      <Link to='/' className='py-3 text-inherit hover:text-pink-700'><FaInstagram /></Link>
      <Link to='/' className='py-3 text-inherit hover:text-purple-700'><FaTwitch /></Link>
    </nav>
  );
};

export default NavSocial;