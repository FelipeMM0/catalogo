interface Color {
    cod_hex?: string;
    cod_rgb?: string;
    color_name?: string;
    product_id?: number;
}

interface Sizes {
    P?: number;
    M?: number;
    G?: number;
    GG?: number;
}

interface Images {
    id: number;
    image: string;
    order: number;
    product_id: number;
}

interface AllProductsViewProps{
    id: number;
    price: number;
    image: string;
}

export type HandleChangeCategory = (next: boolean) => void;

export type HandleChangeProductSelected = (next: boolean) => void;

export type HandleChangeImageGallery = (indexImage: number) => void;

export type HandleSelectedProductGallery = (indexProduct: number) => void;

export type HandleChangeProductQuantity = (indexProduct: number, increment:boolean) => void;

export type ProductsProps = {
    id: number;
    name: string;
    reference: string;
    company_id: number;
    brand_id: number;
    brand_name: string;
    category_id: number;
    category_name: string;
    price: number;
    fixed_qtd: number;
    box_price: number;
    group_id: number;
    group_name: string;
    result_line: number;
    sizes: Sizes;
    colors: Color[];
    images: Images[];
}

type ProductWithTotals = ProductsProps & {
    quantityProducts: number;
    currentPrice: number;
}; 

export type AllProductsProps = {
    allProductsViewCategory: boolean
}

export type HeaderProps = {
    categoryName: string;
    lenghtCategorySelected: number;
    handleChangeCategory: HandleChangeCategory;
}

export type ProductInfoProps = {
    refProduct: string,
    priceProduct: number;
    nameProduct: string;
}

export type ProductActionsProps = {
    images: string[];
    indexImage: number;
    handleChangeImageGallery: HandleChangeImageGallery;
    setAllProductsViewCategory: React.Dispatch<React.SetStateAction<boolean>>;
    setInformationViewProducts: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AccumulatedProps = {
    total: number;
    totalQuantity: number;
}

export type PacksProps = {
    fixedQtd: number;
    sizes: Sizes;
}

export type ProductImageProps = {
    image: string;
    handleChangeProductSelected: HandleChangeProductSelected;
    categoryAllProducts: AllProductsViewProps [];
    handleSelectedProductGallery: HandleSelectedProductGallery;
}

export type IndexProductProps = {
    indexProduct: number;
    indexImage: number;
}

export type FooterProps = {
    indexProduct: number;
    accumulated: AccumulatedProps;
    currentPrice: number;
    quantityProducts: number;
    handleChangeProductQuantity: HandleChangeProductQuantity
}

export type InformationsPopUpProps = {
    category_name: string;
    name: string;
    reference: string;
    setInformationViewProducts: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CombinedPropsProductImageAllProducts = ProductImageProps & AllProductsProps;