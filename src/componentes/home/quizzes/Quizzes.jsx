import { ContainerQuizzes } from "./ContainerQuizzes";
import mapCity from "../../../assets/images/mapcity.jpeg"
import flags from "../../../assets/images/flags.jpeg"
import mapCountry from "../../../assets/images/mapCountry.jpeg"
import { Quiz } from "./Quizz";

export function Quizzes(){
    return(
        <ContainerQuizzes>
            <div className="box">
                <img className="banner" src={mapCity}/>
                <div className="settings">
                    <h1>How many capitals <br/> can you hit?</h1>
                    <button className="button easy">Easy</button>
                    <button className="button medium">Medium</button>
                    <button className="button hard">Hard</button>
                </div>
            </div>
            <div className="box">
                <img className="banner" src={flags}/>
                <div className="settings">
                    <h1>How many flags <br/> can you hit?</h1>
                    <button className="button easy">Easy</button>
                    <button className="button medium">Medium</button>
                    <button className="button hard">Hard</button>
                </div>
            </div>
            <div className="box">
                <img className="banner" src={mapCountry}/>
                <div className="settings">
                    <h1>How many territories <br/> can you hit?</h1>
                    <button className="button easy">Easy</button>
                    <button className="button medium">Medium</button>
                    <button className="button hard">Hard</button>
                </div>
            </div>
        </ContainerQuizzes>
    )
}