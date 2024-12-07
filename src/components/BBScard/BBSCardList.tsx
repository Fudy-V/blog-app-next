import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../../../type/CRUD/BBS/types";

const BBSCardList = ({ bbsAllData }: { bbsAllData: BBSData[] }) => {
  return (
    <div className=" grid lg:grid-cols-3 p-4 gap-4">
      {bbsAllData.map((bbsData) => (
        <BBSCard
          key={bbsData.id}
          name={bbsData.username}
          title={bbsData.title}
          content={bbsData.content}
        />
      ))}
    </div>
  );
};

export default BBSCardList;
