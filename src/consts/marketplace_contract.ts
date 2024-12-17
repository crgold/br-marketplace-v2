import type { Chain } from "thirdweb";
import { arbitrumSepolia } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x4CDD4bd894fC28f15E65F96687705162E7Ab8A4F",
    chain: arbitrumSepolia,
  },
];
