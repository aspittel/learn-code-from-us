import React, { Component, Fragment } from 'react'
import data from '../data.json'
import Card from '../Card'
import './Profiles.scss'

class Profiles extends Component {
  constructor () {
    super()
    this.state = {
      people: [],
      tags: [],
      selectedTag: '',
    }
  }

  shuffle (data) {
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

  getTags(people) {
    const tags = people.map(person => person.fields.Tags)
    const mergedTags = tags.reduce((a, b) => [...a, ...b], [])
    const uniqueArrayOfTags = Array.from(new Set([...mergedTags])).sort((a, b) => a < b ? -1 : 1)
    this.setState({
      tags: uniqueArrayOfTags,
    })
  }

  handleChange = (e) => {
    this.setState({ selectedTag: e.target.value })
  }

  componentDidMount() {
    let shuffledData = this.shuffle(data)
    this.setState({
      people: shuffledData
    }, () => this.getTags(this.state.people))
  }

  render() {
    const { people, tags, selectedTag } = this.state
    const filteredPeople = people.filter(person => person.fields.Tags.includes(selectedTag));
    const peopleToMap = selectedTag ? filteredPeople : people
    return (
      <Fragment>
        <div className="results-filter">
          <p>Filter by technology</p>
          <div className="results-dropdown">
            <select onChange={this.handleChange} value={selectedTag}>
              <option value="">Choose a filter</option>
              {tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
            </select>
          </div>
        </div>
        <div className="results-container">
          {peopleToMap.map(person => <Card key={person.id} person={person} data-tip={person.Name} />)}
        </div>
      </Fragment>
    )
  }
}

export default Profiles
