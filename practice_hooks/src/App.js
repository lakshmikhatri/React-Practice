
import './App.css';
//import ClassCounter from './StateHooks/ClassCounter';
//import HookCounter from './UsestateHooks/HookCounter';
//import HookcounterTwo from './UseStatewithPrevious/HookcounterTwo';
//import HookcounterEx from './UseStatewithPrevious/HookcounterEx';
//import HookCounterObject from './UseStatewithObject/HookCounterObject';
//import HookCounterArray from './UsestatewithArray/HookCounterArray';
//import ClassCounter from './UseEffectHooks/ClassCounter';
//import HookCounterOne from './UseEffectHooks/HookCounterOne'
//import CounterEffect from './Conditionally run Effect/CounterEffect';
//import HookCounter from './Conditionally run Effect/HookCounter';
//import ClassMouse from './Runs Effect only once/ClassMouse';
//import HookMouse from './Runs Effect only once/HookMouse';
//import Mousecontainer from './UseEffectwithCleanup/Mousecontainer';
import IntervalClassCounter from './UseEffect with incorrect dependency/IntervalClassCounter';
import IntervalHookCounter from './UseEffect with incorrect dependency/IntervalHookCounter';
function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookcounterTwo/> */}
      {/* <HookcounterEx/> */}
      {/* <HookCounterObject/> */}
      {/* <HookCounterArray/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounterOne/> */}
      {/* <CounterEffect/> */}
      {/* <HookCounter/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <Mousecontainer/> */}
      <IntervalClassCounter/>
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
