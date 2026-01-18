import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import NavbarLayout from "./layouts/NavbarLayout";

function App() {
  return (
    <div className="App lg:max-w-3xl m-auto">
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App