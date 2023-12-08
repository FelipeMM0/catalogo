import { ContainerProductCategory, ProductCategoryText } from "./style";

interface Category{
    selected?: boolean;
}

export const ProductCategory = ({selected}:Category) => {
    return(
        <ContainerProductCategory borderColor>
            <ProductCategoryText>
                Todos os produtos
            </ProductCategoryText>
        </ContainerProductCategory>
    )
}