import Homepage from "./components/Home/Homepage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Signinpage from "./components/Signin/Signinpage";
import Mainpage from "./components/Main/Mainpage";
import Register from "./components/Home/Register";
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route exact path  ="/signin" element={<Signinpage />} />
      <Route exact path  ="/main" element={<Mainpage/>} />
      <Route exact path  ="/register" element={<Register/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
