const Button = ({text, color}) => {
    const onClickButton = () => {
        console.log(text);
      };

    return (
        <button 
        onClick={onClickButton}
        style={{color:color}}>{text}</button>
    )
};

Button.defaultProps ={
    color: "black",
}

export default Button;