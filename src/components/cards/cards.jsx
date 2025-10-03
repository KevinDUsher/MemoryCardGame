import noimage from '../../assets/noimage.png';

function Card({source = "../../assets/noimage.png",text = "No Text Named", clickMethod = () => {}}){
    return (
        <div className="Card" onClick={clickMethod}>
            <div className="cardImageContainer">
                <img src={source} alt="" className="cardImage" />
            </div>
            <div className="bottomText">{text}</div>
        </div>
    );
}

function CardsDisplay({cardSources = [{id: "noimage" ,source : noimage, text: "No Text Named"}], clickMethod = () => {}}){
    let tempArray = [...cardSources];
    let cardArray = [];
    while(tempArray.length > 0){
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        cardArray.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }
    return (
        <div className="CardsDisplay">
            {cardArray.map(({id , source, text}) => {
                    return <Card key = {id ?? source} source = {source} text = {text} clickMethod={() => clickMethod(id)}  />
                })
            }
        </div>
    );
}

export default CardsDisplay;