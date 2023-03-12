import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./app.css"
import "./features/pages/pages.css"
import "./features/Checkboxes/checkboxes.css"
import "./features/navigation/navbar.css"
import "./features/students/students.css"
import "./features/footer/footer.css"
import "./features/pages/contacts.css"
import Layout from "./features/Layout"
import Home from "./features/pages/Home"
import Contacts from "./features/pages/Contacts"
import ChartStudent from "./features/pages/ChartStudent"
import StudentTable from "./features/pages/Table"
import About from "./features/pages/About"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout/>} >
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path=":studentName" element={<ChartStudent />} />
            <Route path="studenttable" element={<StudentTable />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
