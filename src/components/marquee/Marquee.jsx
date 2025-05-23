import "./Marquee.css";

const Marquee = () => {
  return (
    <div className="marqueemain">
      <div className="marqueecontainer">
        <div className="marqueetitle">
          <h1>Announcements</h1>
        </div>
        <div id="marquee_right">
          <marquee
            id="scroll_ads"
            bahavior="scroll"
            direction="left"
            height="100%"
            scrollamount="4"
            align="right"
            className="hover"
          >
            <div className="ads"
              // onMouseOver="document.getElementById('scroll_ads').stop();"
              // onMouseOut="document.getElementById('scroll_ads').start();"
            >
              <a href="newenrolls.php">
                Exam time - table - Click to read more. 
              </a>
              <a href="">|</a>
              <a href="newenrolls.php">
                New enrollments - Click to read more. 
              </a>
              <a href="">|</a>
              <a href="examresults.php">Exam Results - Click to read more. </a>
              <a href="">|</a>
              <a href="serengetitour.php">
                Upcoimg Serengeti-Tour - Click to read more.
              </a>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
