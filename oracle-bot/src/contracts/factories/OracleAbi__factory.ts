/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { OracleAbi, OracleAbiInterface } from "../OracleAbi";
const _abi = [
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "enum Identity",
        name: "",
        components: [
          {
            type: "struct Address",
            name: "Address",
            components: [
              {
                type: "b256",
                name: "value",
              },
            ],
          },
          {
            type: "struct ContractId",
            name: "ContractId",
            components: [
              {
                type: "b256",
                name: "value",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "price_eth",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "price_dai",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "set_price_eth",
    inputs: [
      {
        type: "u64",
        name: "price_eth",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "set_price_dai",
    inputs: [
      {
        type: "u64",
        name: "price_dai",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
];

export class OracleAbi__factory {
  static readonly abi = _abi;
  static createInterface(): OracleAbiInterface {
    return new Interface(_abi) as unknown as OracleAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): OracleAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as OracleAbi;
  }
}
