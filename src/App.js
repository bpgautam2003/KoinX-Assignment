import "./App.css";
import Coin from "./Components/Coin";
import GetStarted from "./Components/GetStarted";
import Navbar from "./Components/Navbar";
import Suggestion from "./Components/Suggestion";
import Trending from "./Components/Trending";
import TrendingCoins from "./Components/TrendingCoins";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Coin />
        <div className="responsive-container">
          <Suggestion />
          <TrendingCoins />
        </div>
        <div className="container1">
          <GetStarted />
          <Trending />
        </div>
      </div>
      <div className="container2">
        <Suggestion />
        <TrendingCoins />
      </div>
    </>
  );
}

export default App;
