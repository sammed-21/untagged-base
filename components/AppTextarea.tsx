import React, { ChangeEvent, TextareaHTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  classname?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
import requiredImg from "@/assets/svgexport-5.svg";
const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  onChange,
  classname,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <textarea
        className={twMerge(
          "text-base w-full  font-normal py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2 transition ease-in",
          classname
        )}
        onChange={onChange}
      />
      {error && (
        <p className="text-sm flex gap-2 flex-start item-center justify-start text-red-500 mt-1">
          <Image
            src={requiredImg}
            width={10}
            height={1}
            className="w-5 bg-red-800 rounded-full"
            alt="requried"
          />
          <span>{label} is required</span>
        </p>
      )}{" "}
    </div>
  );
};

export default Textarea;
