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
import { ThemeContextProvider } from './components/context/ThemeComtext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { AnotherUser } from './components/context/User';
import { MutableRef } from './components/ref/MutableRef';
import { CounterByClass } from './components/class/CounterByClass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templatelisteral/Toast'
import { CustomButton } from './components/html/AnotherButton';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text'


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

      {/* useReducer hook */}
      <Counter />

      {/* useContext hook */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      {/* useContext future value */}
      <UserContextProvider>
        <AnotherUser />
      </UserContextProvider>

      {/* useRef hook */}
      <MutableRef />

      {/* Class Component */}
      <CounterByClass message='The count value is' />

      {/* Component Prop */}
      <Private isLoggedIn={true} component={Profile} />

      {/* <List items={['batman', 'superman', 'wonder women']} onClick={(item) => console.log(item)} />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* Generic Props */}

      <List items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne',
        },
        {
          id: 2,
          first: 'Clark',
          last: 'Kent',
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diana',
        },
      ]} onClick={(item) => console.log(item)} />

      {/* Restricting Props */}
      <RandomNumber value={10} isPositive />

      {/* Template Literals and Exclude */}
      <Toast position='right - bottom' />

      {/* Wrapping HTML elements */}
      <CustomButton variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton>

      {/* Extracting a component */}
      <CustomComponent name='anhcao' isLogging={true} />

      {/* Polymorphic components */}
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>

    </div>
  );
}

export default App;
