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
    justify-content: space-between;


    img {
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

`;

export const TitleContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    margin: 10px 0 20px 0;
    border-left: 3px solid #0C2D48;
    
    h1 {
        color: #0C2D48;
        margin-left: 20px;
    }
`;

export const TextSupport = styled.span`
    font-size: 18px;
    color: #0C2D48;
`;

export const DescriptionContainer = styled.div`
    margin: 10px 0 20px 0;
    border-left: 3px solid #0C2D48;
    
    p {
        font-size: 22px;
        color: #0C2D48;
        margin-left: 20px;
        text-align: left;
    }
`;

export const StatusCircle = styled.div`
    display: flex;

    div.circle-status {
        width: 20px;
        height: 20px;
        
        border-radius: 20px;
        background: #D6FCAD;
    }

    p {
        font-size: 18px;
        font-weight: 700;
        color: #D6FCAD;
        margin-left: 10px;
    }
`;