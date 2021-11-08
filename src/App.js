import React from "react";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/about";
import CounterSection from "./components/counter";
import Skills from "./components/skills";
import LatestWorks from "./components/latestWorks";
import JobHistory from "./components/jobHistory";
import Services from "./components/services";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <CounterSection />
      <Skills />
      <LatestWorks />
      <JobHistory />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
