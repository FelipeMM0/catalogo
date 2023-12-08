import styled from "styled-components";

export const ContainerGapPacks = styled.div `
    width: 280px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 6px
`

export const ContainerPacks = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 44px;
    height: 44px;
    position: relative;
`

export const PacksBox = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 38px;
    border-radius: 5px;
    background-color:#809CAA;
`

export const PacksBall = styled.div `
    position: absolute;
    top: -8px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #CBE8EE;
    padding: 2px 4px;
    box-sizing: border-box;
`

export const PacksBallText = styled.span `
    font-size: 12.5px;
    font-weight: 400;
`

export const PacksText = styled.span `
    font-size: 24px;
    font-weight: 500;
    color: white;
`

export const PackTitle = styled.span `
    position: absolute;
    top: -16px;
    font-size: 12px;
    color: #000;
`

export const PackIcon = styled.div `
    font-size: 30px;
    color: #bbb;
`