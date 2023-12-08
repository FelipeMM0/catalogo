import { Container } from "./style";

interface DefaultMarginProps{
    padding1?: string;
    padding2?: string;
    border?: boolean;
    borderColor?: string;
    borderSize?: string;
    children: React.ReactNode; 
}

export const DefaultMargin = ({padding1, padding2, border, borderColor, borderSize, children}:DefaultMarginProps) => {
    return(
        <Container
            $padding1={padding1 ? padding1 : ''}
            $padding2={padding2 ? padding2 : ''}
            $border={border ? border : false}
            $borderColor={borderColor ? borderColor : ''}
            $borderSize={borderSize ? borderSize : ''}
            >
                {children}
        </Container>
    )
}