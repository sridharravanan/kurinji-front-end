import React,{useState} from 'react';
import logo from './logo.svg';
import '../src/assets/bootstrap/css/bootstrap.min.css';
import '../src/assets/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/css/style.css';
import Login from './pages/Login';
import Header from './components/Header';
import SideBar from './components/SideBar';
import BlankPage from './pages/BlankPage';

function App() {
  const LoginTemplate = () => <> <main> <Login></Login> </main> </>;
  const HomeTemplate = () => <> <Header/> <SideBar/> 
  <main id="main" className="main"> <BlankPage /></main></>;
  
  const [isLogin, setIsPreview] = useState(false);
  return (
    <>
    {isLogin ? <LoginTemplate /> : <HomeTemplate />}
    </>
    
  );
}

export default App;
