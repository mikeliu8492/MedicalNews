import React from 'react';


import "./About.css";
import mainLogo from'../../images/mnt-logo.png';

const About = () => {
        return(
            <div className="container about-card p-5">
                <div className="text-center">
                    <h1>About This Site</h1>
                </div>
                <div>
                    <img src={mainLogo} className="about-photo" alt="medical news today logo"></img>
                </div>
                <section>
                    <p>
                        This page serves as a third-party subscription service of <span><a href="https://www.medicalnewstoday.com/">Medical News Today</a></span> by consuming its API
                        and allowing authenticated users to subscribe to a weekly email news feed.  Users will be allowed to select up to a maximum of 5 distinct topics to subscribe to;
                        the weekly mail feed usually will arrive on Sunday evening.
                    </p>
                    <br/>
                    <p className="text-danger"><b>E-mail subscription functionality not implemented yet.  You can preview result on the "Edit Subscription" page.</b></p>
                </section>

                <div className="p-2 m-5">

                </div>
                <div className="text-center">
                    <h1>About the Creator</h1>
                </div>
                <div>
                    <img src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/19702184_10101372698303445_801271169083222058_n.jpg?_nc_cat=110&_nc_ht=scontent-msp1-1.xx&oh=3c6184abbc2b98484826a86fdfefb511&oe=5CCAFAAA" style={{maxWidth: "20%", display: "block", margin: "0 auto"}}alt="medical news today logo"></img>                    
                </div>
                <br/>
                <section>
                    <p>
                        Mike Liu, the creator of this page, is a CS @ UIUC Alum and a current Software Developer on EpicCare Ambulatory at Epic.  
                        To find out more, please see his <span><a href="https://mikeliu8492.herokuapp.com/">personal website</a></span>.
                    </p>
                </section>



            </div>
        )
    
}

export default About;