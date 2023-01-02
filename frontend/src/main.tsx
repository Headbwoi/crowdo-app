import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {
  AppContextProvider,
  AuthContextProvider,
  UserContextProvider,
} from "./context"
import "./index.css"

import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContextProvider>
      </AppContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
