import { Avatar } from "@material-tailwind/react";

function ChatButton() {
  return (
    <div className="flex cursor-pointer hover:bg-gray-200 rounded-lg transition-all duration-200">
      <div className="flex w-full p-4 gap-4 items-center">
        <Avatar
          variant=""
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />

        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center w-full">
            <p className="font-semibold text-black text-base">Matheus Robert</p>
            <p className="text-sm text-gray-500">12:00</p>
          </div>
          <p className="text-sm text-gray-600 truncate">
            Será que esse longchat sai?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatButton;
