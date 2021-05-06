import { data } from './data'
import './App.css'
import { useState } from 'react';

function App() {
  const [showSecretIdentity, setShowSecretIdentity] = useState(false)
  const [indexId, setindexId] = useState<number>()
  return (
    <div className="App">
      <h1>{data.HeroesAlmanac.title}</h1>
      <h2>{data.HeroesAlmanac.subtitle}</h2>
      <div className="items">
      {data.HeroesAlmanac.heroes.map((item, index) => (
        <div key={index} onClick={() => {setShowSecretIdentity(!showSecretIdentity); setindexId(index)}} >
          <h3>{item.heroName}</h3>
          <img src={item.avatar} className="App-logo" alt="logo" />
          <h4>{item.description}</h4>
          {(showSecretIdentity && index === indexId) && <h3>{item.secretIdentity}</h3>}
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
