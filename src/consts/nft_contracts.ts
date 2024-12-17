import type { Chain } from "thirdweb";
import { arbitrumSepolia} from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x16D8C42280EA11b3bD7240838614166a9B86B475",
    chain: arbitrumSepolia,
    title: "Battlerise: Skins",
    thumbnailUrl:
      "https://e130b8ff18cd492d9c75c31f52783b5f.ipfscdn.io/ipfs/QmfAA9HM9FrtAYM7AmHNCVneYp7sqoMyWWsryab8hCXCaC/0.png",
    type: "ERC721",
  },
];
