import React from "react";
const a = 1;
const handleClick = () => {
  a = 10;
};

function Home() {
  return (
    <>
      <div>Este es mi home</div>
      <span>{a}</span>
      <button onClick={handleClick}>Transformamos A</button>
    </>
  );
}

export default Home;
