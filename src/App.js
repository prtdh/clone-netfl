import Homepage from "./components/Home/Homepage";
import { BrowserRouter, Switch, Routes,Route, Link } from "react-router-dom";
import Signinpage from "./components/Signin/Signinpage";
import Mainpage from "./components/Main/Mainpage";
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route exact path  ="/signin" element={<Signinpage />} />
      <Route exact path  ="/main" element={<Mainpage/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
