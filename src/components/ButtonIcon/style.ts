import styled from 'styled-components';

interface ButtonProps{
    $greaterButton?: boolean;
    $background?: string;
}

interface StyledIconProps{
    color?: string;
    size?: string;
}

export const Button = styled.div<ButtonProps> `
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.$greaterButton ? '32px' : '24px'};
    height: ${props => props.$greaterButton ? '32px' : '24px'};
    background: ${props => props.$background || '#809CAA'};
    border-radius: 50%;
`

export const StyledIcon = styled.div<StyledIconProps>`
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size || '24px'};
  transition: color 0.2s;
`;