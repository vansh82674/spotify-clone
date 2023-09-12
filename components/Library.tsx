"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import userAuthModal from "@/hooks/useAuthModal";
import userUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";

import MediaItem from "./MediaItem";
import userSubscribeModal from "@/hooks/useSubscribeModal";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const subscribeModal = userSubscribeModal();
  const authModal = userAuthModal();
  const uploadModal = userUploadModal();
  const { user,subscription } = useUser();

  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if(!subscription){
      return subscribeModal.onOpen();
    }
    
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div
        className="
        flex justify-between items-center px-5 pt-4
      "
      >
        <div
          className="
        inline-flex items-center gap-x-2
        "
        >
          <TbPlaylist size={24} className="text-neutral-400" />
          <p className="text-neutral-400 text-base font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            key={item.id}
            onClick={(id: string) => onPlay(id)}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
