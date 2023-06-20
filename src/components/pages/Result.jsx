import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import Summary from "../Summary";
import useAnswers from "../hooks/useAnswers";
import Classes from "../styles/Loading.module.css";

export default function Result() {
    const { id } = useParams();
    const { loading, error, answers } = useAnswers(id);
    const location = useLocation();
    const state = location;
    const qna = state.state;
    function calculate() {
        let score = 0;

        // if (!answers || !qna || answers.length === 0 || qna.length === 0) {
        //     return score;
        // }

        answers.forEach((question, index1) => {
            let correctIndexes = [],
                checkedIndexes = [];

            question.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score = score + 5;
            }
        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div className={Classes.dots}></div>}
            {error && <div>Error...</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis />
                </>
            )}
        </>
    );
}
