import {createStore} from 'redux'
import {persistCombineReducers} from 'redux-persist'
import {AsyncStorage}  from 'react-native'

import setElementsList from './reducers/listReducer'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

export default createStore(
  persistCombineReducers(rootPersistConfig, {
    setElementsList
  })
)