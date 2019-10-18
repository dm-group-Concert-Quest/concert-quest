import React from "react";


class About extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <section>
                <div className="theTeamContainer">
            <h1 className="theTeam">The Team</h1>
            </div>
            <div className="teamContainer">
                <div>
                    <img className="noelAboutPic" align="middle" src="https://files.slack.com/files-pri/T039C2PUY-FPMDBD1P0/noelswag.jpeg"/>
                    <h1 className="noelTitle">Noel</h1>
                    <p className="noelParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                         sequi nesciunt.</p>

                </div>
                <div>
                    <img className="madelynAboutPic" align="top" src="https://files.slack.com/files-pri/T039C2PUY-FP7NQ9KQB/yeet.jpeg"/>
                    <h1 className="madelynTitle">Madelyn</h1>
                    <p className="madelynParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                         sequi nesciunt.</p>

                </div>
                <div>
                    <img className="treyAboutPic" src="https://files.slack.com/files-pri/T039C2PUY-FPCPQNJG1/treyswag.jpeg"/>
                    <h1 className="treyTitle">Trey</h1>
                    <p className="treyParagraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                         sequi nesciunt.</p>
                </div>

            </div>
            </section>
        )
    }
}

export default About;