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
          <p className="noelParagraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <div className="linksDiv">
            <a href="https://github.com/noelncontreras">
              <img className="githubIcon" src={githubIcon} alt="github" />
            </a>
            <a href="https://madelyna.com">
              <img
                className="portfolioIcon"
                src={portfolioIcon}
                alt="portfolio"
              />
            </a>
            <a href="https://www.linkedin.com/in/noelncontreras/">
              <img
                className="linkedinIcon"
                src={linkedinIcon}
                alt="linkedin"
              />
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
          <p className="madelynParagraph">
            {" "}
            swag money swag money. i love swag money swag money. money of the
            swag is the swaggiest money that i could dream of. get this bread
            swag money!
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
              <img
                className="linkedinIcon"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div className="treyDiv">
          <img className="treyAboutPic" src={treySwag} alt="treyProfPic" />
          <h1 className="treyTitle">Trey</h1>
          <p className="treyParagraph">
            Configured BandsInTown API, lots of styling, including mobile view
            responsiveness.
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
              <img
                className="linkedinIcon"
                src={linkedinIcon}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};