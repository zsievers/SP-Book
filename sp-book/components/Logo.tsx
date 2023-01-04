import Image from 'next/image'
import img from '../public/logo.png'
function Logo(props: any) {
    const {renderDefault, title} = props

  return (
    <div className='flex items-center space-x-2'>
        <Image 
        src={img}
        alt="logo" 
        className="rounded-full object-cover" 
        width={50}
        height={50} />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo