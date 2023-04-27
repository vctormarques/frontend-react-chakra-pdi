import { DashboardPage, ListUser, RegisterUser } from "pages";
import { 
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";


export function AppRoutes(){
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />}/>
                <Route path="/dashboard" element={<DashboardPage />}/>
                <Route path="/users" element={<ListUser />}/>
                <Route path="/register-user" element={<RegisterUser />}/>
            </Routes>
        </BrowserRouter>
    );
}