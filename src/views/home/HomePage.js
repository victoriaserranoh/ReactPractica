import "./HomePage.css";
import React from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div className="homePage">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}
export default HomePage;
