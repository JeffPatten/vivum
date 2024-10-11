import React from "react";

const Library = (props) => {
  if (props.type === "food") {
    return (
    <div>
      Map through meals
    </div>
    ) 
  } else if (props.type === "exercise") {
    return (
    <div>
      Map through exercises
    </div>
    )  
  }
};

export default Library;
