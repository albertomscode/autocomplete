"use client";
import Asynchronous from "./components/AsynchronousReq";
import ComboBox from "./components/ComboBox";
import Grouped from "./components/Grouped";
import CheckBoxes from "./components/CheckBoxes";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the autocomplete page!</h1>

      <div className="section">
        <p className="section-title">Select an employee profile you want to access:</p>
        <ComboBox />
      </div>

      <div className="section">
        <p className="section-title">Select music album from the list:</p>
        <Asynchronous />
      </div>

      <div className="section">
        <p className="section-title">Select the employees alphabetically:</p>
        <Grouped />
      </div>

      <div className="section">
        <p className="section-title">Enter more than one value:</p>
        <CheckBoxes />
      </div>
    </div>
  );
}
