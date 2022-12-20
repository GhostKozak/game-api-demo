import { FaMapMarkerAlt,FaEnvelopeOpen,FaPhone,FaFax } from "react-icons/fa";

const Contact = () => {
  return ( // p-5 mt-32
    <>
      <iframe className=" w-full h-[600px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.877296461667!2d29.0092464149391!3d41.020457352809636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab82bea99445f%3A0x6ed7f4baceb4476c!2sMaiden&#39;s%20Tower!5e0!3m2!1sen!2str!4v1670339311790!5m2!1sen!2str" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="px-5 py-20 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <div className="grid gap-3 grid-cols-2">
                <input type="text" placeholder="Name" className="p-4 placeholder:font-semibold font-semibold tracking-widest border" />
                <input type="text" placeholder="Email Address" className="p-4 placeholder:font-semibold font-semibold tracking-widest border" />
                <input type="text" placeholder="Phone Number" className="p-4 placeholder:font-semibold font-semibold tracking-widest border" />
                <input type="text" placeholder="Subject" className="p-4 placeholder:font-semibold font-semibold tracking-widest border" />
                <textarea placeholder="Message" rows="4" className="resize-y p-4 placeholder:font-semibold font-semibold tracking-widest border col-span-2"></textarea>
                <input type="submit" value="Submit" className="p-4 bg-green-600 text-white font-bold uppercase w-32 cursor-pointer border-2 border-green-600 hover:bg-white hover:text-green-600 transition-colors" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="">
                <p className="flex gap-2 items-center mb-2"><FaMapMarkerAlt className="text-amber-400" /> Sancaktepe, Istanbul, Turkey</p>
                <p className="flex gap-2 items-center mb-2"><FaEnvelopeOpen className="text-amber-400" /> <a href="mailto:donotmail@example.com">example@gmail.com</a> </p>
                <p className="flex gap-2 items-center mb-2"><FaPhone className="text-amber-400" /> 0506 979 618 32 18</p>
                <p className="flex gap-2 items-center mb-2"><FaFax className="text-amber-400" /> 951 33 44</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, <span className="font-bold text-gray-500">voluptua iracundia disputationi an pri,</span> his utinam principes dignissim ad. Ne nec dolore oblique nusquam, <span className="underline">cu luptatum volutpat delicatissimi has.</span> Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto. Ea movet saperet rationibus sit, <span className="text-amber-400">pri autem aliquip invidunt</span> an consetetur omittantur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;