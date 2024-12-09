import { useState } from "react";
import axios from "axios";
import { AnswerBox, Container, SendButton, TextAreaContainer, TextBox } from "./styles";

export default function BarBot() {
    const [answer, setAnswer] = useState(""); // Para exibir a resposta do bot
    const [userInput, setUserInput] = useState(""); // Para controlar a entrada do usuário
    const [loading, setLoading] = useState(false); // Para indicar o carregamento da resposta

    // Palavras-chave relacionadas a bebidas
    const keywords = [
        "whisky", "vodka", "gin", "cachaça", "rum", "tequila", "cerveja", "vinho",
        "champagne", "licor", "martini", "brandy", "cognac", "absinto", "sake",
        "aguardente", "conhaque", "mojito", "margarita", "caipirinha", "sangria",
        "piña colada", "amaretto", "schnapps", "bourbon", "mezcal", "vermouth", "sherry", "porto", "prosecco", "kahlua", "aperol", "campari",
        "limão", "lima", "laranja", "abacaxi", "maracujá", "hortelã", "manjericão", "gengibre", 
        "pepino", "açúcar", "mel", "xarope de açúcar", "água com gás", "água tônica", 
        "refrigerante de limão", "refrigerante de cola", "suco de cranberry", "suco de tomate",
        "negroni", "old fashioned", "cosmopolitan", "bloody mary", "aperol spritz", 
        "long island iced tea", "dry martini", "sex on the beach", "white russian", 
        "mai tai", "mimosa", "manhattan", "daiquiri",
        "gelo", "canela", "café", "chocolate", "creme de leite", "chantilly", "baunilha", 
        "coco", "leite condensado", "hortelã-pimenta", "pimenta-do-reino"
    ];
    

    // Configuração do cliente axios
    const client = axios.create({
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`, // Substitua pela sua chave de API
            "Content-Type": "application/json",
        },
    });

    const handleSend = async () => {
        if (!userInput.trim()) return; // Não envia se o input estiver vazio
        const messageText = userInput.toLowerCase();

        // Verifica se a mensagem contém alguma palavra-chave
        if (!keywords.some((keyword) => messageText.includes(keyword))) {
            setAnswer("Eu sou o seu BarBot! Pergunte-me como fazer um drink com os ingredientes que você possui em casa.");
            setUserInput(""); // Limpa o campo de entrada
            return;
        }

        setLoading(true); // Ativa o estado de carregamento
        try {
            const params = {
                model: "gpt-3.5-turbo-instruct", // Altere o modelo conforme necessário
                prompt: `Eu tenho os seguintes ingredientes disponíveis: ${messageText}. Baseado nesses ingredientes, me sugira até 3 drinks criativos que eu possa preparar. Para cada drink, inclua:
                1. O nome do drink.
                2. A lista de ingredientes necessária.
                3. Instruções claras e passo a passo de como preparar.
                4. Uma breve história ou curiosidade interessante sobre o drink, ou sua inspiração.
                Se possível, adapte os drinks ao meu contexto para torná-los únicos e acessíveis.`,
                max_tokens: 800,
                temperature: 0.7,
            };

            const response = await client.post("https://api.openai.com/v1/completions", params);
            setAnswer(response.data.choices[0].text.trim()); // Atualiza a resposta
        } catch (error) {
            console.error("Erro ao chamar a API OpenAI:", error);
            setAnswer("Desculpe, não consegui gerar uma resposta no momento.");
        } finally {
            setLoading(false); // Finaliza o estado de carregamento
            setUserInput(""); // Limpa a entrada do usuário
        }
    };

    return (
        <Container>
            <AnswerBox
                className="answer-box"
                id="answer-box"
                value={loading ? "Carregando..." : answer}
                placeholder="Eu sou o seu BarBot, pergunte-me como fazer um drink com o que você possui na sua casa."
                readOnly
            />
            <TextAreaContainer>
                <TextBox
                    id="text-box"
                    placeholder="Quais bebidas você possui em casa?"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)} // Atualiza o estado com o input do usuário
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault(); // Evita nova linha ao pressionar Enter
                            handleSend();
                        }
                    }}
                />
                <SendButton onClick={handleSend}>
                    ↑
                </SendButton>
            </TextAreaContainer>
        </Container>
    );
}
