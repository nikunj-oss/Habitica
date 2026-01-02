import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Statistics } from "./pages/Statistics";
import { SleepTracker } from "./pages/SleepTracker";
import { VisionBoard } from "./pages/VisionBoard";
import { MainLayout } from "./layouts/MainLayout";
import { NotFound } from "./pages/NotFound";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="/vision" element={<VisionBoard/>}/>
            <Route path="/sleep" element={<SleepTracker/>}/>
             <Route path="*" element={<NotFound/>}/>
          </Route>       
        </Routes>
      </BrowserRouter>
  );
}

export default App;
