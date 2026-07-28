import '../styles/Selector.css'
import popSound from '../assets/sound/popSound.mp3'
import { ArrowBack, ArrowNext } from '../assets'
import { categories } from '../wardrobe'

type Selection = Record<string, number>

type SelectorProps = {
  selected: Selection
  setSelected: React.Dispatch<React.SetStateAction<Selection>>
}

// play a pop sound when the player clicks a next/back button
const playSound = () => {
  const audio = new Audio(popSound)
  audio.play()
}

function Selector({ selected, setSelected }: SelectorProps) {
  // move the selection for one category forward (dir = 1) or back (dir = -1), wrapping around
  const step = (key: string, dir: number, length: number) => {
    playSound()
    setSelected(prev => ({ ...prev, [key]: (prev[key] + dir + length) % length }))
  }

  return (
    <div className="selectors">
      {categories.map(({ key, items }) => (
        <div className="selector-row" key={key}>
          {/* back button */}
          <img className="arrow" src={ArrowBack} alt="previous" onClick={() => step(key, -1, items.length)} />

          {/* currently selected item for this category */}
          <img className={`thumb ${key}`} src={items[selected[key]]} alt={key} />

          {/* next button */}
          <img className="arrow" src={ArrowNext} alt="next" onClick={() => step(key, 1, items.length)} />
        </div>
      ))}
    </div>
  )
}

export default Selector
