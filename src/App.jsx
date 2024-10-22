import "./App.css";
import { useState } from "react";
import clown from './assets/clown.gif'

function App() {
  const [visible, setVisible] = useState(false)

  const changeVisible = () => {
    setTimeout(() => {
      setVisible(true)
    }, 2000)
  } 

  return (
    <>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">
        <button onClick={changeVisible} className="btn">Потестить бота ♥</button>
      </a>
      {visible ? <>
        <div className="text">800$ и будет ссылка на бота:)</div> 
        <img src={clown} alt="для работодателей" />
      </>: ''}
    </>
  );
}

export default App;
