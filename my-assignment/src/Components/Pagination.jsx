import "./Pagination.css";
const Pagination = ({
  onChange,
  handlePrevPage,
  handleNextPage,
  currentPage
}) => {
  return (
    <div>
      <div className="pagination-btn-container">
        <div className="fbtns">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => onChange(1)}
          >
            {"<<"}
          </button>
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            {"<"}
          </button>
        </div>
        <div className="page-nos">
          <button
            className="page-btn"
            style={{ background: currentPage === 1 ? "gray" : "white" }}
            onClick={() => onChange(1)}
          >
            1
          </button>
          <button
            className="page-btn"
            onClick={() => onChange(2)}
            style={{ background: currentPage === 2 ? "gray" : "white" }}
          >
            2
          </button>
          <button
            className="page-btn"
            style={{ background: currentPage === 3 ? "gray" : "white" }}
            onClick={() => onChange(3)}
          >
            3
          </button>
          <button
            className="page-btn"
            style={{ background: currentPage === 4 ? "gray" : "white" }}
            onClick={() => onChange(4)}
          >
            4
          </button>
          <button
            className="page-btn"
            style={{ background: currentPage === 5 ? "gray" : "white" }}
            onClick={() => onChange(5)}
          >
            5
          </button>
        </div>
        <div className="bbtns">
          <button
            className="page-btn"
            disabled={currentPage === 5}
            onClick={() => handleNextPage}
          >
            {">"}
          </button>
          <button
            className="page-btn"
            onClick={() => onChange(5)}
            disabled={currentPage === 5}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
