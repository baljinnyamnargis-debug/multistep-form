const Input = ({ label, name, type = "text", placeholder, value, handleInputValue, error }) => {
  const handleOnChange = (event) => {
  
    handleInputValue(event.target.value, name);
  };

  return (
    <div className="flex flex-col w-full gap-1">
      <label className="text-sm font-medium text-gray-700 font-inter">
        {label} <span className="text-[#E14942]">*</span>
      </label>
      
      <input
        type={type}
        name={name}
        value={value || ""} 
        onChange={handleOnChange}
        placeholder={placeholder}
        className={`w-full border rounded-lg py-2 px-3 text-sm transition-all outline-none ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black"
        }`}
      />
    
      {error && (
        <p className="text-red-500 text-xs mt-0.5 font-inter">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
