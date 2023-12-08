import styled from "styled-components";

interface Border{
    borderColor?: boolean;
}

// Header

export const ContainerHeader = styled.div `
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
}
`

export const HeaderIcon = styled.div `
    font-size: 20px;
    color: white;
`

export const HeaderTitle = styled.span `
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: white;
    letter-spacing: 1px;
    margin: auto;
`

// List Products

export const ContainerListProductsCategory =  styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    max-width: 360px;
    margin: auto;
    padding: 8px 0;
`

// Product Category

export const ContainerProductCategory = styled.div<Border> `
    border-radius: 4px;
    border: 3.5px solid ${props => props.borderColor ? 'red' : '#1EBB90'};
`

export const ProductCategoryText = styled.span `
    font-size: 12px;
    color: #000;
    padding: .5px 14px;
`

// List Products Cards

export const ContainerListProductsCard = styled.div `
    width: 360px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    margin: auto;
`

// Footer

export const ContainerAlignFooter = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerFooter = styled.div `
    display: flex;
    justify-content: center;
    gap: 5px;
    position: fixed;
    bottom: 0;
    width: 360px;
    background-color: #1EBB90;
`

export const ContainerFooterMargin = styled.div `
    display: flex;
    width: 310px;
    margin: 0 20px;
    justify-content: flex-end;
    align-items: center;
    padding: 11px 0;
    gap: 15px;
`

export const ContainerFooterText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterTextBorder = styled.span `
    font-size: 16px;
    color: white;
    border-bottom: 1px solid white;
`

export const FooterText = styled.span `
    font-size: 16px;
    color: white;
`

export const ContainerFooterIcon = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid;
    background: red;
`

export const FooterIcon = styled.div `
    font-size: 18px;
    color: white;
`