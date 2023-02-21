import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Share Tech Mono", "monospace"].join(","),
  },
  palette: {
    primary: {
      light:"#610094",
      main:"#3F0071",
      dark:"#291561",
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;