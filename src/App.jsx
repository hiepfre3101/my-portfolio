import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefautLayout/DefaultLayout";

import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    {route.element}
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
