const Pagination = ({ increaseMethod, decreaseMethod, currentPage}) => {
  return (
    <div className="flex justify-center items-center mb-5">
      <button className="inline-block px-6 py-2 rounded transition-all shadow border border-amber-400 text-white bg-amber-400 hover:bg-white hover:text-amber-400 disabled:bg-gray-600 disabled:border-gray-600 disabled:text-white disabled:cursor-not-allowed" onClick={decreaseMethod} disabled={currentPage - 1 === 0} > Prev Page </button>
      <span className="inline-block py-2 px-3 mx-3 text-lg text-black font-bold">{currentPage}</span>
      <button className="inline-block px-6 py-2 rounded transition-all shadow border border-amber-400 text-white bg-amber-400 hover:bg-white hover:text-amber-400" onClick={increaseMethod} > Next Page </button>
      </div>
  )
}

export default Pagination;