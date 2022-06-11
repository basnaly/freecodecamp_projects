import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Paper } from "@mui/material";
import { SelectedRecipe, DeleteRecipe, StartEditingRecipe } from "./ActionsRecipe";
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

const EditButton = styled(Button)({
    textTransform: 'none',
    color: 'dodgerblue',
    border: '1px solid dodgerblue',
    fontSize: '16px',
    minWidth: 'unset',
})

const DeleteButton = styled(Button)({
    textTransform: 'none',
    color: 'deeppink',
    border: '1px solid deeppink',
    fontSize: '16px',
    minWidth: 'unset',
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid lightskyblue',
    boxShadow: 24,
    p: 4,
  };

const ListRecipesComponent = () => {

    const newListRecipes = useSelector(state => state.recipes.listRecipes);

    const dispatch = useDispatch();

    const selectedRecipe = (name) => {
        dispatch(SelectedRecipe(name))
    }

    const deletedRecipe = (name) => {
        dispatch(DeleteRecipe(name))
    }

    const editRecipe = (name) => {
        dispatch(StartEditingRecipe(name))
    }

    return (
        <div className="width-list-rcb d-flex flex-column overflow-auto">
            {
                newListRecipes.map(el =>
                    <Paper className="title-list-rcb d-flex align-items-center m-1 "
                        key={el.name}
                        onClick={() => selectedRecipe(el.name)}>
                        <div className="my-auto">
                            <img src={el.imageURL}
                                className="img-rcb" />
                        </div>
                        <div className="mx-4">
                            {el.name}
                        </div>
                        <div className="d-flex flex-column ms-auto">
                            <EditButton onClick={ () => editRecipe(el.name)}
                                variant={'outlined'} className="align-self-center m-1"
                                size="small" >
                                <BiEditAlt />
                            </EditButton>
                            <DeleteButton onClick={ () => deletedRecipe(el.name) }
                                variant={'outlined'} className="align-self-center m-1"
                                size="small" >
                                <AiOutlineDelete />
                            </DeleteButton>
                        </div>
                    </Paper>
                )
            }

        </div>
    )
}

export default ListRecipesComponent;