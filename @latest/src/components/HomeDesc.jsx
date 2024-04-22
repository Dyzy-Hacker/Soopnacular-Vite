import React from "react";
import { useParams } from "react-router-dom";

const HomeDesc = ({ data }) => {
  const { name } = useParams();

  return (
    <div>
      <div className="text-l sm:text-2xl ">
        {data
          .filter((description) => description.name === name)
          .map((description, index) => (
            <div key={index} className="p-10">
              <h1 className="font-bold p-5 ">Ingredients</h1>

              {/* Za da gi mapirame edno pod edno !!! */}
              {description.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}

              <h1 className="font-bold p-5">Method of preparation</h1>
              <ol>
                {description.methodOfpreparation.map(
                  (methodOfpreparation, index) => (
                    <li key={index}>{methodOfpreparation}</li>
                  )
                )}
              </ol>
              <h1 className="font-bold p-5">Additional Information</h1>
              <ul>
                {description.additionalInformation.map(
                  (additionalInformation, index) => (
                    <li key={index}>{additionalInformation}</li>
                  )
                )}
              </ul>
              <div className="p-[15vh]">
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeDesc;
