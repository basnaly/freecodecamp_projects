import React, { useState } from "react";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { styled } from "@mui/material";
import { Paper, TextareaAutosize, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AddRecipe, SetFormClose, FinishEditingRecipe } from "./ActionsRecipe";
import { useEffect } from "react";

const EditButton = styled(Button)({
    textTransform: 'none',
    color: 'dodgerblue',
    border: '1px solid dodgerblue',
    fontSize: '16px',
    minWidth: 'unset',
})

const CancelButton = styled(Button)({
    textTransform: 'none',
    color: 'deeppink',
    border: '1px solid deeppink',
    fontSize: '16px',
    minWidth: 'unset',
})

    const stepsToString = (arrSteps) => {
        if (!arrSteps) return ''
        else return arrSteps.join('\n')
    }

    const ingredientsToString = (arrIngr) => {
        if (!arrIngr) return ''
        else return arrIngr.map(el => (el.quantity ?? '') + ', ' + (el.name ?? ''))
            .join('\n')
    }

const AddComponent = () => {

    let recipeObj = useSelector(state => state.recipes.listRecipes.find(el => 
        el.name === state.recipes.editRecipe))

    const isFormOpen = useSelector(state => state.recipes.isFormOpen);
    const editRecipe = useSelector(state => state.recipes.editRecipe);
    const existingRecipiesNames = useSelector(state => state.recipes.listRecipes
        .map(el => el.name));

    const [name, setName] = useState(recipeObj?.name ?? '');
    const [ingredients, setIngredients] = useState(ingredientsToString(recipeObj?.ingredients ?? ''));
    const [steps, setSteps] = useState(stepsToString(recipeObj?.steps ?? ''));  
    const [imageURL, setImageURL] = useState(recipeObj?.imageURL ?? '');
    const [nameError, setNameError] = useState('');

    const dispatch = useDispatch();

    const validate = () => {
        if (name.length === 0) {
            setNameError('Name cannot be empty')
        }

        else if (existingRecipiesNames.includes(name) && (name !== editRecipe)) {
            setNameError('The name already exist')
        }

        else {
            setNameError('')
        }
    }

    useEffect(() => {
        validate()
    }, [name])

    const saveRecipe = (e) => {
        e.preventDefault();

        let addedRecipe = {
            name: name,
            imageURL: imageURL,
            ingredients: !ingredients ? [] : ingredients.split('\n').map(ingredient => {
                let arr = ingredient.split(',')
                return {
                    quantity: arr[0],
                    name: arr[1]
                }
            }),
            steps: !steps ? [] : steps.split('\n')
        }

        if (!editRecipe) {
            dispatch(AddRecipe(addedRecipe));
        } else {
            dispatch(FinishEditingRecipe(addedRecipe))
        }
    }

    const closeForm = () => {

        dispatch(SetFormClose())
    }

    return (
        <Modal
            open={ isFormOpen }
            onClose={closeForm}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Paper className="paper-rcb d-flex flex-column w-50 mx-auto mt-5 overflow-auto">
                <Box className="d-flex flex-column overflow-auto"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="add-rcb d-flex flex-column align-items-center">
                        Add a recipe
                    </div>
                    <div className="error-rcb">
                        { nameError }
                    </div>
                    <div className="d-flex flex-column align-items-center overflow-auto">
                        
                        <div className="add-title-rcb">Recipe</div>
                        <TextField className="m-3 mx-4 w-auto align-self-stretch flex-shrink-0"
                            id="outlined-helperText"
                            label="Recipe name"
                            value={ name }
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="add-title-rcb">Picture</div>
                        <TextField className="m-3 mx-4 w-auto align-self-stretch flex-shrink-0"
                            id="outlined-helperText"
                            label="Add image URL"
                            value={ imageURL }
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                        <div className="add-title-rcb">Ingredients</div>
                        <TextareaAutosize className="m-3 mx-4 p-2 w-auto align-self-stretch flex-shrink-0"
                            aria-label="minimum height"
                            minRows={1}
                            placeholder={'Separate quantities and name with "," and new line between ingridients'}
                            value={ ingredients }
                            onChange={(e) => setIngredients(e.target.value)}
                        />
                        <div className="add-title-rcb">Directions</div>
                        <TextareaAutosize className="m-3 mx-4 mb-4 p-2 w-auto align-self-stretch flex-shrink-0"
                            aria-label="minimum height"
                            minRows={ 1 }
                            placeholder="Separate directions using new line between them"
                            value={ steps }
                            onChange={(e) => setSteps(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <EditButton onClick={ saveRecipe }
                            variant={'outlined'} className="align-self-center m-1"
                            size="small" 
                            disabled={ !!nameError }>
                            Save
                        </EditButton>
                        <CancelButton onClick={ closeForm }
                            variant={'outlined'} className="align-self-center m-1"
                            size="small" >
                            Cancel
                        </CancelButton>
                    </div>
                </Box>
            </Paper>
        </Modal>
    )
}

export default AddComponent;