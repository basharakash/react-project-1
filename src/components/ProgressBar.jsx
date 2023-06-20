import Button from "./Button";
import Classes from "./styles/ProgressBar.module.css";

export default function progressBar({ next, prev, progress,submit }) {
    return (
        <div className={Classes.progressBar}>
            <div className={Classes.backButton} onClick={prev}>
                <span className="material-icons-outlined">arrow_back</span>
            </div>

            <div className={Classes.rangeArea}>
                <div className={Classes.tooltip}>{progress}% Complete!</div>
                <div className={Classes.rangeBody}>
                    <div
                        className={Classes.progress}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <Button className={Classes.next} onClick ={ progress === 100 ? submit : next}>
                <span>{progress === 100 ? "submit quize" : "Next Question" }</span>
                <span className="material-icons-outlined">arrow_forward</span>
            </Button>
        </div>
    );
}
