import Image from "../assets/images/success.png";
import Classes from "./styles/Summary.module.css";
export default function Summary({score, noq }) {
    return (
        <div className={Classes.summary}>
            <div className={Classes.point}>
                {/* progress bar will be placed hare */}

                <p className={Classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            <div className={Classes.badge}>
                <img src={Image} alt="success" />
            </div>
        </div>
    );
}
