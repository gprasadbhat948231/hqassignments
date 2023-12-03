import "./Searchbox.css";
const SearchBox = () => {
  return (
    <div>
      <input className="input-field" placeholder="Search" />
      <button
        style={{
          width: "80px",
          padding: "5px",
          height: "35px",
          borderRadius: "10px",

        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
