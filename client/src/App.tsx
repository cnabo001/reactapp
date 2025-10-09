import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoreItem from './compoments/storeItem'

function App() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/StoreItems/Items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       {items.map((item: any) => (<StoreItem key={item.id} item={item} /> ))}
      </div>
    </>
  )
}

export default App
