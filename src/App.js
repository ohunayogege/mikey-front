import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hocs/Layout'
import Navbar from './Navbar/Navbar';
import Home from './Home';


//Protected content
import Content from './ProtectedContent/Content';


//Auth
import SignUp from './accounts/SignUp';
import LogIn from './accounts/LogIn';
import Logout from './accounts/Logout';
import Profile from './Profile';
import NotFound from './NotFound';


//Payment



function App() {
  return (
      <Router>
        <Layout>
          <div className="App">
            <Navbar />
            <div className="content">
              <Switch>
                <Route exact path = '/'>
                    <Home />
                </Route>
            
                {/*Protected content*/}
              
                <Route path = '/Content'  component = {Content} />

        
                {/*Authentication*/}
                <Route path = '/SignUp' component = {SignUp} />
                <Route path = '/LogIn' component = {LogIn} />
                <Route path = "/Profile" component = {Profile} />
                <Route path="/logout" component={Logout} />

           
                <Route path = "*" component = {NotFound} />
              </Switch>
            </div>
          </div>
        </Layout>
      </Router>
  );
}

export default App;
