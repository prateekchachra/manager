import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './router';


class App extends Component{

    componentWillMount(){

        const firebaseConfig = {
            apiKey: "AIzaSyD6hhwxG-N5ebiwQ5iKk-pigJaI8UdBu4w",
            authDomain: "manager-cfaea.firebaseapp.com",
            databaseURL: "https://manager-cfaea.firebaseio.com",
            projectId: "manager-cfaea",
            storageBucket: "manager-cfaea.appspot.com",
            messagingSenderId: "215361731269",
            appId: "1:215361731269:web:88d9c6ac483c21a7"
          };
          firebase.initializeApp(firebaseConfig);
        



    }

render(){  
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
        <Provider store={store}>
            <Router />
        </Provider>
    )
}


}


export default App;