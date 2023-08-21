export const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red hover:bg-red-500">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full -5 h-5"
      />
    </button>
  );
};
