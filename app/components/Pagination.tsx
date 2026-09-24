import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};
const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange((prevPage) => (prevPage - 1 >= 1 ? prevPage - 1 : 1))
        }
        className="disabled:text-gray-500"
      >
        <FaArrowLeft />
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          className={`px-3 py-1 cursor-pointer rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
          key={i}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange((prevPage) =>
            prevPage + 1 <= totalPages ? prevPage + 1 : totalPages,
          )
        }
        className="disabled:text-gray-500"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
