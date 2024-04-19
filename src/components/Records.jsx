import { useState } from "react";
import "../App.css";

function Records({ records, setRecords }) {
  const [editable, setEditable] = useState();
  const [updateData, setUpdateData] = useState({});

  function updateDataHandler(e) {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  if (records.length != 0) {
    return (
      <div className="Box recordBox">
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
                        onChange={updateDataHandler}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="ageInput"
                        className="ageInput"
                        onChange={updateDataHandler}
                        required
                      />
                    </td>
                    <td className="actions">
                      <button onClick={() => updateRecords(index)}>
                        Update
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
                    <button onClick={() => deleteRecord(index)}>Delete</button>
                    <button onClick={() => editRecord(index)}>Edit</button>
                  </td>
                </tr>
              );

              function deleteRecord(index) {
                const newRecord = records.filter((rec, i) => i !== index);
                // console.log(newRecord);
                setRecords(newRecord);
              }
              function editRecord(index) {
                setEditable(index);
              }
              function updateRecords(index) {
                setEditable();
                let { nameInput, ageInput } = updateData;
                const newRecord = [...records];
                newRecord[index] = { nameInput, ageInput };
                setRecords(newRecord);
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
