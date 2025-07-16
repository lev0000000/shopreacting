import React from 'react'
import Header  from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Catergories from './components/Catergories'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      currentItems: [],
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
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.choseCategory = this.choseCategory.bind(this)
  }
  render() {
      return(
      <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Catergories choseCategory={this.choseCategory}/>
      <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
      <Footer/>
    </div>
    );
  }

  choseCategory(category){
    if(category === "all")
      this.setState({currentItems: this.state.items}) 
      else
    
    this.setState({currentItems: this.state.items.filter(el=>el.category === category)})
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
