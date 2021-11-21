import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <ul className="flex-row">
            {categories.map(category => (
                <li
                    className={`mx-1 ${currentCategory === category && 'navActive'}`}
                    key={category}
                >
                    <span
                        onClick={() => {
                            setCurrentCategory(category);
                        }}
                    >
                        {capitalizeFirstLetter(category)}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;