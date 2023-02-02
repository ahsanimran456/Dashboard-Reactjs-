import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Containers/Home/Home';
import Profile from '../Containers/Profile/Profile';
import Users from '../Containers/Users/Users';
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/users"} element={<Users />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;