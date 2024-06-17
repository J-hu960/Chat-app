import { useState } from "react"
import Login from "./screens/Login/Login"
import Chats from "./screens/Chats/Chats"
import Conversation from "./screens/Conversation/Conversation"
import NewChat from "./screens/new-chat/NewChat"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./routes"
import NavBar from "./components/NavegationBar/NavBar"
import JoinChat from "./screens/join-chat/JoinChat"


function App() {

  return (
    <BrowserRouter>
    <Routes>
           <Route path="*" element={<>Not found</>} />
           <Route path='/' element={<Login />} />
           <Route path={PublicRoutes.LOGIN} element={<Login />} />
           {/* <Route path={PublicRoutes.SIGNUP} element={<SignUp />} /> */}
            {/* <Route element={<AuthGuard />}> */}
                 <Route path={PrivateRoutes.CHAT}element={<Chats />} />
                 <Route path={PrivateRoutes.CONVERSATION} element={<Conversation/>} />
                 <Route path={PrivateRoutes.NEWCHAT}element={<NewChat />} />
                 <Route path={PrivateRoutes.JOINCHAT}element={<JoinChat />} />

              {/* </Route> */}
      </Routes>
      <NavBar />
    </BrowserRouter>
  
  )
}

export default App
