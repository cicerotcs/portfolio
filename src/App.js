import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, SocialMedia } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Navbar />
      <SocialMedia />
      <main>
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
