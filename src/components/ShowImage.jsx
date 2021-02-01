import React, { Component } from 'react'
// import { getApi } from '../services/api'

export default class ShowImage extends Component {
  constructor() {
    super()

    this.fetchApi = this.fetchApi.bind(this)
    
    this.state = {
      dogImg: undefined,
      loading: true,
      storedDogs: [],
    }
  }
  
  async fetchApi() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const dataDog = await response.json()
    const imgRequest = await dataDog.message
    //console.log(dataDog)
    this.setState({
      dogImg: imgRequest
    })
  }
  
  componentDidMount() {
    this.fetchApi()
  }

  render() {
    console.log(this.state.dogImg)
    const { dogImg } =this.state;
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
