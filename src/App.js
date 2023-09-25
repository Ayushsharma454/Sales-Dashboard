// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Component1 from './components/Status-card/Status';
import Component4 from './components/userDetails/UserDetails';
import LineChart from './components/SalesGraph/LineChart';
import BarGraph from './components/BarGraph/BarGraph';
import UserDetails from './components/userDetails/UserDetails';

function App() {
  return (
    <div className="App">

        <Sidebar />
        <div className="container">
          <Header />
          <div className="main-content">
            <div className='row-one'>
              <Component1  />
              <LineChart  />
            </div>
            <div className='row-two'>
              <BarGraph />
              <UserDetails />
            </div>

          </div>
        </div>
      
    </div>

  );
}

export default App;
