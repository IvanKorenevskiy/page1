import React from "react";
import 'antd/dist/antd.css';
import "./App.scss";
import Header from "./components/header/header";
import TransferBooking from "./components/transfer-booking/transfer-booking";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div className="root__wrapper wrapper">
      <Header/>
      <TransferBooking/>
      <Footer/>
    </div>
  );
}


export default App;
