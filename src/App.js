import './App.css';
import Home from './Components/Home';


function App() {
  const LastName = 18
  let age = 27
  var tab = ["Ahmed","Taher","Khaldoun"]
  const bestUser = {rank : 23,location : 'Lac'}
  const handleAlert=()=>{
    alert('Hello Props')
  }

  const handleName =(a)=>{
    alert(`Hello ${a}`)
  }
  const show = true
  return (
    <div>
      <Home LastName={LastName} age={age} tab={tab} bestUser = {bestUser} handleAlert={handleAlert} handleName={handleName} show={show}>
        <h2>Khaldoun</h2>
        <h4>F3</h4>
      </Home>

     
    </div>
  );
}

export default App;
