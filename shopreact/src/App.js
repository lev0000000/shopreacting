import React from 'react'
import Header  from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      items:[
        {
          id:1,
          title: "Стулья",
          image:"chair.jpg",
          desc:"Удобный стул для удобных людей",
          category:"chairs",
          price:'49.99'
        },
        {
          id:2,
          title:"Столы",
          image: "table.jpg",
          desc:"Практичный стол для пактичных людей",
          category:"table",
          price:'149.99'
        },
        {
          id:3,
          title:"Диваны",
          image:"sofa.jpg",
          desc:"Мягкий диван для мягких людей",
          category:"sofa",
          price:'329.99'
        },
        {
          id:4,
          title:"Комоды",
          image:"commode.jpg",
          desc:"Компактный комод для компактных людей",
          category:"commode",
          price:'59.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
      return(
      <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer/>
    </div>
    );
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=>el.id !==id)})
  }
  
  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el=>{
      if (el.id===item.id)
        isInArray=true;

    })

    if(!isInArray)
    this.setState({orders: [...this.state.orders,item]})
  }
}

export default App;
