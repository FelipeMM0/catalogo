import { useState, useEffect } from "react";
import { Packs } from "../../components/Packs";
import { RiEqualFill } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd, IoIosSearch, IoIosArrowBack, IoIosArrowForward, IoIosClose} from "react-icons/io";
import { BottonMathOperations } from "../../components/BottonMathOperations";
import { IoSearch, IoCloseSharp, IoEyeSharp} from "react-icons/io5";
import { AiOutlineInfo } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { ProductCard } from "../../components/ProductCard";
import { ContainerMarginDefault } from "../../components/ContainerMarginDefault";
import { DefaultMargin } from "../../components/DefaultMargin";
import {
    ContainerContent, ContainerHeader, ContainerProductImage,
    ContainerArrows, ContainerProductActions, ContainerProductInfo,
    Product, ProductRefPrice, ProductTitle, ProductRefPriceText, ContainerImages,
    ContainerFooter, ContainerProductPrice, ContainerQuantitiesProducts, ContainerAccumulated, ContainerAccumulatedText,
    BoxImages, Images, ContainerAlignAllProducts, ProductPriceTitle, ContainerSearchPopUpBoxBlack,
    ContainerSearchPopUpContentIcon, SearchPopUpContentInput, ContainerSearchPopUpContent, SearchPopUpHeader, ContainerSearchPopUp, SearchPopUpContentIcon,
    ProductPricePrefix, ProductPriceText, ContainerProductPriceText, SearchPopUpHeaderIcon, SearchPopUpHeaderTitle,
    QuantitiesProducts, QuantitiesProductsAccumulated, QuantitiesProductsText, AccumulatedTitle, AccumulatedText, AccumulatedTextPrefix,
    ContainerAllProducts, Content, ContentText, HeaderIcon, Image, ContainerBoxBlackInformations, ContainerInformations, ContainerInformationsHeader, 
    InformationsHeaderIcon, InformationsHeaderTitle, ContainerInformationsContent, ContainerInformationsContentList, InformationsList, InformationsListText
} from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ContainerGapPacks, PackIcon } from "../../components/Packs/style";
// import { SearchProducts } from "../Search";
import {
    ProductsProps, HeaderProps, ProductInfoProps, PacksProps, CombinedPropsProductImageAllProducts, IndexProductProps,
    ProductActionsProps, ProductWithTotals, FooterProps, AccumulatedProps, InformationsPopUpProps
} from "./types";
import mockProducts from './constants'

const Header = ({categoryName, lenghtCategorySelected, handleChangeCategory}:HeaderProps) => {

    return (
        <ContainerMarginDefault>
            <DefaultMargin padding2={'10px'}>
                <HeaderIcon as={IoIosArrowBack} />
                <ContainerHeader>
                    <ButtonIcon
                        $backgroundButton={'white'}
                        svgIcon={IoIosArrowBack}
                        colorIcon={'#809CAA'}
                        onClick={() => handleChangeCategory(false)}
                    />
                    <ContainerContent>
                        <Content>
                            <ContentText>({lenghtCategorySelected}) {categoryName}</ContentText>
                        </Content>
                    </ContainerContent>
                    <ButtonIcon
                        $backgroundButton={'white'}
                        svgIcon={IoIosArrowForward}
                        colorIcon={'#809CAA'}
                        onClick={() => handleChangeCategory(true)}
                    />
                </ContainerHeader>
            </DefaultMargin>
        </ContainerMarginDefault>
    )
}

const ProductImage = ({ image, allProductsViewCategory, handleChangeProductSelected, 
        categoryAllProducts, handleSelectedProductGallery }: CombinedPropsProductImageAllProducts) => {

    return (
        <ContainerMarginDefault
            $background={'white'}
            $zIndex={'99'}
        >
            <DefaultMargin>
                <ContainerProductImage>
                    <ContainerArrows>
                        <ButtonIcon
                            $greaterButton
                            svgIcon={IoIosArrowBack}
                            onClick={() => handleChangeProductSelected(false)}
                        />

                        <ButtonIcon
                            $greaterButton
                            svgIcon={IoIosArrowForward}
                            onClick={() => handleChangeProductSelected(true)}
                        />
                    </ContainerArrows>
                    <Image src={image} />
                </ContainerProductImage>

                {/* Layout de todos os produtos */}
                {
                    allProductsViewCategory && (
                        <ContainerAlignAllProducts>
                            <ContainerAllProducts>
                                {
                                    categoryAllProducts.map((category, index) => (
                                        <ProductCard
                                            key={index}
                                            allProducts price={category.price}
                                            image={category.image}
                                            onClick={() => handleSelectedProductGallery(category.id)}
                                        />
                                    ))
                                }
                                {/* <ProductCard allProducts/> */}
                            </ContainerAllProducts>
                        </ContainerAlignAllProducts>
                    )
                }
            </DefaultMargin>
        </ContainerMarginDefault>
    )
}

const ProductActions = ({images, indexImage, handleChangeImageGallery, setAllProductsViewCategory, setInformationViewProducts}:ProductActionsProps) => {

    return(
        <ContainerMarginDefault $background={'white'}>
        <DefaultMargin padding2={'13px'} border borderColor={'#ddd'}>
            <ContainerProductActions>
                <ButtonIcon 
                    $greaterButton 
                    svgIcon={AiOutlineInfo}
                    onClick={() => setInformationViewProducts(true)}
                />
                <ButtonIcon $greaterButton svgIcon={IoIosSearch}/>
                <ContainerImages>
                    {
                        images
                        .slice(0,3)
                        .map((image, index) => (
                            <BoxImages key={index} onClick={() => handleChangeImageGallery(index)}>
                                <Images src={indexImage >= 3 && index == 1 ? images[indexImage] : image} />
                            </BoxImages>
                        ))
                    }
                </ContainerImages>
                <ButtonIcon $greaterButton svgIcon={IoEyeSharp} onClick={()=> setAllProductsViewCategory(prop=>!prop)}/>
                <ButtonIcon $greaterButton svgIcon={MdOutlineLocalGroceryStore}/>
            </ContainerProductActions>
        </DefaultMargin>
    </ContainerMarginDefault>
    )
}

const ProductInfo = ({refProduct, priceProduct, nameProduct}:ProductInfoProps) => {
    return (
        <ContainerMarginDefault $background={'white'}>
            <DefaultMargin padding2={'10px'}>
                <ContainerProductInfo>
                    <Product>
                        <ProductRefPrice>
                            REF:
                            <ProductRefPriceText> {refProduct}</ProductRefPriceText>
                        </ProductRefPrice>
                        <ProductRefPrice size={'16px'}>
                            R$
                            <ProductRefPriceText> {priceProduct}</ProductRefPriceText>
                        </ProductRefPrice>
                    </Product>
                    <ProductTitle>{nameProduct}</ProductTitle>
                </ContainerProductInfo>
            </DefaultMargin>
        </ContainerMarginDefault>
    )
}

const PacksContent = ({sizes, fixedQtd}:PacksProps) => {   

    return (
        <ContainerMarginDefault $background={'white'}>
            <DefaultMargin padding2={'10px'}>
                <ContainerGapPacks>

                {Object.entries(sizes).map(([category, value]) =>(
                    <Packs
                        key={category}
                        category={category}
                        categoryValue={value}
                    />
                ))}
                    <PackIcon as={RiEqualFill} />
                    <Packs 
                        result
                        fixedQtd={fixedQtd}
                    />
                </ContainerGapPacks>
            </DefaultMargin>
        </ContainerMarginDefault>
    )
}

const Footer = ({currentPrice, quantityProducts, accumulated, indexProduct, handleChangeProductQuantity}:FooterProps) => {

    return (
        <ContainerMarginDefault $background={'#809CAA'}>
            <DefaultMargin padding2={'10px'}>

                <ContainerFooter>
                    <ContainerProductPrice>
                        <ProductPriceTitle>Atual</ProductPriceTitle>
                        <ContainerProductPriceText>
                            <ProductPricePrefix>R$</ProductPricePrefix><ProductPriceText>{currentPrice}</ProductPriceText>
                        </ContainerProductPriceText>
                    </ContainerProductPrice>

                    <ContainerQuantitiesProducts>
                        <QuantitiesProducts>
                            <BottonMathOperations 
                                svgIcon={RiSubtractFill}
                                onClick={() => handleChangeProductQuantity(indexProduct,false)}
                            />
                            <QuantitiesProductsText>{quantityProducts}</QuantitiesProductsText>
                            <BottonMathOperations 
                                svgIcon={IoMdAdd}
                                onClick={() => handleChangeProductQuantity(indexProduct,true)}
                            />
                        </QuantitiesProducts>
                        <QuantitiesProductsAccumulated>Acumulado: {accumulated.totalQuantity}</QuantitiesProductsAccumulated>
                    </ContainerQuantitiesProducts>

                    <ContainerAccumulated>
                        <AccumulatedTitle>Acumulado</AccumulatedTitle>
                        <ContainerAccumulatedText>
                            <AccumulatedTextPrefix>R$</AccumulatedTextPrefix>
                            <AccumulatedText> {accumulated.total}</AccumulatedText>
                        </ContainerAccumulatedText>
                    </ContainerAccumulated>
                </ContainerFooter>

            </DefaultMargin>
        </ContainerMarginDefault>
    )
}

const SearchPopUp = () => {
    return (
        <ContainerSearchPopUpBoxBlack>
            <ContainerSearchPopUp>
                <SearchPopUpHeader>
                    <SearchPopUpHeaderTitle>
                        Buscar Referência
                    </SearchPopUpHeaderTitle>
                    <SearchPopUpHeaderIcon as={IoCloseSharp} />
                </SearchPopUpHeader>
                <ContainerSearchPopUpContent>
                    <SearchPopUpContentInput />
                    <ContainerSearchPopUpContentIcon>
                        <SearchPopUpContentIcon as={IoSearch} />
                    </ContainerSearchPopUpContentIcon>
                </ContainerSearchPopUpContent>
            </ContainerSearchPopUp>
        </ContainerSearchPopUpBoxBlack>
    )
}

const InformationsPopUp = ({name, reference, category_name, setInformationViewProducts}:InformationsPopUpProps) => {
    return (
        <ContainerBoxBlackInformations>
            <ContainerInformations>
                <ContainerInformationsHeader>
                    <InformationsHeaderTitle>Informações</InformationsHeaderTitle>
                    <InformationsHeaderIcon
                        as={IoIosClose}
                        onClick={() => setInformationViewProducts(false)}
                    />
                </ContainerInformationsHeader>
                <ContainerInformationsContent>
                    <ContainerInformationsContentList>
                        <InformationsList>
                            Nome do produto:
                            <InformationsListText>{name}</InformationsListText>
                        </InformationsList>
                        <InformationsList>
                            Referência:
                            <InformationsListText>{reference}</InformationsListText>
                        </InformationsList>
                        <InformationsList>
                            Categoria do produto:
                            <InformationsListText>{category_name}</InformationsListText>
                        </InformationsList>
                    </ContainerInformationsContentList>
                </ContainerInformationsContent>
            </ContainerInformations>
        </ContainerBoxBlackInformations>
    )
}

export const Products = () => {

    const [products, setProducts] = useState<ProductWithTotals[]>(mockProducts.map((product,index) => ({
        ...product,
        quantityProducts: index == 0 ? 1: 0,
        currentPrice:index == 0 ?  Math.round((product.price * product.fixed_qtd) * 100) / 100 : 0,
    })));

    const [categoryNameSelectedProduct, setCategoryNameSelectedProduct] = useState<string>('');

    const [accumulated, setAccumulated] = useState<AccumulatedProps>({total: 0, totalQuantity:1});

    const [indexSelectedProduct, setIndexSelectedProduct] = useState<IndexProductProps>({indexProduct: 0, indexImage: 0});
    
    const [searchPopUp, setSeachPopUp] = useState(false); //Pop Up pesquisa

    const [allProductsViewCategory, setAllProductsViewCategory] = useState(false);

    const [infomationsViewProducts, setInformationViewProducts] = useState(false);


    function updateInformationsProducts(){

        const allProducts = mockProducts[0]

        getProductCategory(allProducts?.category_name)
    }

    function totalAccumulated() {
        const { totalPrice, totalQuantity } = products.reduce((acc, product) => {
            if (product.quantityProducts > 0) {
                acc.totalPrice += product.currentPrice;
                acc.totalQuantity += product.quantityProducts;
            }
            return acc;
        }, { totalPrice: 0, totalQuantity: 0 });
    
        // Garante que o total e a quantidade acumulados não sejam menores que zero
        const accumulatedValue = Math.max(0, totalPrice);
        const accumulatedQuantity = Math.max(0, totalQuantity);
    
        setAccumulated({ total: Math.round((accumulatedValue) * 100) / 100, totalQuantity: accumulatedQuantity });
    }

    function handleChangeProductQuantity(indexProduct:number, increment:boolean){

        const operator = increment ? + 1 : -1

        const price = products[indexProduct].price
        const fixed_qtd = products[indexProduct].fixed_qtd
        const quantity = products[indexProduct].quantityProducts

        const newQuantity = quantity + operator <= 0 ? 0 : quantity + operator

        const currentPrice = price * fixed_qtd * newQuantity

        setProducts(currentProducts => {
            const newProducts = [...currentProducts];

            newProducts[indexProduct] = {
                ...newProducts[indexProduct],
                quantityProducts: newQuantity,
                currentPrice: Math.round((currentPrice) * 100) / 100,
            };

            return newProducts;
        });
    }

    function getProductCategory(category:string){
        const product = mockProducts.find((product: ProductsProps) => product.category_name === category);
        
        if (!product) {
            console.log('Categoria não encontrada');
            return null;
        }
        
        setCategoryNameSelectedProduct(product.category_name)
    }

    function changeCategoryIndex(moveForward: boolean) {

        const lengthProducts = products.length;
        let newIndexProduct = indexSelectedProduct.indexProduct;
        let newIndexImage = indexSelectedProduct.indexImage;
        let stepsTaken = 0; 
    
        do {
            
            newIndexProduct = moveForward
                ? (newIndexProduct + 1) % lengthProducts
                : (newIndexProduct - 1 + lengthProducts) % lengthProducts;
    
            stepsTaken++;
            if (stepsTaken > lengthProducts) {
                console.log('Não foi encontrada uma próxima categoria diferente.');
                return;
            }
        } while (products[newIndexProduct]?.category_name === products[indexSelectedProduct.indexProduct].category_name);
    
        
        if (!moveForward) {
            newIndexImage = products[newIndexProduct].images.length - 1;
        } else {
            newIndexImage = 0;
        }
    
        setIndexSelectedProduct({ indexImage: newIndexImage, indexProduct: newIndexProduct });
        setCategoryNameSelectedProduct(products[newIndexProduct].category_name);

    }

    function countLengthCategories(category:string) {
        return products.reduce((contagem, item) => {
            if (item.category_name === category) {
                return contagem + 1;
            }
            return contagem;
        }, 0);
    }

    function getInformationsProducts(){

        const allProductsSelected = products[indexSelectedProduct.indexProduct];

        const lenghtCategorySelected = countLengthCategories(categoryNameSelectedProduct);

        const nameProduct = allProductsSelected?.name

        const categoryName = allProductsSelected?.category_name

        const refProduct = allProductsSelected?.reference

        const priceProduct = allProductsSelected?.price

        const sizesProduct = allProductsSelected?.sizes

        const fixedQtd = allProductsSelected?.fixed_qtd

        const imagesInformations = allProductsSelected?.images

        const images = imagesInformations.map(img => img.image)

        const quantityProducts = allProductsSelected?.quantityProducts

        const currentPrice = allProductsSelected?.currentPrice

        return {
            prop1: categoryName, prop2: lenghtCategorySelected,
            prop3: nameProduct, prop4: refProduct, prop5: priceProduct,
            prop6: sizesProduct, prop7: fixedQtd, prop8: images,
            prop9: currentPrice, prop10: quantityProducts
        }
    }
    
    function handleChangeCategory(next:boolean){
        changeCategoryIndex(next? true : false)
    }

    function handleChangeImageGallery(indexImage:number){
        setIndexSelectedProduct({indexImage: indexImage, indexProduct:indexSelectedProduct.indexProduct})
    }

    function handleChangeProductSelected(next:boolean){

        let newIndexProduct = indexSelectedProduct.indexProduct
        let prevNewIndexImage = indexSelectedProduct.indexImage - 1;

        let newIndexImage = indexSelectedProduct.indexImage + 1;
        const lengthProductImages = products[newIndexProduct].images.length;


        if(next){

            if (newIndexImage >= lengthProductImages) {
                newIndexProduct += 1;
                newIndexImage = 0; 
        
                if (newIndexProduct >= products.length) {
                    newIndexProduct = 0;
                }

                if(products[newIndexProduct].category_name)
                setCategoryNameSelectedProduct(products[newIndexProduct].category_name)
            }
        
            setIndexSelectedProduct({ indexImage: newIndexImage, indexProduct: newIndexProduct });
        }

        else{

            if (prevNewIndexImage < 0) {
                newIndexProduct -= 1;

                if (newIndexProduct < 0) {
                    newIndexProduct = products.length - 1;

                    if(products[newIndexProduct].category_name !== categoryNameSelectedProduct)
                    setCategoryNameSelectedProduct(products[newIndexProduct].category_name)
                }
        
                prevNewIndexImage = products[newIndexProduct].images.length - 1;
            }
        
            if(products[newIndexProduct].category_name !== categoryNameSelectedProduct)
                setCategoryNameSelectedProduct(products[newIndexProduct].category_name)

            setIndexSelectedProduct({ indexImage: prevNewIndexImage, indexProduct: newIndexProduct });
        

        }

    }

    function viewAllProductsCategory(){
        
        const categorySelected = products.filter(e=> e.category_name == categoryNameSelectedProduct)

        const categoryAllProducts = categorySelected.map((product) => {
            return {
              id: product.id,
              image: product.images[0]?.image,
              price: product.price
            };
        });

        return categoryAllProducts
    }

    function handleSelectedProductGallery(idProduct: number){

        const findProduct = products.findIndex(product => product.id === idProduct);

        setIndexSelectedProduct({indexImage:0, indexProduct: findProduct})
        setAllProductsViewCategory(prop=> !prop)
    }

    useEffect(() => {
        updateInformationsProducts();
    }, []);

    useEffect(() => {
        totalAccumulated()
    }, [products]);

    const { prop1: categoryName, prop2: lenghtCategorySelected,
        prop3: nameProduct, prop4: refProduct, prop5: priceProduct,
        prop6: sizesProduct, prop7: fixedQtd, prop8: images,
        prop9: currentPrice, prop10: quantityProducts
    }
    = getInformationsProducts();

    const categoryAllProducts = viewAllProductsCategory();

    return(
       <>
            <Header
                categoryName={categoryName}
                lenghtCategorySelected={lenghtCategorySelected}
                handleChangeCategory={handleChangeCategory}
            />
            <ProductImage 
                allProductsViewCategory={allProductsViewCategory}
                image={images[indexSelectedProduct.indexImage]}
                handleChangeProductSelected={handleChangeProductSelected}
                handleSelectedProductGallery={handleSelectedProductGallery}
                categoryAllProducts={categoryAllProducts}
            />
            <ProductActions
                images={images}
                indexImage={indexSelectedProduct.indexImage}
                handleChangeImageGallery={handleChangeImageGallery}
                setAllProductsViewCategory={setAllProductsViewCategory}
                setInformationViewProducts={setInformationViewProducts}
                
            />
            <ProductInfo
                refProduct={refProduct}
                priceProduct={priceProduct}
                nameProduct={nameProduct}
            />
            <PacksContent
                sizes={sizesProduct}
                fixedQtd={fixedQtd}
            />
            <Footer
                indexProduct={indexSelectedProduct.indexProduct}
                currentPrice={currentPrice}
                quantityProducts={quantityProducts}
                accumulated={accumulated}
                handleChangeProductQuantity={handleChangeProductQuantity}  
            />

            {/* PopUp  Pesquisa */}
            {searchPopUp && (
                    <SearchPopUp/>
            )}

            {/* Pop Up Informations */}
            {infomationsViewProducts &&
                <InformationsPopUp
                    name={products[indexSelectedProduct.indexProduct].name}
                    reference={products[indexSelectedProduct.indexProduct].reference}
                    category_name={products[indexSelectedProduct.indexProduct].category_name}
                    setInformationViewProducts={setInformationViewProducts}
                />
            }

            {/* <SearchProducts/> */}
       </>
    )
}