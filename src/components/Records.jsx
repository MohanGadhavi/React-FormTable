import { useState } from "react";
import "../App.css";

function Records({ records, setRecords }) {
  const [editable, setEditable] = useState(-1);
  const [updateData, setUpdateData] = useState({});

  function updateDataHandler(e) {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  function deleteRecord(index) {
    const newRecord = records.filter((rec, i) => i !== index);
    // console.log(newRecord);
    setRecords(newRecord);
  }
  function editRecord(index) {
    setUpdateData(records[index]);
    setEditable(index);
  }
  function updateRecords(e) {
    e.preventDefault();
    let { nameInput, ageInput } = updateData;
    const newRecords = [...records];
    newRecords[editable] = { nameInput, ageInput };
    setRecords(newRecords);
    setEditable(-1);
  }

  if (records.length != 0) {
    return (
      <div className="Box recordBox">
        <form onSubmit={updateRecords}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => {
                if (editable == index) {
                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          className="nameInput"
                          name="nameInput"
                          type="text"
                          value={updateData.nameInput}
                          onChange={updateDataHandler}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="ageInput"
                          className="ageInput"
                          value={updateData.ageInput}
                          onChange={updateDataHandler}
                          required
                        />
                      </td>
                      <td className="actions">
                        <input type="submit" value="Update" />
                        <button
                          className="cencelBtn"
                          onClick={(e) => {
                            e.preventDefault();
                            setEditable(-1);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                }
                // console.log(records);
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{record.nameInput}</td>
                    <td>{record.ageInput}</td>
                    <td className="actions">
                      <button onClick={() => deleteRecord(index)}>
                        Delete
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          editRecord(index);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Records;
