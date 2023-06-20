import Classes from "./styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange }) {
    return (
        <div className={Classes.answers}>
            {options.map((option, index) => (
                <Checkbox
                    className={Classes.answer}
                    text={option.title}
                    value={index}
                    key={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                />
            ))}
        </div>
    );
}
