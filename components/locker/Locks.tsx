"use client"
import React from "react"
import { BsLockFill } from "react-icons/bs"
import { UserLock } from "./UserLock"

export const Locks = () => {
  return (
    <div className="mb-7">
      {/* <div className="p-4 text-center from-primary-50/15 to-primary-70/20 bg-gradient-to-r text-primary-50 relative overflow-hidden mb-5">
        <span>View Locks</span>

        <div className="absolute top-0 right-0 text-primary-10/5 text-[5.5rem]">
          <BsLockFill />
        </div>
      </div> */}

      <div className="border-[1px] border-primary-100/85 p-4 text-center from-[#0c130e] to-[#051f0c] bg-gradient-to-r mt-16">
        {/* <span>No Locks</span> */}
        <div className="grid md:grid-cols-2 gap-2">
          <UserLock />
          <UserLock />
        </div>
      </div>
    </div>
  )
}
