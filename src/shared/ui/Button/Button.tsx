import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";




export enum ThemeButton {
    CLEAR='clear',
}

interface ButtonProps extends ButtonHTMLAttributes<any> {
    className?: string;
    theme?: ThemeButton
}




export const Button:FC<ButtonProps> = (props ) => {

    const {children, className, theme, ...otherProps} = props
    return (
        <button {...otherProps} className={classNames(cls.Button, {[cls[theme]]:true}, [className])} >
            {children}
        </button>
    );
};
