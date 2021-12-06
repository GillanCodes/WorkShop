import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ChatApp from '../front/app/ChatApp'
import Buttons from '../front/components/Buttons'
import Home from '../Home'


export default function index() {

    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/front/components/buttons" exact >
                        <Buttons />
                    </Route>
                    <Route path="/front/app/chatapp" exact>
                        <ChatApp />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}
