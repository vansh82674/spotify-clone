import { Song } from "@/types";

import usePlayer from "./usePlayer";
import userAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import userSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = userAuthModal();
  const { user,subscription } = useUser();
  const subscriptionModal = userSubscribeModal();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    if(!subscription) {
      return subscriptionModal.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;