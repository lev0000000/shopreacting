import React from 'react'
import Header  from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
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
  }
  render() {
      return(
      <div className='wrapper'>
      <Header/>
      <Items items={this.state.items}/>
      <Footer/>
    </div>
    );
  }
}

export default App;
