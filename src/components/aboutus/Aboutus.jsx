import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutuscontainer">
        <div className="aboutustitlte">
          <h1>About Us</h1>
        </div>

        <div className="aboutuscontents">
          <div className="aboutusleft">
            <p>It is a story about the future.</p>
            <p>Nobody really believed that in a span of only two years, Kionyo Secondary School could become what it is today.</p>
             <p>We have grown from bounds to bounds</p>

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, beatae dolor? Temporibus exercitationem illum adipisci eaque magni quas. Id, rem facere distinctio voluptatem repellat recusandae reiciendis dolorem soluta voluptates est.</p>
            <h1></h1>
          </div>
          <div className="aboutusright">
            <img src="./studentslab.png" alt="studentinlab" className="studentinlabimg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
