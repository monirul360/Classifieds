import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Share/Footer/Footer';
import Nav from './Component/Share/Nav/Nav';
import Home from './Page/Home/Home';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Private from './Dashboard/Private/Private';
import Dashboard from './Dashboard/Dashboard';
import Post from './Dashboard/Post/Post';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About_user from './Dashboard/About_user/About_user';
import { formatDistance, subDays } from 'date-fns'
import UpdateProfile from './Dashboard/UpdateProfile/UpdateProfile';
import Friend from './Dashboard/Friend/Friend';
import Chat from './Dashboard/Chat/Chat';
import Error from './Page/Error/Error';
import Aboutus from './Page/Aboutus/Aboutus';
import Contact from './Page/Contact/Contact';
import FAQs from './Page/FAQs/FAQs';
import Careers from './Page/Careers/Careers';
import Privacy_Policy from './Page/Privacy_Policy/Privacy_Policy';
formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
function App() {
  AOS.init();
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/faqs' element={<FAQs></FAQs>}></Route>
        <Route path='/careers' element={<Careers></Careers>}></Route>
        <Route path='/privacypolicy' element={<Privacy_Policy></Privacy_Policy>}></Route>
        <Route path='dashboard' element={
          <Private>
            <Dashboard></Dashboard>
          </Private>
        }
        >
          <Route index element={<Post></Post>} ></Route>
          <Route path='about_user' element={<About_user></About_user>}></Route>
          <Route path='updateprofile' element={<UpdateProfile></UpdateProfile>}
          >
          </Route>
          <Route path='friend' element={<Friend></Friend>}></Route>
          <Route path='chat' element={<Chat></Chat>}></Route>
        </Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
