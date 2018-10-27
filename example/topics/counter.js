import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }))
  }

  render() {
    return (
      <div>
        <h3>Counter Value: {this.state.count}</h3>
        <button onClick={this.increaseCount}>Click Me!</button>
      </div>
    )
  }
}
