import Question from "./Question"
import Classes from "./styles/Analysis.module.css"

export default function Analysis() {
    return (
        <div className={Classes.analysis}>
            <h1>Question analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>
            <Question/>
        </div>
    );
}
