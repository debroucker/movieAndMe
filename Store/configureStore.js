import  {createStore} from 'redux'
import toggleFav from './Reducers/FavoriteReducer'

export default createStore(toggleFav) //creation d'un store