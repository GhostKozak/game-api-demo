import { FaFacebookF, FaInstagram, FaSteam, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialBanner = () => {
  return (
    <section>
      <div className="container mx-auto mt-20 mb-9 flex justify-center gap-28">
        <a href="#" className="mb-8 py-4 group text-center"> <FaFacebookF className="mx-auto mb-4 text-4xl text-amber-400" /> <span className="text-lg font-bold uppercase group-hover:text-amber-400 transition-colors">facebook</span> </a>
        <a href="#" className="mb-8 py-4 group text-center"> <FaTwitter className="mx-auto mb-4 text-4xl text-amber-400" /> <span className="text-lg font-bold uppercase group-hover:text-amber-400 transition-colors">twitter</span> </a>
        <a href="#" className="mb-8 py-4 group text-center"> <FaYoutube className="mx-auto mb-4 text-4xl text-amber-400" /> <span className="text-lg font-bold uppercase group-hover:text-amber-400 transition-colors">youtube</span> </a>
        <a href="#" className="mb-8 py-4 group text-center"> <FaInstagram className="mx-auto mb-4 text-4xl text-amber-400" /> <span className="text-lg font-bold uppercase group-hover:text-amber-400 transition-colors">instagram</span> </a>
        <a href="#" className="mb-8 py-4 group text-center"> <FaTwitch className="mx-auto mb-4 text-4xl text-amber-400" /> <span className="text-lg font-bold uppercase group-hover:text-amber-400 transition-colors">twitch</span> </a>
        <a href="#" className="mb-8 py-4 group text-center"> <FaSteam className="mx-auto mb-4 text-4xl text-amber-400" /> <span className="text-lg font-bold uppercase group-hover:text-amber-400 transition-colors">steam</span> </a>
      </div>
    </section>
  );
};

export default SocialBanner;