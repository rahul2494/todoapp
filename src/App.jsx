import Header from "./components/Header"
import InlineComponent from "./components/InlineComponent"
import OutlineComponent from "./components/OutlineComponent"
import Todo from "./components/Todo"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      {/* <InlineComponent />
      <OutlineComponent /> */}
    </div>
  )
}

export default App
