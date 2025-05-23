import "./Home.css"
import HeroSection from "../../components/herosection/HeroSection";
import Marquee from "../../components/marquee/Marquee";
import SchoolHistory from "../schoolhistory/SchoolHistory";
import Aboutus from "../../components/aboutus/Aboutus";
import Departments from "../../components/departments/Departments";
import ActionSection from "../../components/actionsection/ActionSection";
import Footer from "../../components/footer/Footer";
import MapSchool from "../../components/maptoschool/MapSchool";
import Copyright from "../../components/copyright/Copyright";


const Home = () => {
  return (
    <div>
      <HeroSection />

      <Marquee />

     

      <div className="schoolhistorycontainer">

      <div className="schoolhistory">
        <div className="schoolhistoryleft">
          <img src="./principal.png" alt="principal" className="principalimg" />
        </div>
        <div className="schoolhistoryright">
          <div className="historytitle">
            <h1>Message from the principal</h1>

            <p>
              kionyo Secondary School was incepted in 
              the year 2022. SInce then, it has emerged as one of the academic giants in Kuria....
            </p>
          </div>
        </div>
      </div>

      </div>

      <Aboutus />

      <Departments />

      <ActionSection />

      <MapSchool />

      <Footer />

      <Copyright />


    </div>
  );
};

export default Home;
