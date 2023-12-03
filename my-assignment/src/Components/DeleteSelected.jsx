import "./DeleteSelected.css";
const DeleteSelected = ({ handleDeleteSelected }) => {
  return (
    <div>
      <div className="delete-btn" onClick={handleDeleteSelected}>
        Delete Selected
      </div>
    </div>
  );
};
export default DeleteSelected;
