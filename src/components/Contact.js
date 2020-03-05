import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Contact extends Component {

  state ={
    fullName: '',
    email: '',
    phoneNumber: '',
    comments: '',
  }

  sendResponse = (formInfo) => {
    window.emailjs.send(
      'gmail', 'portfolio_contact_form',
      formInfo
      ).then(res => {
        console.log('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendResponse(this.state)
    this.setState({    
      fullName: '',
      email: '',
      phoneNumber: '',
      comments: '',})
  }

  render () {
    const { fullName, email, phoneNumber, comments } = this.state
    return (
      <div className='home'>
        <form onSubmit={this.handleSubmit}>
          <input
            name='fullName'
            value={fullName}
            onChange={this.handleChange}
            placeholder='Name'
            required  
          />
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}  
            placeholder='Email'
            required
          />
          <input
            type='number'
            name='phoneNumber'
            value={phoneNumber}
            onChange={this.handleChange} 
            placeholder='Phone Number' 
          />
          <textarea
            name='comments'
            value={comments}
            onChange={this.handleChange}  
            placeholder='Comments'
            required
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Contact