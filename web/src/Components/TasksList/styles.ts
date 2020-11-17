import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    height: 100%;
    max-height: 50vh;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &::-webkit-scrollbar {
        display: none;
    }
`;



// Done => #D6FCAD
// To Do => #FFCFAE
// Doing => #FEEFA7
