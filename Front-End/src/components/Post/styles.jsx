import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ModalContent = styled.div`
  position: fixed;
  top: calc(50vh - 25%);
  left: calc(50vw - 25%);
  width: 50%;
  height: 32%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  

  > div {
    background-color: #333;
    border-radius: 8px;
    max-width: 700px;
    max-height: 80vh;
    overflow-y: auto;
    padding: 10px;
    box-shadow: 0 0 15px rgba(51, 51, 51, 0.8);
    color: white;
    text-align: center;
  }
  .close-button {
    position: absolute; /* Posiciona o botão em relação ao modal */
    top: -50px;          /* Ajusta a distância do topo */
    left: 10px;         /* Ajusta a distância da lateral esquerda */
    background: none;   /* Remove o fundo padrão */
    border: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;        /* Garante que o botão fique acima de outros elementos */
    transition: color 0.2s ease;

    &:hover {
      color: #8f32cc;   /* Muda a cor no hover para indicar interatividade */
    }
`;

export const NewPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  

  h1 {
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    
  }

  input[type='file'] {
    margin-bottom: 10px;
    border: 0;
    font-family: "Oswald", sans-serif;
  }
  


  textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
    padding: 10px;
    resize: none;
    border: 1px solid #555;
    border-radius: 5px;
    background-color: #222;
    color: white;
    font-size: 16px;
  }

  button {
    background-color: #a83eff;
    color: #fff;
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  button {
    &:hover {
      background-color: #8f32cc;
    }
  }
`;
