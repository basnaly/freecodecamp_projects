export const SelectedRecipe = (name) => {
    return {
        type: 'SELECTED_RECIPE',
        name
    }
}

export const DeleteRecipe = (name) => {
    return {
        type: 'DELETE_RECIPE',
        name
    }
}

export const AddRecipe = (addRecipe) => {
    return {
        type: 'ADD_RECIPE',
        addRecipe
    }
}

export const SetFormOpen = () => {
    return {
        type: 'SET_FORM_OPEN',
    }
}

export const SetFormClose = () => {
    return {
        type: 'SET_FORM_CLOSE',
    }
}

export const StartEditingRecipe = (name) => {
    return {
        type: 'START_EDITING_RECIPE',
        name
    }
}

export const FinishEditingRecipe = (editedRecipe) => {
    return {
        type: 'FINISH_EDITING_RECIPE',
        editedRecipe
    }
}
