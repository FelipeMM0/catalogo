import styled from "styled-components"

interface ContainerMarginDefaultProps{
    $background?: string;
    $zIndex? : string;
}

export const Container = styled.div<ContainerMarginDefaultProps> `
    display:  flex;
    justify-content: center;
    width:360px;
    background:${props => props.$background || '#698A98'};
    margin: auto;
    position: relative;
    z-index: ${props => props.$zIndex ? props.$zIndex : ''};
`