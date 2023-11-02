import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";

function App() {
  const title = "Text Modify";
  const [mode, setMode] = useState("Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled.", "success");

      document.title = "Text Modify - Light Mode";

      // setInterval(() => {
      //   document.title = " Light Mode";
      // }, 2000);
      //  setInterval(() => {
      //    document.title = " Dark Mode";
      //  }, 1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#47465a";
      showAlert(" Dark Mode has been Enabled.", "success");

      document.title = "Text Modify - Dark Mode";
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Navbar title="NavBar" AboutText="About us" /> */}
        <Navbar title={title} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          {/* <About /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
