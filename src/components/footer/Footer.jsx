import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">

      <div className="footercontainer">

        <div className="footerone">
          <h1>Our School</h1>

          <ul>
            
            <li>Our Teachers</li>
            <li>Our BOM & PA</li>
            <li>Alumni Community</li>
            <li>Gallary</li>
            <li>School Projects</li>
            <li>Community Projects</li>
            <li>Job Vacancies</li>
          </ul>
        </div>
        <div className="footertwo">
          <h1>Academics</h1>

          <ul>
            <li>Admission</li>
            <li>KCSE Results Tabulation</li>
            <li>Fee Structure</li>
            <li>Departments</li>
            
          </ul>
        </div>
        <div className="footerthree">
          <h1>About Us</h1>
          <ul>
            <li>School History</li>
            <li>Ourdoor Activities</li>
            <li>Athletes & Soccer</li>
            <li>Facilities / Computer Lab</li>
            <li>Supporting Staff</li>
            
            
          </ul>
        </div>
        <div className="footerfour">
          <h1>Contact Us</h1>

          <p class="addressContent">
							Kionyo Road,<br/>
							Kuria East Location,<br/>
							Kionyo,<br/>
							
						</p> <br/><br/>

            <p class="addressContent"><strong>Telephone:</strong> + 254 725 xxx xxx						
						<br/><strong>Fax:</strong> + 254 754 xxx xxx</p>
						
						<br/><br/>
						
						<p class="addressContent"><strong>E-mail Address:</strong> <a href="mailto:office@kionyoss.ac.ke" title="office@kionyoss.ac.ke">office@kionyoss.ac.ke</a></p><br/>
						
						
						<h3>Get Directions</h3><br/>
						
						<p class="addressContent">For maps and directions please click this <a href="#"><i> link </i></a> for directions</p>						
						
					
        </div>
        


      </div>

      
      
    </div>
  )
}

export default Footer
