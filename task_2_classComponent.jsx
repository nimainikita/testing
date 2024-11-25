import React, { Component } from "react"

class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.initialName || "Anonymous",
      clicks: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // Лог начальных значений при монтировании
  componentDidMount() {
    console.log(`Setting up observers`)
    console.log(`Count has changed to: ${this.props.count}`)
    console.log(`Clicks have been updated: ${this.state.clicks}`)
  }

  // Очистка ресурсов
  componentWillUnmount() {
    console.log("Clear observers")
  }

  // Следим за изменением пропса count
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      console.log(`Count has changed to: ${this.props.count}`)
    }
    if (prevState.clicks !== this.state.clicks) {
      console.log(`Clicks have been updated: ${this.state.clicks}`)
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }))
  }

  render() {
    const { count } = this.props
    const { name, clicks } = this.state

    return (
      <div>
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <div>Clicks: {clicks}</div>
        <button onClick={this.handleClick}>Increment Clicks</button>
      </div>
    )
  }
}

export default ClassCounter
