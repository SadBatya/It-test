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
        <div className="text">УПС...Error! Что-то пошло не так :c</div> 
        <img src={clown} alt="для работодателей" />
      </>: ''}
    </>
  );
}

export default App;
