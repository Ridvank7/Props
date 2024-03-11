import React from "react";

function Person({ personName, personSurname, personAge, personTel }) {
  return (
    <div className="person">
      <p>Name: {personName}</p>
      <p>Surname: {personSurname}</p>
      <p>Age: {personAge}</p>
      <p>Tel: {personTel}</p>
    </div>
  );
}

export default Person;
