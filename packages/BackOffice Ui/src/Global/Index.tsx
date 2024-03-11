
import Background from '../Components/Background'
import Routes from '../Components/Routes'
import Topbar from './Topbar'

const Index = () => {
  return (
    <div className='flex flex-col w-full bg-[#171821] overflow-x-hidden'>
      <Topbar />
      <div className='relative'>

        {/* MODULES ROUTES */}
        <Routes />

        
        {/* BACKGROUND FOR ALL MODULES */}
        <Background />
      </div>
    </div>

  )
}

export default Index