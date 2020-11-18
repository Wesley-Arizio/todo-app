import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        width: 80%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        color: black;
    }

    textarea {
        min-width: 100%;
        max-width: 100%;
        min-height: 40px;
        height: 120px;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        color: black;
        margin-top: 20px;
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

export const ContainerStatus = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 20px;


    label {

        display: flex;
        align-items: center;
        
        span {
            margin-left: 10px;
        }

        input {
            width: 20px;
            height: 20px;
            margin: 10px 0px;
        }
    }
`;

export const Title = styled.h1`
    width: 100%;
    margin: 10px 0;
    text-align: left;
`;