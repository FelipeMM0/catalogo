import { ContainerImage } from '../../pages/Products/style';
import { ContainerProductCard, ContainerProductCardHeader, ProductCardHeaderText, ProductCardImage } from './style'

interface Selected{
    selected?: boolean;
    allProducts?: boolean;
    image: string;
    price: number;
    onClick: () => void;
}

export const ProductCard = ({selected, allProducts, price, image, onClick}:Selected) => {
    return(
        <ContainerProductCard 
            selected={selected ? selected : false}
            onClick={onClick}
        >
            <ContainerProductCardHeader 
                selected={selected ? selected : false}
                $allProducts={allProducts ? allProducts : false}
            >
                <ProductCardHeaderText $allProducts={allProducts ? allProducts : false}>
                    R$ {price}
                </ProductCardHeaderText>
            </ContainerProductCardHeader>
            <ContainerImage>
                <ProductCardImage src={image}/>
            </ContainerImage>
        </ContainerProductCard>
    )
}