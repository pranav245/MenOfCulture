import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('select')

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if (keyword.trim()) {
  //     history.push(`/search/${keyword}`)
  //   } else {
  //     history.push('/')
  //   }
  // }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(category)
    if (keyword.trim()) {
      if (category !== 'select') {
        history.push(`/search/${keyword.trim()}/category/${category}`)
      } else {
        history.push(`/search/${keyword.trim()}`)
      }
    } else {
      if (category !== 'select') {
        history.push(`/category/${category}`)
      } else {
        history.push('/')
      }
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Form.Control
        as='select'
        // size='sm'
        className='mr-sm-2 ml-sm-5'
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value='select'>Select Category</option>
        <option value='Jacket'>Jacket</option>
        <option value='Suit'>Suit</option>
        <option value='Vest'>Vest</option>
        <option value='Blazer'>Blazer</option>
      </Form.Control>
      <Button type='submit' variant='outline-success' style={{color:"white"}} className='p-2'>
        <b>Search</b>
      </Button>
    </Form>
  )
}

export default SearchBox
