import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.</p>
            <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-6 py-4  rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 text-white font-bold px-3 py-4  rounded-full'><MoveRight size={26} /></button>   
            </div>
        </div>
  )
}

export default RightCardContent
