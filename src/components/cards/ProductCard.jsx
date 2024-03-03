import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link,  useNavigate  } from 'react-router-dom';
import { DeleteProduct, StatusProduct } from '../../services/product.service';

const ProductCard = ({ data }) => {
    const { _id, productName, productPrice, productType, productShortDescription, status } = data;

    const navigate = useNavigate()

    const handleDeleteProduct = async () => {
        try {
            const res = await DeleteProduct(_id); 
            if (res) {
                navigate('/'); 
                window.location.reload();
            }
        } catch (error) {
            console.log("Failed to delete!")
        }       
    };

    const handleStatusProduct = async () => {
        try {
            const res = await StatusProduct(_id,status); 
            if (res) {
                navigate('/'); 
                window.location.reload();
            }
        } catch (error) {
            console.log("Failed to change status!")
        }       
    };

    return ( 
        <Card className='bg-light' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>Product Type: <strong>{productType}</strong></Card.Text>
                <Card.Text>Product Status: <strong>{status}</strong></Card.Text>
                <Card.Text>Description: {productShortDescription}</Card.Text>
                <Card.Text>Price: <strong>{productPrice}</strong></Card.Text>
                <div className='d-flex justify-content-between'>
                    <Link to={`/product/view/${_id}`}>
                        <Button variant="primary">View</Button>
                    </Link>
                    <Link to={`/product/${_id}/update`}>
                        <Button variant="primary">Edit</Button>
                    </Link>
                    <Button variant="primary" onClick={handleStatusProduct}>Status</Button>
                    <Button className='btn-danger' variant="primary" onClick={handleDeleteProduct}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
