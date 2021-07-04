import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import UserContextProvider from "./context/UserContext";
import MyCom from "./components/My/MyCom";

function App() {
  return (
    <div className="__main">
     <UserContextProvider>
        <Nav />
        <ChatBody />
        <MyCom/>
      </UserContextProvider>
    </div>
  );
}

export default App;
