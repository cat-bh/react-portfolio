import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    return (
        <header className="flex-row space-between">
            <h1>
                <a href="/">Cat Heneghan</a>
            </h1>
            <Navigation 
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Navigation>
        </header>
    );

}

export default Header;