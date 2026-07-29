import Input from "./Input";

const Step2 = ({ data = {}, errors = {}, handleInputValue }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={data.email}
        error={errors.email}
        handleInputValue={handleInputValue}
      />
      <Input
        label="Phone Number"
        name="phoneNumber"
        type="text"
        placeholder="Enter your phone number"
        value={data.phoneNumber}
        error={errors.phoneNumber}
        handleInputValue={handleInputValue}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={data.password}
        error={errors.password}
        handleInputValue={handleInputValue}
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        value={data.confirmPassword}
        error={errors.confirmPassword}
        handleInputValue={handleInputValue}
      />
    </div>
  );
};

export default Step2;