import { ContainerPacks, PackTitle, PacksBall, PacksBallText, PacksBox, PacksText } from "./style";

interface PacksProps{
    result?: boolean;
    category?: string;
    categoryValue?: number;
    fixedQtd?: number;
}


const PacksContent = ({ result, category, categoryValue, fixedQtd }: PacksProps) => {
    

    if(result) {
        return(
            <ContainerPacks>
                <PackTitle>PACK</PackTitle>
                <PacksBox>
                    <PacksText>{fixedQtd}</PacksText>
                </PacksBox>
            </ContainerPacks>
        )
    }

    return(
        <ContainerPacks>
            <PacksBall><PacksBallText>{category}</PacksBallText> </PacksBall>
            <PacksBox>
                <PacksText>{categoryValue}</PacksText>
            </PacksBox>
        </ContainerPacks>
    )
}

export const Packs = ({result, category, categoryValue, fixedQtd}:PacksProps) => {
    return(
        <PacksContent 
            result={result}
            category={category}
            categoryValue={categoryValue}
            fixedQtd={fixedQtd}/>
    )
}