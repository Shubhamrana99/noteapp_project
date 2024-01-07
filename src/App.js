import { Routes, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";
import CreateNote from "./pages/CreateNote";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#fefefe" },
    secondary: green,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<NotePage />} />
          <Route path="/createnote" element={<CreateNote />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
