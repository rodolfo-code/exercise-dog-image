import React, { Component } from 'react'

export default class ShowImage extends Component {
  constructor() {
    super()
  
    this.state = {
       dogImg: undefined,
    }
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const dogObj = await response.json()
    this.setState({
      dogImg: dogObj.message
    })
  }
  
  componentDidMount() {
    this.fetchDog()
  }

  render() {
    console.log(this.state.dogImg)
    const { dogImg } = this.state
    return (
      <div>
        {
          dogImg ? <img src={dogImg} alt=""/>
          : 'Loding...'
        }
      </div>
    )
  }
}
