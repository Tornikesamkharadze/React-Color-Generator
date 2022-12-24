import React, { useEffect, useState } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

useEffect(()=>{
    const timeout = setTimeout(() => {
        setAlert(false)
      }, 3000)
    return () => clearTimeout(timeout)
},[alert])
  return (
    <article
      className={`color ${index > 9 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
      }}
    >
      <p className="percet-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert ch">copy</p>}
    </article>
  );
};

export default SingleColor;
