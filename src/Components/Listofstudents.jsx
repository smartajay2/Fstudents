import React, { useContext, useState } from "react";
import { NameContext } from "./Contextprovider";

function Listofstudents() {
  const { value, handleDelete } = useContext(NameContext);

  const [addedToFavorites, setAddedToFavorites] = useState([]);

  const handleAddToFavorites = (id) => {
    setAddedToFavorites([...addedToFavorites, id]);
    handleDelete(id);
  };

  return (
    <div>
      <div>
        <h1 className="flex justify-center">List of students</h1>
      </div>
      <div>
        {value.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <span className="flex justify-between items-center ml-9 mr-9">{item.id}.{item.Activity}
            <button
              style={{ marginLeft: "10px", color: addedToFavorites.includes(item.id) ? "gray" : "white", backgroundColor: "black" }}
              onClick={() => handleAddToFavorites(item.id)}
              disabled={addedToFavorites.includes(item.id)} // Disable button if already added to favorites
              className="shadow-md" // Adding shadow effect
            >
              {addedToFavorites.includes(item.id) ? "Add to Favorite" : "Add to Favorite"}
            </button></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listofstudents;
