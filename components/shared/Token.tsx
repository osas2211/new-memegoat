import { TokenData } from '@/interface'
import { getUserTokenBalance } from '@/utils/stacks.data'
import { Avatar } from 'antd'
import React, { useEffect, useState } from 'react'

const Token = ({ token, action }: { token: TokenData, action: (token: TokenData) => void }) => {
  const [tokenBalance, setTokenBalance] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const balance = await getUserTokenBalance(token.address);
      setTokenBalance(balance)
    }
    fetchData()
  }, [token])

  return (
    <div
      className="flex gap-3 items-center justify-between cursor-pointer px-2 py-2 hover:bg-white/5 rounded-md"
      onClick={() => action(token)}
    >
      <div className="flex gap-3 items-center">
        <Avatar
          src={`https://assets.hiro.so/api/mainnet/token-metadata-api/${token.address}/1.png`}
          size={40}
          className="rounded-md"
        />
        <div>
          <p className="text-white font-medium text-[14px]">
            {token.name}
          </p>
          {/* <p className="text-[12px] text-white/50">
            {token.domain}
          </p> */}
        </div>
      </div>
      <p className="text-white font-medium text-sm">
        {Number(tokenBalance).toLocaleString()}
      </p>
    </div>
  )
}

export default Token
