"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CreatePool } from "./CreatePool"
import {
  getAllUserTokens,
  getUserPrincipal,
  onConnectWallet,
  userSession,
} from "@/utils/stacks.data"
import { TokenData } from "@/interface"
import { useTokensContext } from "@/provider/Tokens"
import { PendingTransactions } from "../shared/PendingTransactions"
import { Button } from "antd"

export const Hero = () => {
  const [tokens, setTokens] = useState<TokenData[]>([])
  const { getTokenMeta } = useTokensContext()
  const [connected, setConnected] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setConnected(userSession.isUserSignedIn())
      const stxToken = getTokenMeta("STX")
      const tokens = await getAllUserTokens()
      if (stxToken) {
        setTokens([stxToken, ...tokens])
      }
    }
    fetchData()
  }, [getTokenMeta])
  return (
    <>
      <div className="fixed top-0 left-[50%] translate-x-[-50%] w-[430px] h-[340px] blur-[300px] bg-primary-20 hidden md:block" />

      <div className="fixed top-[10vh] right-0 md:right-[-30rem] hidden xl:block -z-[20]">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-[170px] h-[170px] md:w-[60rem] md:h-[60rem]"
        >
          <Image src="/logo.svg" className="w-full h-full" alt="" fill />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center md:h-[70vh] relative z-[10]"
      >
        <div className="flex">
          <div className="p-2 px-5 uppercase text-xs border-[1px] border-primary-10/20 rounded-full mb-5">
            <p>staking pool</p>
          </div>
        </div>

        <div className="">
          <h3 className="md:text-8xl hidden md:block font-medium text-center neonText special-text">
            Stake & deploy a pool.
          </h3>
          <h3 className="md:hidden block text-4xl text-center neonText">
            Stake & deploy a pool.
          </h3>
        </div>
        <div className="text-center md:mt-10 mt-5 md:text-[16px] text-sm">
          {/* <span className="text-primary-20">Stake</span> GoatSTX to earn tokens. */}
        </div>
        <p className="text-center md:text-[18px] text-sm">
          <span className="text-primary-20">Create</span> staking pool for your
          community. <span className="text-primary-20">Earn</span> rewards from
          your favourite community.
        </p>
        {connected ? (
          <CreatePool tokens={tokens || []} />
        ) : (
          <div className="mt-2">
            <Button
              type="primary"
              className="w-full md:px-10 mt-7 border-primary-90"
              onClick={() => onConnectWallet()}
            >
              Connect Wallet
            </Button>
          </div>
        )}
      </motion.div>
    </>
  )
}
