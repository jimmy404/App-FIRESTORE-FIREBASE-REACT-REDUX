import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer} from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

//Configurar firestore,
const firebaseConfig = {
    apiKey: "AIzaSyDyat5iwUDeyRCWzYa2FMP4ubEfQbkRrpk",
    authDomain: "practicafirebase-bf8b5.firebaseapp.com",
    databaseURL: "https://practicafirebase-bf8b5.firebaseio.com",
    projectId: "practicafirebase-bf8b5",
    storageBucket: "practicafirebase-bf8b5.appspot.com",
    messagingSenderId: "876595370264",
    appId: "1:876595370264:web:08df2d87ce48a5e215e66d",
    measurementId: "G-V8K83W445Z"
}

//inicializar firebase
firebase.initializeApp(firebaseConfig);

//configuraciond e react-redux
const rrfConfig = {
    userProfile : 'users',
    useFirestoreForProfile: true
}

//crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose (
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

//reducers
const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore: firestoreReducer
})

// state inicial
const initialState = {};

// Create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;