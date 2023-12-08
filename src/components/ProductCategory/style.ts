import styled from "styled-components";

interface Border{
    borderColor?: boolean;
}

export const ContainerProductCategory = styled.div<Border> `
    border-radius: 4px;
    border: 3.5px solid ${props => props.borderColor ? 'red' : '#1EBB90'};
`

export const ProductCategoryText = styled.span `
    font-size: 12px;
    color: #000;
    padding: .5px 14px;
`