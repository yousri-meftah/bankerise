import Sidebar from './Sidebar.tsx';
import Index from './Index.tsx';
//import Routers from "../Components/PrivateRoutes.tsx";
const Layout = () => {
  return (
    <div className='flex'>
      <div className='relative z-50'>
        <Sidebar />
      </div>

      <Index />
    </div>


  )
}

export default Layout