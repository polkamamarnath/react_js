import RightCard from './RightCard'


const RightContent = (props) => {
  
  console.log(props.users);
  
  return (
    <div id='right' className='h-full flex rounded-4xl flex-nowrap overflow-x-auto gap-10 w-3/4 p-7'>
        {props.users.map(function(elem,idx) {

          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
