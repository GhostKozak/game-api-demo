const Footer = () => {
  return (
    <section className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between gap-2">
        <span className="flex items-center">Copyright &copy; 2018 Eyupcanee w/ GhostKozak - All right reserved.</span>
        <div className="flex gap-3">
          {[
            ["Home", "/"],
            ["About", "/"],
            ["Games", "/gamelist"],
            ["Contact", "/"]
          ].map(([title, url]) => (
            <a key={title} href={url} className="py-3 transition-colors text-inherit hover:text-amber-400" >{title}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer;