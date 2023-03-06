import './App.css';
//import CompA from './Components/CompA';
//import CompB from './Components/CompB';
// import CompB1 from './Components/CompB1';
// import ComponentA from './Components/ComponentA';
// import ComponentB from './Components/ComponentB';
// import Counter from './Components/Counter';
// import Message from './Components/Message';
//import Greek  from'./props/Greetprops';
//import Welcome from './props/Welcomeprops';
//import Hello from'./Components/Hello';
//import Magic from'./State/Magic';
//import Counter from './State/Counter';
//import  Destructingpropstate from './props/Destructingpropstate';
//import DestructingEX1 from './props/DestructingEx1';
// import FunctionClick from './Event handlers/FunctionClick';
// import Classclick from './Event handlers/Classclick';
//import Decrement from'./State/Decrement';
//import Eventbind from './Event binding/Eventbind';
//import Eventbind1 from './Event binding/Eventbind1';
//import Eventbind2 from './Event binding/Eventbind1';
// import Eventbind3 from './Event binding/Eventbind1';
//import Parentcomponent from './methodasComponent/Parentcomponent';
//import Parentcomponent1 from './methodasComponent/Parentcomponent1';
//import Usergreetings from './Conditional rendering/Usergreetings';
//import User from'./Conditional rendering/User';
//import Shortcircuitoperator from './Conditional rendering/Shortcircuitoperator';
//import NamesList from './List rendering/NamesList';
//import NamesList2 from './List rendering/NamesList2';
//import NamesList3 from './List rendering/NameList3';
//import NameList4 from './List rendering/NameList4';
// import NameList from './index as key Anti pattern/NamesList';
//import Stylesheet from './Styling read components/Stylesheet';
import Inline from './Styling read components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css';
function App() {
  return (
    <div className="App">
      {/* <CompA/>  */}
      {/* <CompB/> */}
      {/* <CompB1/> */}
      {/* <ComponentA/> */}
      {/* <ComponentB/> */}
      {/*<Greek name="ravi" heroName="rakesh">{/*how to retrive these Components in greet Component*/}
      {/*<p>this is children props</p>*/}
      {/* <Greek/> */}
      {/*<Greek name="raj" heroName="arjun">
        <button>Action</button>
        </Greek>
      <Greek name="rakesh" heroName="rakesh"/>
      <Welcome name="ravi" heroName="rakesh" />
      <Welcome name="raj" heroName="arjun" />
      <Welcome name="rakesh" heroName="rakesh" />
      {/*<Welcome/>*/}
      {/*<Hello/>*/}
      {/* <Counter/> */}
      {/*<Message/>*/}
      {/* <Magic/> */}
      {/*<Counter/>*/}
      {/*<Destructingpropstate name="rakesh" heroName="rakesh"/>*/}
      {/*<DestructingEX1 name="rakesh" heroName="rakesh"/>*/}
      {/* <FunctionClick/> */}
      {/* <Classclick/> */}
      {/* <Decrement/> */}
      {/* <Eventbind/> */}
      {/* <Eventbind1/> */}
      {/* <Eventbind2/> */}
      {/* <Eventbind3/> */}
      {/* <Parentcomponent/> */}
      {/* <Parentcomponent1/> */}
      {/* <Usergreetings/>  */}
      {/* <User/>*/}
      {/* <NamesList/> */}
      {/* <NamesList2/> */}
      {/* <NamesList3/> */}
      {/* <NameList4/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={"true"}/> */}
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
