import './App.css'
import StoreItemContainer from './compoments/storeItemsContainer'
import { Outlet, useLocation } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/' ? <StoreItemContainer /> :(
      <Container>
        <Outlet />
      </Container>
    )}
    </>
  )
}

export default App
