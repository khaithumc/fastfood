import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/header/NavigationBar';
import Slide from "./components/header/Slide";
import HomePage from "./components/page/HomePage";
import DetailItem from "./components/body/DetailItem";
import {useEffect, useState} from "react";
import axios from "axios";
import CartPageEmpty from "./components/page/CartPageEmpty";
import Register from "./components/page/Register";

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/items", {

        })
            .then(res => {
                const items = res.data;
                setItems(items)
            })
    },[])


    return (
        <div className={"background-web"}>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/cart-page-empty'} component={CartPageEmpty}/>
                    <Route path={'/detail-item-' + items.id} component={DetailItem}/>
                    <Route path={'/register'} component={Register}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
