import ReactModal from "react-modal";
import React, { useRef } from "react";
import App from "./App";

  
class AddProduct extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: false,
        category:'',
        description:'',
        price:''
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserInput(event){
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]: value});
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({showInfo: true});
      let desc = this.state.description;
      let category = this.state.category;
      let price =   this.state.price
      this.props.addData(
        {
          category:category,
          description:desc,
          price:price
        }
      )

      this.handleCloseModal()
     }
     
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Add Product</button>
          <ReactModal 
             isOpen={this.state.showModal}
          >
            <form>
              <input type='text'  placeholder="category"  name="category"
              onChange={(event)=>this.handleUserInput(event)}
              value={this.state.category}></input>
              <input type='text' placeholder="description" name="description" value={this.state.description}
             onChange={(event)=>this.handleUserInput(event)}
              ></input>
              <input type='number'  placeholder="price" name="price" value={this.state.price}
              onChange={(event)=>this.handleUserInput(event)}
              ></input>
              <input type="submit" value="submit" onClick={(event)=>this.handleSubmit(event)}></input>
            </form>
      <button onClick={this.handleCloseModal}>Close</button>
    </ReactModal>
        </div>
      );
    }
}

export default AddProduct;
  