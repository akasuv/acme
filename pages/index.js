import React from "react";

export default function Home() {
  const [value, setValue] = React.useState();

  const handleClick = () => {
    setValue(true);
  };
  return !value ? <h1 onClick={handleClick}>ABC</h1> : JSON.parse();
}
