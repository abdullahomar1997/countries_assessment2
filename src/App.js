import CountriesScreen from "./components/screen/CountriesScreen";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountriesContextProvider } from "./components/services/countries.context";
import CountryDetails from "./components/screen/CountryDetails";

function App() {
  return (
    <div style={{height:"100vh",backgroundColor:"white"}}>    
      <Router>
        <Routes>
          <Route path="/" exact element={
            <CountriesContextProvider>
              <CountriesScreen/>
            </CountriesContextProvider>}
          />
          <Route path="/details/:id" exact element={
            <CountriesContextProvider>
              <CountryDetails/>
            </CountriesContextProvider>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
