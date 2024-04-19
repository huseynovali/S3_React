import LayoutHeader from '../components/LayoutHeader'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
        <LayoutHeader/>
        <Outlet/>
    </div>
  )
}

export default MainLayout