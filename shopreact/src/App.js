import React from 'react'
import Header  from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items:[
        {
          id:1,
          title:"chair.jpg",
          desc:"Удобный стул для удобных людей",
          category:"chairs",
          price:'49.99'
        },
        {
          id:2,
          title:"table.jpg",
          desc:"Удобный стул для удобных людей",
          category:"table",
          price:'149.99'
        },
        {
          id:3,
          title:"chair.jpg",
          desc:"Удобный стул для удобных людей",
          category:"chairs",
          price:'49.99'
        },
        {
          id:4,
          title:"chair.jpg",
          desc:"Удобный стул для удобных людей",
          category:"chairs",
          price:'49.99'
        },
      ]
    }
  }
  render() {
      return(
      <div className='wrapper'>
      <Header/>
      <Footer/>
    </div>
    );
  }
}

export default App;
