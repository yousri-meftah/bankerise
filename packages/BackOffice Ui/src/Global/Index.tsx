import Breadcrumb from '@components/Breadcrumb'
import Background from '../Components/Background'
import PrivateRoutes from '../Components/PrivateRoutes'
import Topbar from './Topbar'

const Index = () => {
  return (
    <div className='flex flex-col w-full bg-[--secondary] overflow-x-hidden transition duration-150 ease-out' >
      <Topbar />
      <div className='relative isolate'>
      <Breadcrumb/>

        <PrivateRoutes />
        <Background />
      </div>
    </div>

  )
}

export default Index