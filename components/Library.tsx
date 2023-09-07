"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import userAuthModal from "@/hooks/useAuthModal";
import userUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
const Library = () => {
  const authModal = userAuthModal();
  const uploadModal = userUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: Check for Subscription
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
          <p className="text-neutral-400 text-md font-medium">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs</div>
    </div>
  );
};

export default Library;
