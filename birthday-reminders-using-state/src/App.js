import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3 style={{textAlign:'center',textDecoration:'underline'}}>{people.length} BIRTHDAYS TODAY!</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;