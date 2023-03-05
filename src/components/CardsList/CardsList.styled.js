import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    gap: 20px;
    justify-content: center;

    @media (min-width: 767px) {
        grid-template-columns: repeat(2, 380px);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(3, 380px);
    }
`