// File: frontend/src/components/Input.jsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({ icon: Icon, type, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === "password";

	const toggleVisibility = () => setShowPassword(!showPassword);

	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-n-4' />
			</div>
			<input
				{...props}
				type={isPassword && showPassword ? "text" : type}
				className='w-full pl-10 pr-10 py-2 bg-gray-800 bg-opacity-50 rounded-sm border border-gray-700 focus:border-color-primary focus:ring-2 focus:ring-color-secondary text-white placeholder-gray-400 transition duration-200'
			/>
			{isPassword && (
				<button
					type="button"
					onClick={toggleVisibility}
					className="absolute inset-y-0 right-0 pr-3 flex items-center text-n-4 focus:outline-none"
				>
					{showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
				</button>
			)}
		</div>
	);
};

export default Input;
