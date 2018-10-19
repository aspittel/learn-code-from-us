import React, { Component } from "react"
import data from '../data.json'
import Card from "../Card"
import "./Profiles.scss"

class Profiles extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  shuffle(data) {
    let a = [...data]
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }
    return a
  }

  componentDidMount() {
    let shuffledData = this.shuffle(data)
    this.setState({
      people: shuffledData
    })
  }

  render() {
    return ( 
      <div className="container">
        {this.state.people.map(person => <Card key={person.id} person={person} data-tip={person.Name}/>)}
      </div>
    )
  }
}

export default Profiles
