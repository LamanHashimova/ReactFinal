
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Team.css'


function Team() {
    const [team, setTeams] = useState([]);
    const loadTeams = async () => {
    
        const result = await axios.get("api/Teams/GetAllTeams");
        setTeams(result.data)

    };
    useEffect(() => {
        window.scrollTo(0, 0);
        loadTeams();
    }, []);
  return (
    <div id="Team">
    <div className="container">
        <div className="teamAll">
            <h2>Our Team</h2>
            <p>When we take care of our employees, knowing very well, they will feel the same towards the customers and would do everything in their power to take care of them!</p>
            <div className="row">
                {team.map(team=>(
                    <div className="col-lg-3">
                    <div className="singleTeam">
                        <div className="Profile">
                        <img src={`data:image/jpeg;base64,${team.image}`} alt="" />
                            <div className="sosialMedia">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        
                        <div className="AboutTeam">
                            <h4>{team.name} {team.surname}</h4>
                            <h6>{team.position}</h6>
                        </div>
                    </div>
                    </div>
                ))}
               
           
            </div>
        </div>
    </div>
</div>
  )
}

export default Team