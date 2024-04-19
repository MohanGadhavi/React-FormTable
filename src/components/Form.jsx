import { useState } from "react";

import Records from "./Records";

import "../App.css";

function Form() {
  const [data, setdata] = useState({});
  const [records, setRecords] = useState([]);

  function addData(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  let { nameInput, ageInput } = data;
  function addArray(e) {
    e.preventDefault();
    // console.log(data);
    setRecords([...records, { nameInput, ageInput }]);
    // console.log(records);
  }

  return (
    <>
      <div className="Box formBox">
        <h3>USER FORM</h3>
        <form className="formSection" onSubmit={addArray}>
          <section className="nameSection">
            <label htmlFor="nameInput">Name: </label>
            <input
              className="nameInput"
              name="nameInput"
              type="text"
              id="nameInput"
              onChange={addData}
              required
            />
          </section>
          <section className="nameSection">
            <label htmlFor="ageInput">Age: </label>
            <input
              type="number"
              name="ageInput"
              id="ageInput"
              onChange={addData}
              required
            />
          </section>
          <input type="submit" value="ADD" />
        </form>
      </div>

      {/* <button onClick={showresult}>Show the array</button> */}
      <Records records={records} setRecords={setRecords} />
    </>
  );
}

export default Form;
