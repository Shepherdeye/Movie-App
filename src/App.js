import ContextProvider from "./Components/Context/GlobalContext";
import Header from "./Components/Header/Header";
import Add from "./Pages/add/Add";
import Watchhed from "./Pages/Watched/Watchhed";
import WatchedList from "./Pages/WatchedLIst/WatchedList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Watchhed />} />
            <Route path="/watched" element={<Watchhed />} />
            <Route path="/watchedlist" element={<WatchedList />} />
            <Route path="/add" element={<Add />} />

          </Routes>
        </ContextProvider>
      </Router>

    </div>
  );
}

export default App;
