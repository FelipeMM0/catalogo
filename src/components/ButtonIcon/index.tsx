import { Button, StyledIcon } from "./style"

interface ButtonIconProps{
    svgIcon: string;
    sizeIcon?: string;
    colorIcon?: string;
    $greaterButton?: boolean;
    $backgroundButton?: string;
    onClick?: () => void;
}

export const ButtonIcon = ({svgIcon, sizeIcon, colorIcon, $backgroundButton, $greaterButton, onClick}:ButtonIconProps) => {
    return(
        <Button 
            $background={$backgroundButton ? $backgroundButton : ''}
            $greaterButton={$greaterButton ? $greaterButton : false}
            onClick={onClick}
        >
            <StyledIcon 
                as={svgIcon}
                color={colorIcon ? colorIcon : ''}
                size={sizeIcon ? sizeIcon : ''}
            />
        </Button>
    )
}