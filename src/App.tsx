import { useState } from 'react';
import { Header } from './components/Header';
import { SearchTab } from './components/SearchTab';
import { TodoContainer } from './components/TodoContainer';
import './global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchTab />
      <TodoContainer />
    </>
  );
}

export default App;
