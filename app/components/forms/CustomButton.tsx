interface CustomButtonProps{
    label: string
    className: string
    onClick: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return(
        <div onClick = {onClick} 
        className={`w-full text-center py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl cursor-pointer transition ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton;