import React from "react";
import { getMdList } from "@/utils/getMdList";
import Link from "next/link";

export function List() {
  return (
    <div>
      {getMdList().map((item) => {
        return (
          <div
            key={item.title}
            className="text-4xl font-bold hover:underline cursor-pointer mb-4"
          >
            <Link href={`/article?title=${item.title}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default List;
