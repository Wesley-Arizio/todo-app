import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.4);
    padding: 50px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`; 

export const Modal = styled.main`
    max-width: 800px;
    max-height: 600px;

    overflow-y: scroll ;

    border-radius: 15px;
    background: #fff;
    padding: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`; 

export const ContainerButtonClose = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: flex-end;


    img {
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: #000;
`; 

export const Label = styled.label`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    color: #000;
    margin-top: 10px;

    input {
        width: 100%;
        height: 40px;
        padding: 10px 20px;
        border: 1px solid #000;
        border-radius: 20px;
        color: #000;
        margin-top: 10px;
    }

    textarea {
        min-width: 100%;
        max-width: 70%;

        min-height: 40px;
        height: 120px;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        color: black;
        margin-top: 20px;
        border: 1px solid #000;
    }
`;

export const ContainerStatus = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 20px;
    padding: 10px;

    label {

        display: flex;
        align-items: center;
        
        span {
        color: #000;
            margin-left: 10px;
        }

        input {
            width: 20px;
            height: 20px;
            margin: 10px 0px;
        }
    }
`;


export const Button = styled.button`
    width: 100%;
    height: 37px;
            
    border-radius: 5px;
    background: #93E21B;
    border: none;
    margin-left: 10px;

    cursor: pointer; 
            
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 18px;
 
    margin-top: 20px;
`