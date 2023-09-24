

import React, { useState } from 'react';

import styled from 'styled-components';

const Container=styled.div`
 width: 100%;
 height: 100%;
display: flex;

background-color:rgb(84, 153, 199  );


 justify-content: center;
 align-items: center;

`
const Wrapper=styled.div`
 
   height: 500px;
   width: 500px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   `

const Button=styled.button`
background-color: rgb(215, 189, 226 );
border-radius: 5px;
font-size: 20px;
margin-top: 20px;
border: none;
cursor: pointer;
width: 200px;
transition: background-color 1s;

`
const OptionsWrapper=styled.div`
display: flex;
flex-direction: column;

`

const Text=styled.h3`
font-size: 30px;
`



const questions=[
    {
        questionText: "Which is India’s first super computer?",
        options :["Param8000",
                 "param80000",
                  "param800",
                   "param8"] ,
        correctOption: "Param8000",
    },
    {
        questionText: " Tsunami is a word in which language?",
        options :["Hindi",
                 "Urdu",
                 "Japanese",
                 "French"] ,
        correctOption: "Japanese",
    },
    {
    questionText: " LED stands for what?",
    options :["Light emitting Device",
              " Low emitting Diode",
              "Light electronic Diode",
             "Light Emitting Diode"] ,
    correctOption: "Light Emitting Diode",
    },
    {
        questionText: " What is part of a database that holds only one type of information?",
        options :["Report",
                  "Field",
                  "Record",
                 "File"] ,
        correctOption: "Field",
        },
        {
            questionText: 
            "'OS' computer abbreviation usually means ?",
            options :["Order of Significance",
                      " Open Software",
                      "Operating System",
                     " Optical Sensor"] ,
            correctOption: "Operating System",
            }   

];



const QuestionScreen = () => {

    const [questionNo,setQuestionNo]=useState(0);
    const [score,setScore]=useState(0);
    const [complete,setComplete]=useState(false);

    const handleClick=(option)=>{
        if(option === questions[questionNo].correctOption)
        {  
            const newScore=score+1;
           
            setScore(newScore);
          
       
        }
        if(questionNo+1 < questions.length)
        {
        setQuestionNo(oldnum=>oldnum+1)

        }
        else
        setComplete(true);
    }

   
  return (
    <Container>
        { complete
         ? <Wrapper>
             <Text>
                Your score is {score} / {questions.length}
             </Text>
         </Wrapper>

         


         :(<Wrapper>
            <Text>
                {questions[questionNo].questionText}
            </Text>
            <OptionsWrapper>
                {questions[questionNo].options.map(item=>{
                    return <Button onClick={()=>handleClick(item)}>{item}</Button>
                })}
            </OptionsWrapper>
    
      </Wrapper>) 
          
        }           
        
      </Container>
  )
}

export default QuestionScreen
