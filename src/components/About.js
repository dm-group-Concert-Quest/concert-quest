import React from "react";
import yeet from "./images/yeet.jpeg";
import noelSwag from "./images/noelSwag.jpeg";
import treySwag from "./images/treySwag.jpeg";
import githubIcon from "./images/githubIcon.png";
import linkedinIcon from "./images/linkedinIcon.jpg";
import portfolioIcon from "./images/portfolioIcon.png";

export default function About() {
  return (
    <section>
      <div className="theTeamContainer">
        <h1 className="theTeam">The Team</h1>
      </div>
      <div className="teamContainer">
        <div className="noelDiv">
          <img
            className="noelAboutPic"
            align="middle"
            src={noelSwag}
            alt="noelProfPic"
          />
          <h1 className="noelTitle">Noel</h1>
          <h3 className='member-title'>Gatekeeper Of API</h3>
          <p className="noelParagraph">
            When not working on a project or not learning another library/framework,
            I like to listen to music, watch YouTube videos of anything that looks
            interesting, play video games, and watch the latest movie showing in theaters.
            Creating user-friendly, fully functional applications users enjoy makes me love
            what I do and motivates me to be better. Please click on the links to learn more
            about myself and feel free to reach out to me anytime!
          </p>
          <div className="linksDiv">
            <a href="https://github.com/noelncontreras">
              <img className="githubIcon" src={githubIcon} alt="github" />
            </a>
            <a href="https://noelncontrerasportfolio.space">
              <img
                className="portfolioIcon"
                src={portfolioIcon}
                alt="portfolio"
              />
            </a>
            <a href="https://www.linkedin.com/in/noelncontreras/">
              <img className="linkedinIcon" src={linkedinIcon} alt="linkedin" />
            </a>
          </div>
        </div>

        <div className="madelynDiv">
          <img
            className="madelynAboutPic"
            align="top"
            src={yeet}
            alt="madelynProfPic"
          />
          <h1 className="madelynTitle">Madelyn</h1>
          <h3 className='member-title'>Style Slinger</h3>
          <p className="madelynParagraph">
          </p>
          <div className="linksDiv">
            <a href="https://github.com/madelynarsenault">
              <img className="githubIcon" src={githubIcon} alt="github" />
            </a>
            <a href="https://madelyna.com">
              <img
                className="portfolioIcon"
                src={portfolioIcon}
                alt="portfolio"
              />
            </a>
            <a href="https://www.linkedin.com/in/madelyna/">
              <img className="linkedinIcon" src={linkedinIcon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="treyDiv">
          <img className="treyAboutPic" src={treySwag} alt="treyProfPic" />
          <h1 className="treyTitle">Trey</h1>
          <h3 className='member-title'>Javascript Wizard</h3>
          <p className="treyParagraph">
            I'm very passionate about programming, music, skateboarding and video games. 
            When I'm not doing one of those things, I'm more than likely doing the other.
            My favorite language so far is Javascript, I love exploring new genres of music and new artists, but I mainly 
            listen to a lot of different kinds of punk rock,
            I mostly enjoy skating ramps and bowls, and my favorite game of all time is Fallout 3.
          </p>
          <div className="linksDiv">
            <a href="https://github.com/Tlwaller">
              <img className="githubIcon" src={githubIcon} alt="github" />
            </a>
            <a href="https://madelyna.com">
              <img
                className="portfolioIcon"
                src={portfolioIcon}
                alt="portfolio"
              />
            </a>
            <a href="https://www.linkedin.com/in/trey-waller-07a69a17a/">
              <img className="linkedinIcon" src={linkedinIcon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};