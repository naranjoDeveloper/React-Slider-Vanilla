import './App.css'
import Carousel from './components/Carousel'
import { data } from './components/Data'


function App() {

  return (
    <>
      <div className="App">
        <div className="topContent">
        </div>
        {/*Carousel */}
        <Carousel images={data} />
      </div>


    </>
  )
}

export default App
