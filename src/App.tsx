import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Demo1 from './components/Demos/Demo1';
import Demo2 from './components/Demos/Demo2';
import Index from './pages/Index';
import Groups from './components/UserManagement/Groups';
import Profiles from './components/UserManagement/Profiles';
import Users from './components/UserManagement/Users';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/business">
          <Route path="demo1" element={<Demo1 />} />
          <Route path="demo2" element={<Demo2 />} />
        </Route>
        <Route path="/atm">
          <Route path="demo1" element={<Demo1 />} />
          <Route path="demo2" element={<Demo2 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
