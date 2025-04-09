import React from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

const AdminNavbar = () => {
  return (
    <div className="flex w-full overflow-hidden p-4 bg-neutral-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            className="size-10"
            src={"/b-logo.svg"}
            width={"500"}
            height={"500"}
            alt="logo"
          />
          <h2 className="text-offWhite">Bwosh</h2>
        </div>
        <div>
          <Button>
            <Link href={"/"}>Return to userview</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
