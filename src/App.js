import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./Components/List/index.jsx";
import Form from "./Components/Form/index.jsx";
import UpdateUserPage from "./Pages/UpdateUserPage/UpdateUserPage.jsx";
import { PeopleProvider } from "./PeopleContext.js";
import "./App.css";

function App() {
  return (
    <PeopleProvider>
      <Router>
        <div className="App">
          <h1>learn react</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:index" element={<UpdateUserPage />} />
          </Routes>
        </div>
      </Router>
    </PeopleProvider>
  );
}

const Home = () => (
  <>
    <Form />
    <List />
  </>
);

export default App;
