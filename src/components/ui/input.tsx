// src/components/ui/input.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                ref={ref}
                className={cn(
                    "flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-lg text-gray-900", // Добавлен text-gray-900
                    "placeholder:text-gray-400",
                    "focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "transition-all duration-200",
                    className
                )}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export { Input };