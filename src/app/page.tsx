import BBSCardList from "@/components/BBScard/BBSCardList";
import { BBSData } from "../../type/CRUD/BBS/types";
// import { prisma } from "@/lib/prismaClient";

const getAllBBSData = async () => {
  const res = await fetch("http://localhost:3000/api/post");

  const bbsAllData: BBSData[] = await res.json();
  return bbsAllData;
};

export default async function Home() {
  const bbsAllData = await getAllBBSData();

  return (
    <main className="">
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
