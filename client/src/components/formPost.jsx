import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/container'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

import Axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";


   
function Application() {
  const [productName,setProductName]=useState("");
  const [productCost,setProductCost]=useState(0);
  const [productList,setProductList]=useState([]);
   
  const getProduct = () =>{
    Axios.get("http://localhost:3001/read").then((response)=>{
      setProductList(response.data); 
    })
  }

  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then((response)=>{

       setProductList(response.data); 
    }, []);

  });

  const addToProduct =()=>{
     Axios.post("http://localhost:3001/insert",{
       productName:productName,
       productCost:productCost,


     });
  };

  return (<>

      <InputGroup className="mb-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Product name"
        className="mb-3"
      >
        <Form.Control aria-label="Example text with two button addons" 
          type="text"
          onChange={(event)=>{
            setProductName(event.target.value);
          }}
        />
        </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
      <FloatingLabel
        controlId="floatingInput"
        label="product cost"
        className="mb-3"
      >
        <Form.Control aria-label="Example text with two button addons" 
            type="number"
          onChange={(event)=>{
            setProductCost(event.target.value);
          }}
        />
        </FloatingLabel>
      </InputGroup>
      <Button variant="outline-secondary" onClick={addToProduct}>Add product</Button>
      <Button varient="outline-secondary" onClick={getProduct}>get-product </Button>
      
      
    <hr/>

 
      <Container>
      <Table bg="danger">
          <thead>
            <tr>
              <th>product name</th>
              <th>product cost</th>
            </tr>
          </thead>
          {productList.map((val,key)=>{
              return<>
                <tbody>
                  <tr key={key}>
                    <td>{val.productName}</td>
                    <td>{val.productCost}</td>
                  </tr>
                </tbody>
              </>     
          })}
      </Table>
     </Container>
   
    
    </>
  );
}

export default Application;
  