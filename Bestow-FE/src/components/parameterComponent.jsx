import { useState } from "react";
import axios from "axios";

const ParameterComponent = ({ data, handler }) => {
  const title = data.title;
  const entries = data.data;
  console.log(data);

  return (
    
        entries.map((entry) => (
          <div
            key={entry}
            className="paramButtonContainer"
          >
            <button
              className="paramButton"
              key={entry}
              onClick={() => handler(title, entry)}
            >
              {entry}
            </button>  
          </div>
        ))
        
  );
};
export default ParameterComponent;
