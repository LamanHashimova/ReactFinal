import React from 'react'
import './Team.css'

function Team() {
  return (
    <div id="Team">
    <div className="container">
        <div className="teamAll">
            <h2>Our Team</h2>
            <p>When we take care of our employees, knowing very well, they will feel the same towards the customers and would do everything in their power to take care of them!</p>
            <div className="row">
                <div className="col-lg-3">
                    <div className="singleTeam">
                        <div className="Profile">
                            <img src="/assets/Images/team1_800x.jpg" alt=""/>
                            <div className="sosialMedia">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        
                        <div className="AboutTeam">
                            <h4>Mable Barton</h4>
                            <h6>Fashion Designer</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="singleTeam">
                        <div className="Profile">
                            <img src="/assets/Images/team-4_800x.webp" alt=""/>
                            <div className="sosialMedia">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                       
                        <div className="AboutTeam">
                            <h4>Mandy Payne</h4>
                            <h6>Human Resources</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="singleTeam">
                        <div className="Profile">
                            <img src="/assets/Images/team2_800x.jpg" alt=""/>
                            <div className="sosialMedia">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        
                        <div className="AboutTeam">
                            <h4>Janice Kim</h4>
                            <h6>Front Office Manager</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="singleTeam">
                        <div className="Profile">
                            <img src="/assets/Images/team3_800x.webp" alt=""/>
                            <div className="sosialMedia">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                     
                        <div className="AboutTeam">
                            <h4>Willie Fuller</h4>
                            <h6>Design Analyst</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team