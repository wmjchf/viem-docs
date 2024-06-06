"use client";

import { useCallback, useEffect, useMemo } from "react";
import { createPublicClient, http, PublicClient } from "viem";
import { mainnet } from "viem/chains";
/**
 * viem基本使用
 */
export default function Home() {
  const client: PublicClient = useMemo(() => {
    return createPublicClient({
      chain: mainnet,
      transport: http(),
    });
  }, []);

  const getBlockNumber = useCallback(async () => {
    const blockNumber = await client.getBlockNumber();
    console.log(blockNumber);
    return blockNumber;
  }, [client]);

  useEffect(() => {
    getBlockNumber();
  }, [getBlockNumber]);
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>VIEM Example</h1>
    </main>
  );
}
