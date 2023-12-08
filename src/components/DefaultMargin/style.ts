import styled from "styled-components";

interface DefaultMarginProps{
    $padding1?: string;
    $padding2?: string;
    $border?: boolean;
    $borderColor?: string;
    $borderSize?: string;
}

export const Container = styled.div<DefaultMarginProps> `
    width: 310px;
    margin: 0 20px;
    padding: ${props => props.$padding1 ? `${props.$padding1} 0 0 0` : props.$padding2 ? `${props.$padding2} 0` : '0'};
    display: flex;
    align-items: center;
    border-bottom: ${props => props.$border ? `${props.$borderSize || '1px'} solid ${props.$borderColor || 'black'}` : 'none'};
`