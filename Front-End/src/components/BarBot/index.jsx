import {AnswerBox, Container, SendButton, TextAreaContainer, TextBox} from "./styles";
// import {useState} from "react";
// import variables from "./variables.json";

export default function BarBot() {
    // const [answer, setAnswer] = useState('');
    // const [userInput, setUserInput] = useState(''); // Para controlar a entrada do usuário

    return (
        <Container>
            <AnswerBox
                className="answer-box"
                id="answer-box"
                placeholder="Eu sou o seu BarBot, pergunte-me como fazer um drink com o que você possui na sua casa."
                // value={answer}
                readOnly
            />
            <TextAreaContainer>
                <TextBox
                    id="text-box"
                    placeholder="Quais Bebidas você possui em casa?"
                    // value={userInput}
                    // onChange={(e) => setUserInput(e.target.value)} // Atualiza o estado da entrada do usuário
                    // onKeyDown={(e) => handleSubmit(e)}
                />
                <SendButton>
                    ↑
                </SendButton>
            </TextAreaContainer>
        </Container>
    )
}