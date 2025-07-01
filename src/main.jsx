import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard.jsx'
import { Tables } from './Pages/Tables.jsx'
import { Billing } from './Pages/Billing.jsx'
import { Rtl } from './Pages/rtl.jsx'
import { Profile } from './Pages/Profile.jsx'
import { Signin } from './Pages/Signin.jsx'
import { Signup } from './Pages/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
      </Route>

      <Route path='/tables' element={<App />}>
          <Route index element={<Tables />} />
      </Route>

      <Route path='/billing' element={<App />}>
          <Route index element={<Billing />} />
      </Route>

      <Route path='/rtl' element={<App />}>
          <Route index element={<Rtl />} />
      </Route>

      <Route path='/profile' element={<App />}>
          <Route index element={<Profile />} />
      </Route>

      <Route path='/sign-in' element={<Signin />} />
          {/* <Route index element={<Signin />} /> */}
      {/* </Route> */}

      <Route path='/sign-up' element={<Signup />} />
          {/* <Route index element={<Signup />} /> */}
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
