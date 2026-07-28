import { useState } from 'react'
import Preview from './components/Preview'
import Selector from './components/Selector'
import OutfitSaver from './components/OutfitSaver'
import { initialSelection } from './wardrobe'
import './styles/Global.css'

function App() {
  const [selected, setSelected] = useState(initialSelection)

  return (
    <div className="page">
      <h1>KATE'S CLOSET</h1>

      <div className="app-container">
        <Selector selected={selected} setSelected={setSelected} />

        <div className="preview-column">
          <Preview selected={selected} />
          <OutfitSaver />
        </div>
      </div>
    </div>
  )
}

export default App
