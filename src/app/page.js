"use client";
import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Success from "@/components/Success";

const Step1Schema = z.object({
  firstName: z
    .string({
      required_error: "First name cannot be empty.",
      invalid_type_error: "First name cannot be empty.",
    })
    .min(1, "First name cannot be empty.")
    .regex(
      /^[a-zA-Z]+$/,
      "First name cannot contain special characters or numbers.",
    ),
  lastName: z
    .string({
      required_error: "Last name cannot be empty.",
      invalid_type_error: "Last name cannot be empty.",
    })
    .min(1, "Last name cannot be empty.")
    .regex(
      /^[a-zA-Z]+$/,
      "Last name cannot contain special characters or numbers.",
    ),
  userName: z
    .string({
      required_error: "Please enter a valid username.",
      invalid_type_error: "Please enter a valid username.",
    })
    .min(1, "Please enter a valid username."),
});

const Step2Schema = z
  .object({
    email: z
      .string()
      .min(1, "Please provide a valid email address.")
      .email("Please provide a valid email address."),
    phoneNumber: z
      .string()
      .min(1, "Please enter a valid phone number.")
      .regex(/^\+?[0-9]{8,14}$/, "Please enter a valid phone number."),
    password: z
      .string()
      .min(1, "Password must include letters and numbers.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).+$/,
        "Password must include letters and numbers.",
      ),
    confirmPassword: z
      .string()
      .min(1, "Passwords do not match. Please try again."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match. Please try again.",
    path: ["confirmPassword"],
  });

const Step3Schema = z.object({
  dateOfBirth: z.string().min(1, "Please select a valid date of birth."),
  profileImage: z.string().min(1, "Image cannot be blank."),
});

const schemas = [Step1Schema, Step2Schema, Step3Schema];

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const StepComponent = [Step1, Step2, Step3, Success][currentStep];
  const isSuccessStep = currentStep === schemas.length;

  const handleNextStep = () => {
    if (isSuccessStep) return;

    const currentSchema = schemas[currentStep];
    const result = currentSchema.safeParse(data);

    if (result.success) {
      setErrors({});
      setCurrentStep((prev) => prev + 1);
    } else {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0]] = issue.message;
        }
      });
      setErrors(fieldErrors);
    }
  };

  const handleOnBack = () => {
    if (currentStep > 0) {
      setErrors({});
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleInputValue = (inputValue, key) => {
    setData((prevData) => ({ ...prevData, [key]: inputValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-[480px] min-h-[655px] flex flex-col items-start rounded-xl bg-white p-[32px] shadow-lg justify-between">
        <div className="flex flex-col w-full gap-[28px]">
          {!isSuccessStep && (
            <div className="flex flex-col w-full gap-[8px]">
              <Image
                src="/images/PineLogo.png"
                alt="Logo"
                width={60}
                height={60}
              />
              <h4 className="text-black font-inter text-2xl font-bold">
                Join Us! 😎
              </h4>
              <p className="text-[#8E8E8E] text-[18px] font-normal leading-normal">
                Please provide all current information accurately.
              </p>
            </div>
          )}

          <StepComponent
            data={data}
            errors={errors}
            handleInputValue={handleInputValue}
          />
        </div>

        {!isSuccessStep && (
          <div className="flex w-full gap-3 mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleOnBack}
                className="flex-1 py-[12px] px-[10px] items-center justify-center rounded-xl bg-gray-200 text-black font-inter hover:bg-gray-300 transition duration-300"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNextStep}
              type="button"
              className="flex-1 py-[12px] px-[10px] items-center justify-center gap-[4px] rounded-xl bg-black text-white font-inter hover:bg-gray-800 transition duration-300 flex"
            >
              {currentStep === 2
                ? "Submit 3/3"
                : `Continue ${currentStep + 1}/${schemas.length}`}
              <Image
                src="/images/chevron_right.png"
                alt="Next"
                width={20}
                height={20}
                className="ml-1"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
