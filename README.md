# Viem Docs

```
「viem」是一个模块化的TypeScript库，它提供JSON-RPC API的抽象化封装让开发者能够与以太坊节点轻松进行交互。相比etherjs、web3js等库，「viem」包体积更小，性能更优，是web3前端开发者更好的选择。
```

## 安装

```
pnpm add viem
```

## 基本使用

### 创建 viem 客户端

```typescript
import { createPublicClient, http, PublicClient } from "viem";
import { mainnet } from "viem/chains";

const client: PublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
```

### 与链上进行交互

```typescript
// 获取链上区块数量
const blockNumber = await client.getBlockNumber();
```
