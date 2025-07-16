import React, { Component } from 'react'

export class Catergories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key:"all",
                    name:"Всё"
                },
                {
                    key:"chairs",
                    name:"Стулья"
                },
                {
                    key:"table",
                    name:"Столы"
                },
                {
                    key:"sofa",
                    name:"Диваны"
                }
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key={el.key} onClick={()=> this.props.choseCategory(el.key)}>{el.name}</div> 
        ))}
      </div>
    )
  }
}

export default Catergories