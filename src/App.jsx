import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeContext_pure } from "./context/ThemeContext-pure";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          {/* <ThemeContext_pure.Provider value={"white"}> */}
          <>
            <RouterProvider router={router} />
          </>
          {/* </ThemeContext_pure.Provider> */}
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
