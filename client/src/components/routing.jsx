import React from "react";
import Home from "../pages/homepage/home";
import About from "../pages/aboutpage/about";
import Services from "../pages/servicepage/services";
import IndexPage from "../pages/admin/IndexPage";
import Contact from "../pages/contactpage/contact";
import { Route,Routes } from "react-router-dom";
import Carrier from "../pages/carrierpage/carrier";
import Post from "./pdf-form";
import Admin from "../pages/admin/admin";
import { UserContextProvider } from '../UserContext';
import RegisterPage from "../pages/admin/RegisterPage";
import LoginPage from "../pages/admin/LoginPage";
import CreatePost from "../pages/admin/CreatePost";
import PostPage from "../pages/admin/PostPage";
import EditPost from "../pages/admin/EditPost";
import "bootstrap/dist/css/bootstrap.min.css"
import GarlicSakthiPlusEnglish from "./products pages/garlicplus";
import GarlicSakthiEnglish from "./products pages/garlicsakthi";
import BananaGarlicEnglish from "./products pages/banana sakthi";
import TeaEnglish from "./products pages/tea";
import GrapesEnglish from "./products pages/grapes";
import GarlicSakthiTamil from "./products pages/garlic sakthi tamil";
import GarlicSakthiPlusTamil from "./products pages/garlic plus tamil";
import BananaGarlicTamil from "./products pages/banana sakthi tamil";
import TeaTamil from "./products pages/tea tamil";
import GrapesTamil from "./products pages/grapes tamil";
import Engt from "./accordian/Engt";
import Tamil from "./accordian/Tamil";
import English from "./accordian/English";
import FarmerForm from "./farmerpdfform";






function Routing(){

    return<>
    <div className="container">
    <UserContextProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<IndexPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/pdf" element={<Post />}/>
        <Route  path= "/admin"   element={<Admin/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/garlicplusenglish" element={<GarlicSakthiPlusEnglish/>} />
          <Route path ="/garlicsakthienglish" element ={<GarlicSakthiEnglish/>} />
          <Route path= "/banana" element={<BananaGarlicEnglish />} />
          <Route path="/tea" element={<TeaEnglish />} />
          <Route path="/grapes" element ={<GrapesEnglish />}/>
          <Route path="/garlicsakthitamil" element ={<GarlicSakthiTamil/>} />
          <Route path="/garlicplustamil" element ={<GarlicSakthiPlusTamil/>} />
          <Route path="/bananatamil" element ={<BananaGarlicTamil/>} />
          <Route path="/teatamil" element ={<TeaTamil />} />
          <Route path="/grapestamil" element ={<GrapesTamil />}/>
          <Route path="/engt" element ={<Engt/>}/>
          <Route path="/tamil" element ={<Tamil />} />
          <Route path="/english" element ={<English/>} />
          <Route path="/farmerpdf" element ={< FarmerForm/>}/>
       

    </Routes>
    </UserContextProvider>
    <br />
    </div>
    </>  ;

}

export default Routing;