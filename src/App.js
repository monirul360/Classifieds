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
import AccountIssue from './Page/AccountIssue/AccountIssue';
import History from './Page/History/History';
import TermsofServices from './Page/TermsofServices/TermsofServices';
import Bloges from './Page/Bloge/Bloges';
import BlogeDetailes from './Page/Bloge/BlogeDetailes';
import { createContext, useEffect, useState } from 'react';
import Dhaka from './Component/Cities/DhakaDivision/Dhaka';
import Gazipur from './Component/Cities/DhakaDivision/Gazipur';
import Review from './Dashboard/Review/Review';
import User from './Dashboard/User/User';
import GridSystem from './Component/GridSystem/GridSystem';
export const COUNTER_CONTEXT = createContext()
formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
function App() {
  AOS.init();
  const [ip, setip] = useState('');
  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then(res => res.json())
      .then(data => setip(data));
  }, [])
  console.log(ip);

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([])
  const [activeCatagory, setActivecatagory] = useState('All');
  const value = { items, setItems, filter, setFilter, activeCatagory, setActivecatagory };


  // Fech API DATA
  useEffect(() => {
    const fechProducts = async () => {
      try {
        const data = await fetch(`http://localhost:5000/freeads`)
        const product = await data.json();
        setItems(product)
        setFilter(product)
      } catch (error) { }
    }
    fechProducts();
  }, []);

  return (
    <>
      <COUNTER_CONTEXT.Provider value={value}>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route index element={<Dhaka></Dhaka>}></Route>
            <Route path='Gazipur' element={<Gazipur></Gazipur>}></Route>
            <Route path='Grid' element={<GridSystem></GridSystem>}></Route>

          </Route>
          <Route path='/aboutus' element={<Aboutus></Aboutus>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/bloge' element={<Bloges></Bloges>}></Route>
          <Route path='/blogeDetail/:Id' element={<BlogeDetailes></BlogeDetailes>}></Route>
          <Route path='/faqs' element={<FAQs></FAQs>}></Route>
          <Route path='/careers' element={<Careers></Careers>}></Route>
          <Route path='/privacypolicy' element={<Privacy_Policy></Privacy_Policy>}></Route>
          <Route path='/accountIssue' element={<AccountIssue></AccountIssue>}></Route>
          <Route path='/history' element={<History></History>}></Route>
          <Route path='/TermsofServices' element={<TermsofServices></TermsofServices>}></Route>
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
            <Route path='review' element={<Review></Review>}></Route>
            <Route path='user' element={<User></User>}></Route>
          </Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </COUNTER_CONTEXT.Provider>
    </>
  );
}

export default App;
