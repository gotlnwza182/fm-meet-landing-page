const Button = ({
  text,
  textSpecial,
  bgColor,
  txtSpecialColor,
  size = "lg",
}: {
  text: string;
  textSpecial?: string;
  bgColor: string;
  txtSpecialColor?: string;
  size?: "lg" | "md";
}) => {
  const sizeStyles: { lg: string; md: string } = {
    lg: "w-48",
    md: "w-40",
  };

  return (
    <button
      className={`rounded-[1.75rem] ${bgColor} text-white text-desktop-5 mb-4 h-14 ${sizeStyles[size]} hover:brightness-125 cursor-pointer`}
    >
      {text} <span className={`${txtSpecialColor}`}>{textSpecial}</span>
    </button>
  );
};
export default Button;
