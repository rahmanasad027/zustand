import React from "react";
import useStorePerson from "../stores/PersonStore";

const People = () => {
  const people = useStorePerson((state) => state.people);
  console.log(people);
  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person}>{person}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
