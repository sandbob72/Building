import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Buildingsix from './Buildingsix';
import BuildingOne from './BuildingOne';
import BuildingTwo from './BuildingTwo';
import BuildingThree from './BuildingThree';
import BuildingFive from './BuildingFive';
import BuildingSeven from './BuildingSeven';
import BuildingEight from './BuildingEight';
import BuildingNine from './BuildingNine';
import MixBuilding from './MixBuilding';
import {Router,Route,Link,browserHistory} from 'react-router'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
   <Router history={browserHistory}>
   <Route path="/" component={App}/>
   <Route path="/buildingsix" component={Buildingsix}/>
   <Route path="/buildingOne" component={BuildingOne}/>
   <Route path="/buildingTwo" component={BuildingTwo}/>
   <Route path="/buildingThree" component={BuildingThree}/>
   <Route path="/buildingFive" component={BuildingFive}/>
   <Route path="/buildingSeven" component={BuildingSeven}/>
   <Route path="/buildingEight" component={BuildingEight}/>
   <Route path="/buildingNine" component={BuildingNine}/>
   <Route path="/mixBuilding" component={MixBuilding}/>

   </Router>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
