import { ContainerBottonMathOperations, BottonMathOperationsIcon } from "./style"


interface Icon{
    svgIcon: string;
    onClick: () => void;
}

export const BottonMathOperations = ({svgIcon, onClick}:Icon) => {
    return(
        <ContainerBottonMathOperations onClick={onClick}>
            <BottonMathOperationsIcon as={svgIcon}></BottonMathOperationsIcon>
        </ContainerBottonMathOperations>
    )
}