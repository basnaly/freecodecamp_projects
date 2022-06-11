import React from "react";
import { useSelector } from "react-redux";

import { Paper } from "@mui/material";

const RecipeComponent = () => {

    const newSelectedRecipe = useSelector(state => state.recipes.listRecipes
        .find(recipe => recipe.name === state.recipes.selectedRecipe));
    console.log(newSelectedRecipe);

    if (!newSelectedRecipe) {
        return (
        <div className="norecipe-rcb">Select the recipe</div>
        )
    }

    return (

        <div className="width-one-rcb d-flex flex-column overflow-auto">
            
                <Paper className="d-flex flex-column my-1">
                    <div className="name-rcb">
                        {newSelectedRecipe.name}
                    </div>
                    <div className="ingredients-rcb">
                        <div className="title-rcb">
                            Ingredients:
                        </div>
                        <ul className="data-rcb d-flex flex-column">
                            {newSelectedRecipe.ingredients
                            .map(el => <li className="transform-rcb"
                                    key={ el.name }>
                                    {el.name}: {el.quantity} 
                                 </li>)}    
                        </ul>
                    </div>
                    <div className="directions-rcb wrap-nowrap">
                        <div className="title-rcb">
                            Directions:
                        </div>
                        <ul className="data-rcb d-flex flex-column wrap-nowrap">
                            {newSelectedRecipe.steps.map(el => 
                            <li key={ el }> 
                                { el } 
                            </li>)}
                        </ul>
                    </div>

                </Paper>
            
        </div>
    )
}

export default RecipeComponent;