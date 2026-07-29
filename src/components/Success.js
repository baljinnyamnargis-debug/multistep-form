import Image from "next/image";

const Success = ({ data = {} }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full py-4 gap-4 animate-fade-in">
   
      <Image
        src="/images/PineLogo.png"
        alt="Logo"
        width={60}
        height={60}
        priority
      />

   
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-black font-inter">
          You're All Set! 🔥
        </h3>
        <p className="text-[#8E8E8E] text-base font-normal max-w-[320px]">
          We have received your submission. Thank you!
        </p>
      </div>

    
      {data.profileImage && (
        <div className="mt-4 flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 border border-gray-100 w-full">
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <span className="font-semibold text-gray-800 font-inter">
            {data.firstName} {data.lastName}
          </span>
          <span className="text-xs text-gray-500">@{data.userName}</span>
        </div>
      )}
    </div>
  );
};

export default Success;