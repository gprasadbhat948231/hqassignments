import "./CustomerTable.css";

const CustomerTable = ({
  data,
  selectAll,
  handleSelectAll,
  handleDelete,
  rowCheckboxes,
  handleEditData,
  isEditable,
  editId,
  handleRowCheckboxChange
}) => {
  return (
    <div className="table-container">
      <table>
        <tr className="table-row-head">
          <th>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {data &&
            data.map((el) => (
              <tr
                key={el.id}
                style={{
                  backgroundColor:
                    selectAll || rowCheckboxes.includes(el.id)
                      ? "gray"
                      : "white"
                }}
              >
                <td className="rows-tdiv1">
                  <input
                    type="checkbox"
                    checked={selectAll || rowCheckboxes.includes(el.id)}
                    onChange={() => handleRowCheckboxChange(el.id)}
                  />
                </td>
                <td className="rows-tdiv">
                  <input
                    className="edit-field"
                    value={el.name}
                    name="name"
                    disabled={
                      !isEditable ? (editId == el.id ? false : true) : true
                    }
                  />
                </td>
                <td className="rows-tdiv">
                  <input
                    className="edit-field"
                    value={el.email}
                    name="email"
                    disabled={
                      !isEditable ? (editId == el.id ? false : true) : true
                    }
                  />
                </td>
                <td className="rows-tdiv">
                  <input
                    className="edit-field"
                    value={el.role}
                    name="role"
                    disabled={
                      !isEditable ? (editId == el.id ? false : true) : true
                    }
                  />
                </td>
                <td className="rows-tdiv">
                  <div className="action-btn-div">
                    <div
                      className="edit"
                      onClick={() => handleEditData(el.id)}
                    >
                      {!isEditable && el.id === editId ? "Save" : "Edit"}
                    </div>
                    <div
                      className="delete"
                      onClick={() => handleDelete(el.id)}
                    >
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
