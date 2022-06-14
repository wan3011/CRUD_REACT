import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PegawaiList from "./component/PegawaiList";
import AddPegawai from "./component/AddPegawai";
import EditPegawai from "./component/EditPegawai";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <PegawaiList />
          </Route>
          <Route path="/add">
            <AddPegawai />
          </Route>
          <Route path="/edit/:id">
            <EditPegawai />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
