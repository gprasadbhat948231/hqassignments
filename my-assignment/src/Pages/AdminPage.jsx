import { useEffect, useState } from "react";
import "./AdminPage.css";
import SearchBox from "../Components/SearchBox";
import CustomerTable from "../Components/CustomerTable";
import DeleteSelected from "../Components/DeleteSelected";
import Pagination from "../Components/Pagination";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const perPage = 10;
  const [isEditable, setIsEditable] = useState(true);
  const [rowCheckboxes, setRowCheckboxes] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState();
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((res) => {
        let cData = res.length !== 0 && res.slice(startIndex, endIndex);
        setData(cData);
      });
  }, [currentPage]);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const handleNextPage = () => setCurrentPage(currentPage + 1);

  const handlePrevPage = () => setCurrentPage(currentPage - 1);

  const handleRowCheckboxChange = (newRow) => {
    const isSelected = rowCheckboxes.includes(newRow);
    if (isSelected) {
      setRowCheckboxes(rowCheckboxes.filter((item) => item !== newRow));
    } else setRowCheckboxes([...rowCheckboxes, newRow]);
  };

  const handleSelectAll = (e) => setSelectedAll(e.target.checked);

  const handleDeleteSelected = () => {
    if (selectedAll) return setData([]);
    else {
      let remainingData = data.filter((el) => !rowCheckboxes.includes(el.id));
      setRowCheckboxes([]);
      setData(remainingData);
    }
  };

  const handleDelete = (id) => {
    let updatedData = data.filter((el) => el.id !== id);
    setData(updatedData);
  };

  const handleEditData = (id) => {
    setIsEditable(!isEditable);
    setEditId(id);
  };

  return (
    <div>
      <div>
        <h2>Welcome to HireQuotient Admin Dashboard</h2>
      </div>
      <div className="search">
        <SearchBox />
      </div>
      <div className="table-body">
        <CustomerTable
          data={data}
          handleRowCheckboxChange={handleRowCheckboxChange}
          rowCheckboxes={rowCheckboxes}
          handleSelectAll={handleSelectAll}
          selectAll={selectedAll}
          handleEditData={handleEditData}
          handleDelete={handleDelete}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          editId={editId}
          currentPage={currentPage}
        />
      </div>
      <div className="footers">
        <DeleteSelected handleDeleteSelected={handleDeleteSelected} />
        <Pagination
          onChange={handlePageChange}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};
export default AdminPage;
