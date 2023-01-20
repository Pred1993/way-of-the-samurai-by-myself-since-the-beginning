import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './Components/Music/Music';
import {Setting} from './Components/Setting/Setting';
import {News} from './Components/News/News';
import UsersContainer from './Components/Users/Users.Container';
import ProfileContainer from './Components/Profile/Profile.Container';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from "./Components/Login/Login";
import {AppDispatchType, useAppSelector} from "./redux/redux-store";
import Preloader from "./Components/Common/Preloader/Preloader";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {initializedSuccessThunkCreator} from "./redux/app-reducer";

function App() {
  const initialized = useAppSelector(state => state.app.initialized)
  const dispatch = useDispatch<AppDispatchType>()
  useEffect(() => {
    dispatch(initializedSuccessThunkCreator())
  }, [])

  if (!initialized) {
    return (
      <div
        style={{
          position: "fixed",
          top: "30%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Preloader />
      </div>
    );
  }

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
