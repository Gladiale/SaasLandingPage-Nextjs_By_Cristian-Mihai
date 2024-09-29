type ButtonProps = {
  btnText: string;
  variant: "primary" | "secondary" | "tertiary";
};

const Button = ({ btnText, variant }: ButtonProps) => {
  const size: {
    [P in ButtonProps["variant"]]: [string, string | null];
  } = {
    primary: ["min-w-[184px] py-[18px]", "w-72 h-72"],
    secondary: ["min-w-[160px] py-[15px]", "w-64 h-64"],
    tertiary: [
      "min-w-[184px] py-[18px] bg-[#0e1135] hover:bg-[#151a41] text-white uppercase tracking-[1px] text-sm",
      null,
    ],
  };

  return (
    <button
      className={`relative ${size[variant][0]} px-6 inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group`}
    >
      {variant === "tertiary" ? (
        btnText
      ) : (
        <>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br  from-accent via-accent_secondary to-accent"></span>
          <span
            className={`absolute bottom-0 right-0 block ${size[variant][1]} mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#cb52ff] rounded-full opacity-30 group-hover:rotate-90 ease`}
          ></span>
          <span className="relative text-white text-sm uppercase tracking-[1px]">
            {btnText}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
