import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const category = match.params.category || ''

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, category))
  }, [dispatch, keyword, pageNumber, category])

  return (
    <>
      <Meta />
      {!keyword ? (
        !category ? (
          <h2 />
          
        ) : (
          <>
            <Link to='/' className='btn btn-light'>
              Go Back
            </Link>
            <br />
            <h2 style={{ display: 'inline' }} className='text-center'>
              Products for{' '}
            </h2>
            <h3
              style={{ display: 'inline', color: 'blue' }}
              className='text-center'
            >
              {category}
            </h3>
          </>
        )
      ) : !category ? (
        <>
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
          <br />
          <h2 style={{ display: 'inline' }} className='text-center'>
            product for{' '}
          </h2>
          <h3
            style={{ display: 'inline', color: 'red' }}
            className='text-center'
          >
            {keyword}
          </h3>
        </>
      ) : (
        <>
          <Link to='/' className='btn btn-light'>
            Go Back
          </Link>
          <br />
          <h2 style={{ display: 'inline' }} className='text-center'>
            Products for{' '}
          </h2>
          <h3
            style={{ display: 'inline', color: 'red' }}
            className='text-center'
          >
            {keyword}{' '}
          </h3>
          <h3 style={{ display: 'inline' }} className='text-center'>
            in{' '}
          </h3>
          <h3
            style={{ display: 'inline', color: 'blue' }}
            className='text-center'
          >
            {category}
          </h3>
        </>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : products.length > 0 ? (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center mt-5">
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
          </div>
        </>
      ) : (
        <>
          <h3 className='text-center'>No Products Found!</h3>
          <h4 className='text-center'>Sorry :(</h4>
        </>
      )}
    </>
  )
}

export default HomeScreen
