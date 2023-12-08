import { ContainerMarginDefault } from "../../components/ContainerMarginDefault"
import { DefaultMargin } from "../../components/DefaultMargin";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { ProductCategory } from "../../components/ProductCategory";
import { ProductCard } from "../../components/ProductCard";
import {
    ContainerListProductsCard,ContainerHeader, HeaderIcon, HeaderTitle, 
    ContainerAlignFooter, ContainerListProductsCategory, ContainerFooter, ContainerFooterIcon,
    ContainerFooterMargin, ContainerFooterText, FooterIcon, FooterText, FooterTextBorder
} from "./style";


const Header = () => {
    return (
        <ContainerMarginDefault>
            <DefaultMargin padding2={'10px'}>
                <ContainerHeader>
                    <HeaderIcon as={IoIosArrowBack} />
                    <HeaderTitle>PRODUTOS</HeaderTitle>
                </ContainerHeader>
            </DefaultMargin>
        </ContainerMarginDefault>
    )
}

const ListProductsCategory = () => {
    return (
        <ContainerListProductsCategory>
            <ProductCategory />
        </ContainerListProductsCategory>
    )
}

const ListProductsCard = () => {
    return (
        <ContainerListProductsCard>
            <ProductCard />
        </ContainerListProductsCard>
    )
}

const Footer = () => {
    return (
        <ContainerAlignFooter>
            <ContainerFooter>
                <ContainerFooterMargin>
                    <ContainerFooterText>
                        <FooterTextBorder>Comprar</FooterTextBorder>
                        <FooterText>direto</FooterText>
                    </ContainerFooterText>
                    <ContainerFooterIcon>
                        <FooterIcon as={IoIosArrowForward} />
                    </ContainerFooterIcon>
                </ContainerFooterMargin>
            </ContainerFooter>
        </ContainerAlignFooter>
    )
}

export const SearchProducts = () => {
    return(
        <>
            <Header/>
            <ListProductsCategory/>
            <ListProductsCard/>
            <Footer/>
        </>
    )
}