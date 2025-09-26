import './App.css'
import Events from './components/EventBoard'
import './main'

const App =() =>{

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎉 Arizona Community Events Board 🎉</h1>
        <p> Discover amazing events happening in what is left on 2025 in Phoenix and the surroundings</p>
      </header>
      <Events />

    </div>
  )
}

export default App
