    // src/redux/store.js

    import { createStore, combineReducers } from 'redux';
    import agreementReducer from './reducers/agreementReducer';

    const rootReducer = combineReducers({
        agreement: agreementReducer,
    });

    const store = createStore(rootReducer);

    export default store;
    
