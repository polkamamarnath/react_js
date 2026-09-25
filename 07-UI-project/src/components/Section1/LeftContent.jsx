import Arrow from "./Arrow"
import Herotext from "./Herotext"

const LeftContent = () => {
  return (
    <div className=' h-full w-1/4 flex flex-col justify-between'>
      <Herotext/>
      <Arrow/>
    </div>
  )
}

export default LeftContent