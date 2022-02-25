import './App.css';

function App() {

  fetch('https://api.thecatapi.com/v1/breeds/?api_key=947d96d1-3740-40da-8ba7-bada1141ae1b', {
    
  })
    .then(res => res.json())
    .then(json => console.log(json))


  return (
    <div className="App">

    </div>
  );
}

export default App;
