
import './App.css'
import InputSlider from './components/slider'
import WorldMap from './components/worldMap'

function App() {

  return (
    <div className='continuer m-2 d-flex flex-column align-items-start position-relative' >
      <WorldMap />
      <InputSlider className="position-absolute bottom-0 " />
    </div>
  )
}

export default App
