import "./Home.css";
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

      <div className="schoolhistory">
        <div className="schoolhistorycontainer">
          <div className="schoolhistorycontent">
            <div className="schoolhistoryleft">
              <img
                src="./principal.png"
                alt="principal"
                className="principalimg"
              />
            </div>
            <div className="schoolhistoryright">
              <div className="historytitle">
                <h1>Message from the principal</h1>

                <p>
                  kionyo Secondary School was incepted in the year 2022. SInce
                  then, it has emerged as one of the academic giants in
                  Kuria....
                </p>

                <br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit quibusdam enim animi quidem. Voluptates natus quod aspernatur iure laborum ab aperiam nesciunt repellat sapiente! Inventore maiores perferendis illum cum?</p>
                 <br />

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit quibusdam enim animi quidem. Voluptates natus quod aspernatur iure laborum ab aperiam nesciunt repellat sapiente! Inventore maiores perferendis illum cum?</p>
                 <br />
                <span>
                  Welcome! Asante sana.
                </span>
              </div>
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
