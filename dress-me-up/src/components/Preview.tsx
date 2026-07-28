import '../styles/Preview.css'
import { Base, Necklace } from '../assets'
import { categories } from '../wardrobe'

type SelectorProps = {
  selected: Record<string, number>
}

function Preview({ selected }: SelectorProps) {
  return (
    <div className="preview-stage">
      {/* the base body sits in normal flow and gives the stage its size */}
      <img className="preview base" src={Base} alt="body" />

      {/* clothing layers stack on top; stacking order is set by z-index in Preview.css */}
      {categories.map(({ key, items }) => (
        <img key={key} className={`preview ${key}`} src={items[selected[key]]} alt="" />
      ))}

      <img className="preview necklace" src={Necklace} alt="" />
    </div>
  )
}

export default Preview
