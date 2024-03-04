// import { Greet } from "./components/Greet"
// import { Heading } from "./components/Heading"
// import { Oscar } from "./components/Oscar"
// import { Person } from "./components/Person"
// import { PersonList } from "./components/PersonList"
// import { Status } from "./components/Status"
// const App = () => {
//   const personName={
//     firstName:'Tom',
//     lastName:'Cruise'
//   }
//   const personList=[{
//     first:'Rick',
//     last:'Woods'
//   },
//   {
//     first:'Carol',
//     last:'James'
//   }
//       ]
//   return (
//     <div className="App">
//       <Greet name='navami' messageCount={10} isLoggedIn={false}/>
//       <Person {...personName}/>
//       <PersonList names={personList}/>
//       <Status status="success"/>
//       <Heading>Placeholder text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to Tom Cruise</Heading>
//       </Oscar>
//     </div>
//   )
// }
// export default App
//============================================================================================event props



// import { Button } from "./components/Button"
// import { Input } from "./components/Input"


// const App = () => {
//   return (
//     <div>
//       <Button handleClick={(event,id)=>{console.log(`button clicked`,event,id)}}/>
      // <Button handleClick={()=>{console.log(`button clicked`)}}/>

//       <Input value="" handleChange={(event)=>{console.log(event)}}/>
//     </div>
//   )
// }

// export default App
//=====================================================================================================style props

// import { Container } from "./components/Container"

// const App = () => {
//   return (
//     <div>
//       <Container styles={{border:'1px solid black',padding:'1rem'}}/>
//     </div>
//   )
// }

// export default App
//==================================================================================useState

// import { LoggedIn } from "./components/state/LoggedIn"
// const App = () => {
//   return (
//     <div>
//       <LoggedIn/>
//     </div>
//   )
// }

// export default App
//================================================================================useReducer


// import { Counter } from "./components/state/Counter"
// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App
//=====================================================================useContext


// import { Box } from "./components/context/Box"
// import { ThemeContextProvider } from "./components/context/ThemeContext"

// const App = () => {
//   return (
//     <div>
//       <ThemeContextProvider>
//           <Box/>
//       </ThemeContextProvider>
//     </div>
//   )
// }

// export default App
//====================================================================useContext FutureValue

// import { User } from "./components/context/User"
// import { UserContextProvider } from "./components/context/UserContext"

// const App = () => {
//   return (
//     <div>
//       <UserContextProvider>
//         <User/>
//       </UserContextProvider>
//     </div>
//   )
// }

// export default App
//===============================================================================useRef

// import { MutableRef } from "./components/ref/MutableRef"

// const App = () => {
//   return (
//     <div>
//       <MutableRef/>
//     </div>
//   )
// }

// export default App
//=======================================================================component prop
// import { Private } from "./components/auth/Private"
// import { Profile } from "./components/auth/Profile"


// const App = () => {
//   return (
//     <div>
//       <Private isLoggedIn={true} Component={Profile}/>
//     </div>
//   )
// }

// export default App
//========================================================================Generic props

// import { List } from "./components/generics/List"
// const App = () => {
//   return (
//     <div>
//       {/* <List items={['Inception','Mission Impossible','American Psycho']} onClick={(item)=>console.log(item)}/>
//       <List items={[1,2,3,4]} onClick={(item)=>console.log(item)}/> */}
//       <List items={[{id:1,first:'nn',last:'mm'},{id:2,first:'ll',last:'kk'}]} onClick={(item)=>console.log(item)}/>
//     </div>
//   )
// }

// export default App
//===========================================================================restricting props
//import { RandomNumber } from "./components/restriction/RandomNumber"

// const App = () => {
//   return (
//     <div>
//       <RandomNumber value={10} isPositive />
//     </div>
//   )
// }

// export default App
//================================================================================template literals


// import { Toast } from "./components/templateLiterals/Toast"
// const App = () => {
//   return (
//     <div>
//       <Toast position="left-bottom"/>  {/*but should avoid center-center so use 'Exclude' keyword */}
      
//     </div>
//   )
// }

// export default App
//===================================================================================Wrapping HTML ELEMENTS

// import { CustomButton } from "./components/html/Button"

// const App = () => {
//   return (
//     <div>
//       <CustomButton variant='primary'onClick={()=>console.log('Clicked')}>
//         Primary Button
//       </CustomButton>
//     </div>
//   )
// }

// export default App
//=========================================================================================extract a component's prop types

// import { CustomComponent } from "./components/html/CustomComponent"
// const App = () => {
//   return (
//     <div>
//       <CustomComponent name="navami" isLoggedIn={false}/>
//     </div>
//   )
// }

// export default App
//=======================================================================================polymorphic components

import { Test } from "./components/polymorphic/Test"
const App = () => {
  return (
    <div>
      <Test as='h1' size="lg">Heading</Test>
      <Test as='p' size="md">Paragraph</Test>
      <Test as='label' htmlFor='someId' size="sm" color='secondary'>Label</Test>
    </div>
  )
}

export default App