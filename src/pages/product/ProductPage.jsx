import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GetProduct } from '../../services/product.service';

const ProductPage = () => {
  const [data, setData] = useState()
const {id} = useParams()

const fetchProductDetails = async() => {
  const res = await GetProduct(id)
  if(res) {
    setData(res)
  }
}


useEffect(() => {
  fetchProductDetails()
},[id])

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>{data?.productName}</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Product Details</Card.Title>
              <Card.Text>
                <p><strong>Price:</strong> ${data?.productPrice}</p>
                <p><strong>Type:</strong> {data?.productType}</p>
                <p><strong>Description:</strong> {data?.productShortDescription}</p>
                <p><strong>Status:</strong> {data?.status}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
