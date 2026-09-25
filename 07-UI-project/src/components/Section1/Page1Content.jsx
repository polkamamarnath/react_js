import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props.users.tag);
  
  return (
    <div className='pb-10 pt-6 px-18 flex items-center gap-10 h-[90vh]'>
    <LeftContent />
    <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content