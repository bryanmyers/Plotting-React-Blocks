import './App.css';

import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Subcontent from './components/Subcontent'
import Advertisement from './components/Advertisement'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <Subcontent text="Subcontent 1"/>
        <Subcontent text="Subcontent 2"/>
        <Subcontent text="Subcontent 3"/>
        <Advertisement />
      </Main>
    </>
  );
}

export default App;
