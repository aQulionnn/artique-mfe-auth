import style from './Button.module.scss'

type Props = {
    text: string
}

const Button = ({ text }: Props) => {
    return (
        <button className={style['form-btn']}>
            { text }
        </button>
    );
};

export default Button;