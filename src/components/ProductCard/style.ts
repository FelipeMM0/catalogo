import styled from "styled-components";

interface ProductCardProps{
    selected?: boolean;
    $allProducts?: boolean;
}

export const ContainerProductCard = styled.div<ProductCardProps> `
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 152px;
    border: 1px solid #000;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: ${props => props.selected ? '0  2px 7px .1px red' : 'none'}
`
export const ContainerProductCardHeader = styled.div<ProductCardProps> `
    width: 100%;
    padding: 2px 5px 0 5px;
    background:  ${props => props.$allProducts ? 'gray' : props.selected ? 'red' : '#1EBB90'};
    text-align: center;
    box-sizing: border-box;
`

export const ProductCardHeaderText = styled.span<ProductCardProps> `
    color: white;
    font-size: 15px;
    font-weight: ${props => props.$allProducts ? '600' : 'normal'};
`

export const ProductCardImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`