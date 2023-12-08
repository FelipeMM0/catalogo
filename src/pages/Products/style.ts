import styled from "styled-components";

interface ProductRefPriceProps{
    size?: string; 
};



// Header

export const ContainerHeader = styled.div `
    display: flex;
    gap: 10px;
    align-items: center;
    margin:auto;
`

export const ContainerContent = styled.div `
    width: 141px;
    border-radius: 5px;
    background-color: white;
`

export const Content = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    color: #809CAA;
    padding: 1px 3px;
`

export const HeaderIcon = styled.div `
    color: white;
    font-size: 25px;
`

export const ContentText = styled.span `
    color: inherit;
    font-size: 15px;
    font-weight: 600;
`

// Product Images


export const ContainerProductImage = styled.div `
    display: flex;
    justify-content:center;
    width: 100%;
    height: 424px;
    position: relative;
    overflow: hidden;
`

export const ContainerArrows = styled.div `
    width:100%;
    position: absolute;
    bottom: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img `
    width:100%;
    object-fit: contain;
    border-bottom: 2.5px solid #809CAA;
`

// Product Actions

export const ContainerProductActions = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// Product Info

export const ContainerImages = styled.div `
    display: flex;
    align-items: center;
    gap: 5px;
`
export const BoxImages = styled.div `
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    width: 40px;
    height: 46px;
`

export const Images = styled.img `
    border: 1px solid #809CAA;
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const ContainerProductInfo = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
`

export const Product = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px
`

export const ProductRefPrice = styled.span<ProductRefPriceProps> `
    font-size: ${props => props.size || '18px'};
    color: #024650;
    font-family: 'Roboto', sans-serif;
`

export const ProductRefPriceText = styled.span `
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    color: #001A1E;

`

export const ProductTitle = styled.span `
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #809CAA
`

// All Products

export const ContainerAlignAllProducts = styled.div `
    width: 360px;
    height: 100%;
    max-height: 424px;
    position: absolute;
    top: 2px;
    left: 0;
    background: white;
    border: 1px solid;
    box-shadow: 0 0 3px 0.1px;
    box-sizing: border-box;
    overflow-y: scroll;
    padding: 4px 0 4px 4px;
`

export const ContainerAllProducts = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 7px;
`

export const ContainerImage = styled.div `
    max-height: 124px;
`

// Pop Up Search

export const ContainerSearchPopUpBoxBlack = styled.div `
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .2);
    padding-top: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    z-index: 99;
`

export const ContainerSearchPopUp = styled.div `
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 300px;
    padding: 8px 13px 17px 13px;
    background: white;
    box-shadow: 0 1px 7.5px 0px;
    border-radius: 1px;
    position: relative;
`

export const SearchPopUpHeader = styled.div `
    display: flex;
    align-items: center;
`

export const SearchPopUpHeaderTitle = styled.h4 `
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    color: black;
    font-weight: 400;
`

export const SearchPopUpHeaderIcon = styled.div `
    position: absolute;
    right: 0;
    font-size: 22px;
`

export const ContainerSearchPopUpContent = styled.div `
    display: flex;
    align-items: flex-end;
    gap: 4px;
`

export const SearchPopUpContentInput = styled.input `
    width: 79%;
    border: none;
    outline: none;
    border-bottom: 1px solid #A9A9A9;
`

export const ContainerSearchPopUpContentIcon = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #1EBB90;
    padding: 9px;
`

export const SearchPopUpContentIcon = styled.div `
    color: white;
    font-size: 16px;
`

// Pop Up Informations

export const ContainerBoxBlackInformations = styled.div `
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .2);
    padding-top: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    z-index: 99;
`

export const ContainerInformations = styled.div `
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 400px;
    background: white;
    box-shadow: 0 1px 7.5px 0px;
    border-radius: 1px;
    position: relative;
`

export const ContainerInformationsHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 2px;
    background: #1EBB90;
    position: relative;
`

export const InformationsHeaderTitle = styled.h4 `
    font-size: 20px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`

export const InformationsHeaderIcon = styled.div `
    position: absolute;
    right: 0;
    color: white;
    font-size: 28px;
    z-index: 90;
`

export const ContainerInformationsContent = styled.div `
    display: flex;
    padding-top: 10px;
    justify-content: center;
    align-items: flex-start;
`

export const ContainerInformationsContentList = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const InformationsList = styled.li `
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 600;
`

export const InformationsListText =  styled.span `
    font-size: 13px;
    color: black;
    font-weight: normal;
`

// Footer

export const ContainerFooter = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContainerProductPrice = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 61.84px;
`

export const ProductPriceTitle = styled.h4 `
    font-size: 14px;
    color: white;
    font-weight: bold;
`

export const ContainerProductPriceText = styled.div `
    display: flex;
    align-items: end;
    gap: 2px;
`

export const ProductPricePrefix = styled.span `
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    color: #eee;
`

export const ProductPriceText = styled.span `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #eee;
    max-height: 17.6px;
`

export const ContainerQuantitiesProducts = styled.div `
    width: 121px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px 7px;
    background: #6F97AB;
    box-sizing: border-box;
`

export const QuantitiesProducts = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 27px;
`

export const QuantitiesProductsText = styled.span `
    font-size: 24px;
    font-weight: 400;
    color: #eee;
    height: fit-content;
`

export const QuantitiesProductsAccumulated = styled.span `
    font-size: 14px;
    color: white;
    text-align: center;
`

export const ContainerAccumulated = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AccumulatedTitle = styled.h4 `
    font-size: 14px;
    font-weight: 600;
    color: white;
`

export const ContainerAccumulatedText = styled.div `
    display: flex;
    align-items: end;
    gap: 2px;
`

export const AccumulatedTextPrefix = styled.span `
    font-size: 10px;
    color: #eee;
`

export const AccumulatedText = styled.span `
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    max-height: 17.6px;
    color: #eee;
`