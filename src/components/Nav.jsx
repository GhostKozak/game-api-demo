import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='flex gap-4 text-inherit'>
      { 
        [
          ["/", "Home"],
          ["/about", "About"],
          ["/gamelist", "Games"],
          ["/contact", "Contact"]
        ].map(([path,name], index) => (
          <Link to={path} key={index} className='py-3 font-semibold transition-colors text-inherit hover:text-amber-400 drop-shadow-md'>{name}</Link>
        ))
      }
    </nav>
  );
};

export default Nav;