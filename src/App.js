import React from 'react';
import Navigation from './components/Navigation';
import Field from './components/Field';
import Button from './components/Button';
import ManipulationPanel from './components/ManipulationPanel';
import useSnakeGAme from './hooks/useSnakeGame';

function App() {

  const {
    body, difficulty, fields, status, Start,
    Stop, Restart, updateDirection, updateDifficulty
  } = useSnakeGAme()

  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation
          length={body.length}
          difficulty={difficulty}
          onChangeDifficulty={updateDifficulty}
        />
      </header>

      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button
          status={status}
          onStop={Stop}
          onStart={Start}
          onRestart={Restart}
        />
        <ManipulationPanel onChange={updateDirection} />
      </footer>
    </div>
  );
}

export default App;
