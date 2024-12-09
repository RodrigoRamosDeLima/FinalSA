# **Backend - Liquid**

## **Descrição**

O backend do Liquid gerencia autenticação de usuários, operações CRUD e a integração com o BarBot para geração de receitas de drinks.

---

## **Funcionalidades do Backend**

- Autenticação com JWT para segurança.
- CRUD completo para postagens e usuários.
- Integração com a API do ChatGPT para funcionalidade do BarBot.
- Documentação dos endpoints com **Swagger**.

---

## **Tecnologias Utilizadas**

- **Spring Boot**: Framework para criação de APIs REST.
- **Node.js**: Gerenciamento da API do ChatGPT.
- **PostgreSQL**: Banco de dados relacional.

---

## **Como Configurar e Executar o Backend**

### **Pré-requisitos**

- **Java 17+** e **Maven**.
- **PostgreSQL**.

### **Passos**

1. Navegue até o diretório `backend`:
    cd backend

2. Configure o arquivo `application.properties`:
    spring.datasource.url=jdbc:postgresql://localhost:5432/liquid
    spring.datasource.username=SEU_USUARIO
    spring.datasource.password=SUA_SENHA
      
3. Configure a chave da API do ChatGPT em um arquivo `.env`:
    OPENAI_API_KEY=SUA_CHAVE_API
  
4. Execute o servidor:
     mvn spring-boot:run
    
5. O backend estará disponível em `http://localhost:8080`.

---

## **Estrutura do Diretório**

- **/src/main/java**: Código principal.
- **/src/main/resources**: Configurações e scripts SQL.
- **/src/test/java**: Testes automatizados.

---

## **Dependências**

- Spring Boot Starter Web.
- Spring Boot Starter Security.
- JWT.
- PostgreSQL Driver.

---



Adicione prints do Swagger para ilustrar:

- Lista de endpoints.
- Exemplo de requisição e resposta.
