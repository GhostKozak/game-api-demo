import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import NavSocial from "./NavSocial";

const Header = ({ y }) => {
  const {pathname} = useLocation();
  return (
    <header className={`fixed top-0 w-full z-30 transition-all ${(y < -90 || pathname !== "/") ? "bg-amber-400/70 backdrop-blur-md" : ""}`}> {/* shadow-lg backdrop-blur-md */}
      <div className="container mx-auto flex p-4 h-32">
        <div className="brand font-black flex items-center text-white">GhostKozak w/ <span className={` pl-1 ${(y < -90 || pathname !== "/") ? "text-purple-900" : "text-amber-400"}`}> Eyupcanee</span></div>
        <div className="flex items-center px-5 ml-auto">
          <button type="submit" className="flex flex-col justify-center overflow-auto h-6 group">
            <span className="
                        w-8 
                        h-1 
                        bg-slate-800 
                        my-1 
                        relative 
                        group-hover:bg-transparent
                        transition-all 
                        before:transition-all 
                        after:transition-all 
                        hidden 

                        before:w-full 
                        before:h-full 
                        before:inline-block 
                        before:bg-slate-800 
                        before:absolute 
                        before:-top-2 
                        before:left-0 
                        group-hover:before:rotate-45 
                        group-hover:before:translate-x-1
                        group-hover:before:translate-y-2

                        after:w-full  
                        after:h-full 
                        after:inline-block 
                        after:bg-slate-800 
                        after:absolute 
                        after:-bottom-2 
                        after:left-0
                        group-hover:after:-rotate-45 
                        group-hover:after:translate-x-1
                        group-hover:after:-translate-y-2
                        "></span>
          </button>
        </div>
        <div className="nav-container ml-auto flex flex-col gap-2 text-white">
          <NavSocial />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;