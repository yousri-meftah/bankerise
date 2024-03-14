import Background from '../Components/Background'
import PrivateRoutes from '../Components/PrivateRoutes'
import Topbar from './Topbar'

const Index = () => {
  return (
    <div className='flex flex-col w-full bg-[#171821] overflow-x-hidden'>
      <Topbar />
      <div className='relative isolate'>

        {/* MODULES ROUTES */}
        <PrivateRoutes />

        {/* BACKGROUND FOR ALL MODULES */}
        <Background />

      </div>
    </div>

  )
}

export default Index