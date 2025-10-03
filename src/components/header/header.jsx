function Score({score = 0, classList = "score", text = "noText"}){
    return (<div className = {classList}> 
        {text + score}
    </div>);
}

function Header({ headerClass = "HeaderClass",currentScore = 0 ,classOne = "CurrentScore", bestScore = 0, classTwo = "BestScore"}){
    return (
        <div className = {headerClass}>
            <Score score = {currentScore} classList = {classOne} text = {"Current Score: "}/>
            <Score score = {bestScore} classList = {classTwo} text = {"Best Score: "}/>
        </div>
    );
}

export default Header;