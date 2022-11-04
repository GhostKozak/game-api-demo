import { useEffect } from "react";
import { colorizeMetaCritic } from "../util";

const ProgressRing = ({percent}) => {
  
  useEffect(() => {
    const progressBar = document.getElementById("js-progress-bar");
    progressBar.style.strokeDashoffset = 100 - percent;
  }, [percent]);

  return (
    <div>
      <div className="relative inline-block">
        <svg className="progress-circle w-64 h-w-64 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
            <defs>
              <linearGradient id="gradient">
                  <stop offset="0" stopColor="#A4508B"></stop>
                  <stop offset="75%" stopColor="#5F0A87" stopOpacity="0.2"></stop>
              </linearGradient>
            </defs>
          <circle cx="16" cy="16" r="15.9155" className="progress-bar__background fill-none stroke-gray-200/50 stroke-2" />
          <circle cx="16" cy="16" r="15.9155" className="progress-bar__progress js-progress-bar fill-none stroke-2" style={{strokeDasharray: "100 100",strokeDashoffset: "100",strokeLinecap: "butt",}} stroke="url(#gradient)" id="js-progress-bar" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center text-small text-2xl text-amber-400 font-bold">
          Metacritic <span className={`text-3xl font-bold ${colorizeMetaCritic(percent)}`}>{percent} <small className="text-xl font-normal text-fuchsia-300">/ 100</small></span>
        </div>
      </div>
    </div>
  )
}



export default ProgressRing;