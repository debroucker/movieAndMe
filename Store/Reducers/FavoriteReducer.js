const initialState = {favoritesFilm : []}

function toggleFavorite(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE' :
            const  favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) { //si le film est deja dans la liste des films favoris
                //suppression
                nextState = {
                    ...state, //copie du state (on ne modifie jamais le state directement)
                    favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
                }
            }
            else { //sinon
                //ajout
                nextState = {
                    ...state, 
                    favoritesFilm : state.favoritesFilm.concat(action.value)
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite