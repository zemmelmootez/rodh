import Profile from "./Profile";
import img from './logo.svg'
import Gittest from "./Gittest";
function App() {
 
  const show=(a)=>{
    alert(a)
  }
  return (
   <div>
    <Profile fullname="mootez" bio="software engineer" profession="student" fct={show}>{img}</Profile>
    <Gittest/>
   </div>
  );
}

export default App;
