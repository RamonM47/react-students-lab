import Score from "../Score/Score";

const Student = (props) => {
    return (
        <div id="student-card">
            <div>
                <p>
                    {props.student.name}
                </p>
            </div>
            <div>

                {props.student.scores.map((score) =>
                    <Score
                        scores={score}
                    />
                )}
            </div>
        </div>
    );
}

export default Student;