import { Routes, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";
import CreateNote from "./pages/CreateNote";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import LayOut from "./Componentes/LayOut";

const theme = createTheme({
  palette: {
    primary: { main: "#007E33" },
    secondary: green,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LayOut>
          <Routes>
            <Route path="/" element={<NotePage />} />
            <Route path="/createnote" element={<CreateNote />} />
          </Routes>
        </LayOut>
      </ThemeProvider>
    </div>
  );
}

export default App;
