import React from "react";
import Header from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
import Alert from "./Components/AlertSection/Alert";
import AppleYoutube from "./Components/YoutubeVideosJan27/AppleYoutube";
import IpadPro from "./Components/SectionOne/IpadPro";
import MacAir from "./Components/Sectiontwo/MacAir";
import IphoneElevenPro from "./Components/Sectionthree/IphoneElevenPro";
import IphoneEleven from "./Components/Sectionfour/IphoneEleven";
import TvShow from "./Components/Sectionfive/TvShow";
import AppleArcade from "./Components/Sectionsix/AppleArcade";

function App() {
  return (
    <div>
      <Header />
      <Alert />
      <IpadPro />
      <MacAir />
      <IphoneElevenPro />
      <IphoneEleven />
      <TvShow />
      <AppleArcade />
      <AppleYoutube />
      <Footer />
    </div>
  );
}

export default App;
