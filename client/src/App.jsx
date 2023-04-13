import { useEffect, useState } from "react";
import Demo from "./components/Demo";
import GetCurrentUrl from "./components/GetCurrentUrl";
import axios from "axios";
function App() {
  const [url, setCurrentUrl] = useState("");

  useEffect(() => {
    GetCurrentUrl((url) => {
      setCurrentUrl(url);
    });
  }, []);

  const handleBtn = async () => {
    try {
      await axios.post("http://localhost:3000/", {
        url,
      });
      console.log("butttt");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleBtn();
  }, [url]);

  return (
    <div className="bg-red-500 w-[500px] h-[500px]">
      <h1>Hello</h1>
      <Demo />
      <p>{url}</p>
    </div>
  );
}

export default App;

// npm i puppetter -g
