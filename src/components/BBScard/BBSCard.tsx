import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

const BBSCard = ({ name, title, content }: { name: string; title: string; content: string }) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{name}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className=" text-blue-400">
          Read More...
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
