import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Root from "../components/Root"
import MovieInfo from '../components/MovieInfo'

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/movie/:id" component={MovieInfo} />
      </Switch>
    </BrowserRouter>
  )
}

export default Index
