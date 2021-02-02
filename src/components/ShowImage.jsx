import React, { Component } from 'react'
// import Button from './Button'

export default class ShowImage extends Component {
  constructor() {
    super()
    
    this.newDogButton = this.newDogButton.bind(this)
    this.newDogImg = this.newDogImg.bind(this)
  
    this.state = {
      dogImg: undefined,
      loading: true,
    }
  }

  async fetchDog() {
    this.setState(
      {loading: true},
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const dogObj = await response.json()
        this.setState({
          loading: false,
          dogImg: dogObj.message
    })
      }
    )
  }

  newDogImg() {
    this.fetchDog();
  }

  newDogButton() {
    const { dogImg } = this.state
    return (
    <div>
        <img src={dogImg} alt=""/>
      <div>
        <button type='button' onClick={ this.newDogImg }>New Dog</button>
      </div>
    </div>
    )
  }

    
  componentDidMount() {
    this.fetchDog()
  }

  render() {
    console.log(this.state.dogImg)
    const { loading } = this.state
    return (
      <div>
        {
          loading ? 
          'Loding...'
          : <div>{ this.newDogButton() }</div>
        }
        <div>
          
        </div>
      </div>
    )
  }
}
