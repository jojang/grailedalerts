import "./App.css"
import Link from './components/Link'


function App() {

  return (
    <div className='App'>
      <div>
          <div className="title">
            <h1>Grailed</h1>
          </div>
          <div className="subtitle">
            <h1>Alerts</h1>
          </div>
          <div className="description">
            <h1>a notification web app for your grails...</h1>
          </div>
      </div>
      <Link />
    </div>
  );
}


export default App;
