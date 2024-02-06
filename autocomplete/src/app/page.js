"use client";
import Asynchronous from "./components/AsynchronousReq";
import ComboBox from "./components/ComboBox";

export default function Home() {
  return (
    <div>
      <p>Selece an emplyee profile you want to access </p>
      <ComboBox />
      <br />
      <p>Select music album from the list:</p>
      <Asynchronous />
    </div>
  );
}
