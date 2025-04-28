import { useState } from "react";
import Background from "./Components/Background/Background.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";

const App = () => {

  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" }
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  )
}

export default App
