import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Root from "../components/Root"

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />
      </Switch>
    </BrowserRouter>
  )
}

export default Index
