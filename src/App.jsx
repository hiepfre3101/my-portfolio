import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import DefaultLayout from "./layout/DefautLayout/DefaultLayout";

import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.path.includes("/admin")
              ? AdminLayout
              : DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
