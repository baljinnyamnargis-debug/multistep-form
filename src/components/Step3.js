import Input from "./Input";

const Step3 = ({ data = {}, errors = {}, handleInputValue }) => {

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleInputValue(imageUrl, "profileImage");
    }
  };


  const handleRemoveImage = () => {
    handleInputValue("", "profileImage");
  };

  return (
    <div className="flex flex-col w-full gap-4">
    
      <Input
        label="Date of birth"
        name="dateOfBirth"
        type="date"
        placeholder="--/--/----"
        value={data.dateOfBirth}
        error={errors.dateOfBirth}
        handleInputValue={handleInputValue}
      />

    
      <div className="flex flex-col w-full gap-1.5">
        <label className="text-sm font-medium text-black font-inter">
          Profile image <span className="text-[#E14942]">*</span>
        </label>

        <div
          className={`relative w-full h-[180px] rounded-2xl bg-[#F7F7F7] overflow-hidden border transition-all ${
            errors.profileImage ? "border-[#E14942]" : "border-transparent"
          }`}
        >
       
          {!data.profileImage ? (
            <label
              htmlFor="profile-upload"
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-gray-100 transition-all"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 2.66663H2.66667C1.93029 2.66663 1.33333 3.26358 1.33333 3.99996V12C1.33333 12.7363 1.93029 13.3333 2.66667 13.3333H13.3333C14.0697 13.3333 14.6667 12.7363 14.6667 12V3.99996C14.6667 3.26358 14.0697 2.66663 13.3333 2.66663Z"
                      stroke="#202124"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66667 6.66663C6.40305 6.66663 7 6.06967 7 5.33329C7 4.59691 6.40305 3.99996 5.66667 3.99996C4.93029 3.99996 4.33333 4.59691 4.33333 5.33329C4.33333 6.06967 4.93029 6.66663 5.66667 6.66663Z"
                      stroke="#202124"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6667 9.99996L10.6667 5.99996L1.33333 13.3333"
                      stroke="#202124"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-normal text-[#202124] font-inter">
                  Add image
                </span>
              </div>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          ) : (
          
            <div className="relative w-full h-full">
              <img
                src={data.profileImage}
                alt="Profile preview"
                className="w-full h-full object-cover rounded-2xl"
              />
             
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center text-xs transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}
        </div>

       
        {errors.profileImage && (
          <p className="text-[#E14942] text-xs font-inter mt-0.5">
            Image cannot be blank
          </p>
        )}
      </div>
    </div>
  );
};

export default Step3;