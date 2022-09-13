import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './Components/Music/Music';
import {Setting} from './Components/Setting/Setting';
import {News} from './Components/News/News';
import UsersContainer from './Components/Users/Users.Container';
import ProfileContainer from './Components/Profile/ProfileInfo/Profile.Container';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className="app">
            <HeaderContainer/>
            <Navbar/>
            <div className="appContent">
                <Route path="/dialogs" render={() => <Dialogs/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/setting" component={Setting}/>
                <Route path="/news" component={News}/>

            </div>
        </div>
    );
}

export default App;
