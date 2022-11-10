import { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import ReactModal from 'react-modal';
import './App.css';

const App = () => {

  const [data, setArray] = useState([]);
  const [newdata, setNewArray] = useState([]);
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const apiData = await response.json()
    setArray(apiData);
    setNewArray(apiData)
  }
  function addData(value) {

    setArray([...data, value])

    console.log(data);
  }
  function menClothing() {
    // allProducts2();
    let newArr = newdata.filter(
      (item) => item.category === "men's clothing"
    );
    setArray(newArr);
    console.log(newArr)
  }

  function jewelery() {
    let newArr = newdata.filter(
      (item) => item.category === "jewelery"
    );
    setArray(newArr);
  }

  function electronics() {
    let newArr = newdata.filter(
      (item) => item.category === "electronics"
    );
    setArray(newArr);
    console.log(newArr);
  }

  function womenClothing() {
    let newArr = newdata.filter(
      (item) => item.category === "women's clothing"
    );
    setArray(newArr);
    console.log(newArr);
  }

  function viewAll() {
    setArray(newdata);
  }

  // <ReactModal
  // array={data}
  // />
  return (
    <>
      <h3>E-commerce store</h3>
      <div><button onClick={viewAll}>All products</button><button onClick={electronics}>Electronics</button><button onClick={womenClothing}>Women's Clothing</button><button onClick={menClothing}>Men's Clothing</button><button onClick={jewelery}>Jewelery</button></div>
      <AddProduct addData={addData} />
      <div className='container'>
        {data.map((values) => (
          (
            <>
              <div className='products'>
                <div className='product'>
                  <img src={values.image} />
                  <h5> Category: {values.category}</h5>
                  <h5> Description: {values.title}</h5>
                  <h6> Price:  Usd {values.price}</h6>
                </div>
              </div>
            </>
          )
        ))}
      </div>
    </>
  );
}

export default App;
