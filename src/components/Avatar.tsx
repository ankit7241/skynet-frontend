import React from "react";
import { UserCircle } from "lucide-react";

interface AvatarProps {
	onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ onClick }) => {
	return (
		<div
			className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
			onClick={onClick}
		>
			<UserCircle className="h-6 w-6 text-gray-600" />
		</div>
	);
};

export default Avatar;
