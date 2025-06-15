import React from "react";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";
function Home() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex flex-col mt-20">
      <ListItems />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 overflow-y-scroll overflow-x-hidden h-[calc(100vh-6.625rem)]">
        {!loading &&
          data.map((item) => {
            if (item.type !== "video" && item.type !== "short") return false;
            return <Video key={item.id} video={item?.video} />;
          })}
      </div>
    </div>
  );
}

export default Home;
