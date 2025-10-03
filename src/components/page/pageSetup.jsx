import Header from '../header/header.jsx'
import CardsDisplay from '../cards/cards.jsx'
import img1 from '../../assets/image1.gif';
import img2 from '../../assets/image2.gif';
import img3 from '../../assets/image3.gif';
import img4 from '../../assets/image4.gif';
import img5 from '../../assets/image5.gif';
import img6 from '../../assets/image6.gif';
import img7 from '../../assets/image7.gif';
import img8 from '../../assets/image8.gif';
import img9 from '../../assets/image9.gif';
import img10 from '../../assets/image10.gif';
import img11 from '../../assets/image11.gif';
import img12 from '../../assets/image12.gif';
import '../css/MemoryCardGame.css'
import { useState } from 'react'


function LoadPage(){
    const [images, setImages] = useState(() => {
        let tempArray = [];
        tempArray.push("I think, therefore I am");
        tempArray.push("History will be kind to me for I intend to write it");
        tempArray.push("A wise person is known by the quality of questions they ask. A fool is known by the quality of answers they give");
        tempArray.push("Always forgive your enemies; nothing annoys them so much");
        tempArray.push("If you are going through hell, keep going");
        tempArray.push("Opportunities don't happen, you create them");
        tempArray.push("There is nothing brilliant nor outstanding in my record, except perhaps this one thing: I do the things that I believe ought to be done");
        tempArray.push("People do what they hate for money and use the money to do what they love");
        tempArray.push("The only people you owe your loyalty to are those who never made you question theirs");
        tempArray.push("It is never too late to be what you might have been");
        tempArray.push("A clever person solves a problem. A wise person avoids it");
        tempArray.push("Nothing can fool the Wise. Nothing can school the foolish");
        let quotes = [];
        while(tempArray.length > 0){
            let randomIndex = Math.floor(Math.random() * tempArray.length);
            quotes.push(tempArray[randomIndex]);
            tempArray.splice(randomIndex, 1);
        }
        let initialImages = [{id : "img1", source: img1, text : quotes[0], clicked: false},
            {id : "img2", source : img2, text : quotes[1], clicked: false},
            {id : "img3", source : img3, text : quotes[2], clicked: false},
            {id : "img4", source : img4, text : quotes[3], clicked: false},
            {id : "img5", source : img5, text : quotes[4], clicked: false},
            {id : "img6", source : img6, text : quotes[5], clicked: false},
            {id : "img7", source : img7, text : quotes[6], clicked: false},
            {id : "img8", source : img8, text : quotes[7], clicked: false},
            {id : "img9", source : img9, text : quotes[8], clicked: false},
            {id : "img10", source : img10, text : quotes[9], clicked: false},
            {id : "img11", source : img11, text : quotes[10], clicked: false},
            {id : "img12", source : img12, text : quotes[11], clicked: false}
        ];
        return initialImages;
    });
    const [scores, setScores] = useState({currectScore: 0, topScore: 0});

    const cardClicked = (id) => {
        let clickedIndex;
        let currectScore = scores.currectScore;
        let topScore = scores.topScore;
        let updateArray = [...images];
        let allClicked = 0;
        for(let i = 0; i < updateArray.length; i++){
            if(id == updateArray[i].id){
                clickedIndex = i;
            }
            if(updateArray[i].clicked == true){
                allClicked++;
            }
        }
        if(updateArray[clickedIndex].clicked == false){
            allClicked++;
            updateArray[clickedIndex].clicked = true;
            currectScore++;
            if(currectScore > topScore){
                topScore = currectScore;
            }
            if(allClicked >= updateArray.length){
                for(let i = 0; i < updateArray.length; i++){
                    updateArray[i].clicked = false;
                }
                currectScore = 0;
            }
        }
        else{
            for(let i = 0; i < updateArray.length; i++){
                updateArray[i].clicked = false;
            }
            currectScore = 0;
        }
        setImages(updateArray);
        setScores({currectScore: currectScore, topScore: topScore});
    };

    return (
        <div className="MemoryCardGame">
            <Header currentScore = {scores.currectScore} bestScore = {scores.topScore} />
            <CardsDisplay cardSources = {images} clickMethod = {cardClicked}/>
        </div>
    );
}

export default LoadPage;