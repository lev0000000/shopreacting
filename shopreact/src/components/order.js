import React, { Component } from 'react'
import { AiOutlineDelete } from "react-icons/ai";


export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/"+this.props.item.image}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <AiOutlineDelete className='rm-to-cart' onClick={()=>this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order