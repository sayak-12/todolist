import "./App.css";

function App() {
  const hailmyName = (e)=>{
    console.log("hi I'm Sayak Raha", e.target);
  }
  const hailmyName2 = (name,e)=>{
    console.log("hi I'm "+ name, e.target);
  }
  return (
    <div className="App">
      <div className="center w-100">
        <div className="h1">Welcome to React</div>
        <div className="d-flex">
        <div className="btn btn-primary mx-5" onClick={hailmyName}>Read More</div>
        <div className="btn btn-primary mx-5" onClick={(e)=> hailmyName2('mario',e)}>Say my name</div></div>
        
      </div>
    </div>
  );
}

export default App;
