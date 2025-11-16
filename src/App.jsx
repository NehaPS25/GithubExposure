import ThemeProvider from "./context/Themecontext";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
