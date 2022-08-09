import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
function App() {
  const personName = {
    first: 'anh',
    last: 'cao',
  }

  const nameList =
    [
      {
        first: 'Bruce',
        last: 'Wayne',
      },
      {
        first: 'Clark',
        last: 'Kent',
      },
      {
        first: 'Princess',
        last: 'Diana',
      },
    ]



  return (
    <div className="App">
      <Greet name=' anhcao' messageCount={10} isLogging={true} />

      <Person name={personName} />

      <PersonList names={nameList} />

      <Status status='success' />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar going</Heading>
      </Oscar>

      <Greet name=' anhcao' isLogging={true} />

      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} />

      <Input value='' handleChange={(event) => console.log(event)} />

      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      <LoggedIn />

      <User />

      <Counter />

    </div>
  );
}

export default App;
