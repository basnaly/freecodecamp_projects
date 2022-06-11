import React from "react";

import './Recipe.css';
import ListRecipesComponent from "./ListRecipesComponent";
import RecipeComponent from "./RecipeComponent";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import AddComponent from "./AddComponent";
import { useDispatch, useSelector } from "react-redux";
import { SetFormOpen } from "./ActionsRecipe";

const AddButton = styled(Button)({
    textTransform: 'none',
    color: 'magenta',
    border: '1px solid magenta',
    fontSize: '16px',
    backgroundColor: 'white',
})


const AppRecipeBox = () => {

    const isFormOpen = useSelector(state => state.recipes.isFormOpen);

    const dispatch = useDispatch();

    const openForm = () => {

        dispatch(SetFormOpen())
        
    }

    return (
        <div className="parent-rcb d-flex flex-column align-items-center">
            <div className="box-rcb">
                Recipe Box
            </div>
            <AddButton onClick={ openForm }
                variant={'outlined'}
                className="mx-2">
                Add new recipe
            </AddButton>

            <div className="container d-flex align-items-start justify-content-between"> 
                <RecipeComponent />
                <ListRecipesComponent />
            </div>

            {
                isFormOpen &&
                <AddComponent />
            }
            
        </div>
        
    )
} 

export default AppRecipeBox;