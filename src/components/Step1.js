import Input from "./Input";

const Step1 = ({ data = {}, errors = {}, handleInputValue }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Input
        label="First Name"
        name="firstName"
        type="text"
        placeholder="Enter your first name"
        value={data.firstName}
        error={errors.firstName}
        handleInputValue={handleInputValue}
      />
      <Input
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Enter your last name"
        value={data.lastName}
        error={errors.lastName}
        handleInputValue={handleInputValue}
      />
      <Input
        label="Username"
        name="userName"
        type="text"
        placeholder="Enter your username"
        value={data.userName}
        error={errors.userName}
        handleInputValue={handleInputValue}
      />
    </div>
  );
};

export default Step1;