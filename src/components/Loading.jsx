import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return(
    <section className="flex justify-center items-center py-52">
      <AiOutlineLoading3Quarters className="animate-spin text-8xl text-amber-400 drop-shadow" />
    </section>
  );
};

export default Loading;