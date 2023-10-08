// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './DashBord/Contact/Contact';
import { Header } from './DashBord/Header';
import { NavBar } from './DashBord/NavBar';
import { Login } from './DashBord/Registration/Login';
import { SignUp } from './DashBord/Registration/SignUp';
import { Services } from './DashBord/Services/Services';
import { Sell } from './Seller/Sell';
import DonateForm from './Seller/DonateForm';
import Branch from './Buyer/Branch';
import ProfileComponent from './DashBord/Registration/ProfileComponent';
import { Editprofile } from './DashBord/Registration/Editprofile';
import { Catagpage } from './Buyer/Catagpage';
import Footer from './DashBord/footer';
import { Sublist } from './Buyer/Sublist';
import { ViewBook } from './Buyer/ViewBook';
import { Comic } from './Buyer/Comic';
import { Imagebook } from './Seller/Imagebook';
import { Subject } from './Buyer/Subject';
import { BranchBook } from './Buyer/BranchBook';
import { It } from './Buyer/It';
import { Cumss } from './Buyer/Cumss';
import { Civil } from './Buyer/Civil';
import { Chemical } from './Buyer/Chemical';
import MySelledBooks from './DashBord/Registration/MySelledBooks';
import AdminDashboard from './DashBord/AdminDashboard';
import { AdminLogin } from './DashBord/Registration/AdminLogin';
import BookList from './DashBord/AdminFe/BookDetails';
import OrderOfUser from './DashBord/AdminFe/OrderOfUser';
import Suggestion from './DashBord/AdminFe/Suggestion';
import UserDetails from './DashBord/AdminFe/UserDetails';
import { Donate } from './DashBord/AdminFe/donate';
// import { ViewBook } from './Buyer/ViewBook';





 function App() {
  return (
    <div className="App">
    <NavBar/>
    {/* <Header/> */}
    {/* <Services/> */}
    {/* <Contact/> */}
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Sell/> */}
    
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      {/* <Route path="/login" element={<Login/>}></Route> */}
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/sell" element={<Sell/>}></Route>
      <Route path="/donate" element={<DonateForm/>}></Route>
      <Route path="/buy" element={<Catagpage/>}></Route>
      <Route path="/profile" element={<ProfileComponent/>}></Route>
      <Route path="/edit" element={<Editprofile/>}></Route>
      <Route path="/novels" element={<Sublist/>}></Route>
      <Route path="/view"  element={<ViewBook/>}></Route>
      <Route path="/comic" element={<Comic/>}></Route>
      <Route path="/Engineering" element={<Branch/>}></Route>
      <Route path='/image' element={<Imagebook/>}></Route>
      <Route path='/subject' element={<Subject/>}></Route>
      <Route path='/branch' element={<BranchBook/>}></Route>
      <Route path='/it'    element={<It/>}></Route>
      <Route path= '/cssbra' element={<Cumss/>}></Route>
      <Route path='/civil'  element={<Civil/>}></Route>
      <Route path='/chemical' element={<Chemical/>}></Route>
      <Route path='/sellbooks' element={<MySelledBooks/>}></Route>
      <Route path='/dashbord'  element={<AdminDashboard/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/booklist' element={<BookList/>}></Route>
      <Route path='/orderoflist' element={<OrderOfUser/>}></Route>
      <Route path='/suggestion' element ={<Suggestion/>}></Route>
      <Route path='/userdetails' element={<UserDetails/>}></Route>
      <Route path='/donatelist'   element={<Donate/>}></Route>
      
      {/* <Route path="/view/" element={<ViewBook />} /> */}
    </Routes>
    
    <Footer/>
    
    
    </div>
  );
}

export default App;
