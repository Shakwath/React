import './App.css'
import Count from './count';
import Users from './users';
import Team from './Team';
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
  <h1>React Core Concept</h1>
  <Users></Users>
  <Team></Team>
  <Count></Count>
  <button onClick={handleClicked}>Click Me1</button>
  <button onClick= {handleClicked2}>Click Me</button>
  <button onClick={() => {alert("third clicked")}}>Click Me3</button>
  
  </>
)
}
export default App
