import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Profile from "./pages/profile"; // Changed from profile to Profile
import { PetProvider } from "./Components/petContext"; 

function App() {
  return (
    <div>
<Navbar/>
      <Home />
    
    </div>

  );
}

export default App;

