import { useState } from 'react';
import { Header } from './components/Header';
import { SearchTab } from './components/SearchTab';
import './global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchTab />
    </>
  );
}

export default App;
