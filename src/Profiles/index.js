import React, { Component } from "react"
import axios from "axios"
import Card from "../Card"
import "./Profiles.scss"

console.log(process.env)
const AIRTABLE_URL =
  `https://api.airtable.com/v0/app4SjGGyZGblTcUs/Data?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}&view=published`

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
    axios.get(AIRTABLE_URL).then(data => {
      data = this.shuffle(data.data.records)
      this.setState({
        people: data
      })
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
