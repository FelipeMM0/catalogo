import { Container } from "./style"

interface ContainerMarginDefaultProps{
    $background?: string;
    $zIndex? : string;
    children: React.ReactNode; 
}

export const ContainerMarginDefault = ({
    $background,
    $zIndex,
    children,
  }: ContainerMarginDefaultProps) => {
  
    return (
      <Container $background={$background} $zIndex={$zIndex}>
        {children}
      </Container>
    );
  };
  