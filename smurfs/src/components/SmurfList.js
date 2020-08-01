import React from "react";

const SmurfList = ({name, age, height}) => {
    return(
        <div>
            <li>
                <h4>
                    {name}
                </h4>
                <p>{age}</p>
                <p>{height}</p>
            </li>
        </div>
    )
}

export default SmurfList;