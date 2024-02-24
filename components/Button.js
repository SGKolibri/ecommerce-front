import styled, { css } from "styled-components"

const StyledButton = styled.button`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    border-radius: 5px;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    svg {
        height: 16px;
        margin-right: 5px;
    }

    ${props => props.white && !props.outlined && css`
        background-color: #fff;
        color: #000;
    
    `}

    ${props => props.white && props.outlined && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}

    ${props => props.primary && css`
        background-color: #5542f6;
        border: 1px solid #5542f6;
        color: #fff;
    `}   

    ${props => props.size === 'l' && css`
        padding: 10px 20px;
        font-size: 1.2rem;
        svg {
            height: 20px;
        }
    `}
`;

export default function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}