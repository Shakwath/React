import './App.css'
import Counter from './count';
import Users from './users';

function App() {
  function handleClicked(){
    alert("button clicked");
  }
  //2nd rules by arrow function
  const handleClicked2 =()=>{
    alert("button clicked");
  }
  return (
    <>
      <h2>React Core Concepts</h2> 
      <Users></Users>
      <Counter></Counter>
      
      {/* Normal html e  
      <button onclick="handlelicked()">Click Me</button>*/}
      <button onClick={handleClicked}>Click Me1</button>

      <button onClick={handleClicked2}>Click Me2</button>

      <button onClick={() => {alert("third clicked")}}>Click Me3</button>
    </>
  )
}
export default App
