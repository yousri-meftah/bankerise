import Sidebar from './Sidebar.tsx';
import Index from './Index.tsx';
const Layout = () => {
  return (
    <div className='flex'>
      <div className='relative'>
        <Sidebar />
      </div>
    
      <Index />
    </div>


  )
}

export default Layout