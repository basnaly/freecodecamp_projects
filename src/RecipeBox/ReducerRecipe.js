import { DefaultRecipes } from "./DefaultRecipes";

const loadState = () => {
    try {
        const serialState = localStorage.getItem('listRecipes');
        if (serialState === null) {
            return {}
        }
        return { listRecipes: JSON.parse(serialState) };
    } catch (err) {
    return {};
    }
};

const listRecipesFromLs = loadState();
console.log(listRecipesFromLs)

const initState = {
    listRecipes: [...DefaultRecipes],
    selectedRecipe: undefined,
    editRecipe: undefined,
    isFormOpen: false,
    loading: false,
    error: '',
    ...listRecipesFromLs,
}

const ReducerRecipe = (state = initState, action) => {
    switch(action.type) {

        case 'SELECTED_RECIPE':  
            return {
                ...state,
                selectedRecipe: action.name
            }

        case 'DELETE_RECIPE':
            let deletedRecipe = state.listRecipes
                .filter(recipe => recipe.name !== action.name);
            
            return {
                ...state,
                listRecipes: deletedRecipe
            }

        case 'ADD_RECIPE':
            let newListRecipes = [...state.listRecipes, action.addRecipe]
            return {
                ...state,
                listRecipes: newListRecipes,
                isFormOpen: false
            }

        case 'SET_FORM_OPEN':
            return {
                ...state,
                isFormOpen: true,
            }

        case 'SET_FORM_CLOSE':
            return {
                ...state,
                isFormOpen: false,
            }
        
        case 'START_EDITING_RECIPE':
            return {
                ...state,
                editRecipe: action.name,
                isFormOpen: true   
            }

        case 'FINISH_EDITING_RECIPE':
            let editedRecipeIndex = state.listRecipes.findIndex(el => el.name === state.editRecipe);
            let editedListRecipies = [...state.listRecipes];
            console.log('abc')
            editedListRecipies[editedRecipeIndex] = action.editedRecipe;
            return {
                ...state,  
                editRecipe: undefined,
                listRecipes: editedListRecipies,
                isFormOpen: false,
            }

        default:
            return state
    }
}

export default ReducerRecipe;