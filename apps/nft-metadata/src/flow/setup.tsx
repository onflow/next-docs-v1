import { config } from "@onflow/fcl";
import { Network } from "src/app/components/catalog/network-dropdown";
import * as json from "./c2j.json";
import * as catalogJson from "./catalog_c2j.json"


export function changeFCLEnvironment(input: Network) {
  if (input === 'mainnet') {
    setupMainnet()
  } else if (input === 'testnet') {
    setupTestnet();
  }
}

function setupMainnet() {
  config({
    "accessNode.api": "https://rest-mainnet.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/authn"
  })
  Object.keys(json.vars["mainnet"]).forEach(
    (contractAddressKey) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.put(
        contractAddressKey,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        json.vars["mainnet"][contractAddressKey]
      );
    }
  );
  Object.keys(catalogJson.vars["mainnet"]).forEach(
    (contractAddressKey) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.put(
        contractAddressKey,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        json.vars["mainnet"][contractAddressKey]
      );
    }
  );
}

function setupTestnet() {
  config({
    "accessNode.api": "https://rest-testnet.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn"
  })
  Object.keys(json.vars["testnet"]).forEach(
    (contractAddressKey) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.put(
        contractAddressKey,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        json.vars["testnet"][contractAddressKey]
      );
    }
  );
  Object.keys(catalogJson.vars["testnet"]).forEach(
    (contractAddressKey) => {
      // @ts-ignore
      if (contractAddressKey.indexOf("0xNFTCatalog") === -1) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.put("0xNFTCatalogAdmin", json.vars["testnet"][contractAddressKey])
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.put(
        contractAddressKey,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        json.vars["testnet"][contractAddressKey]
      );
    }
  );
}

if (process.env["FLOW_ENVIRONMENT"] === "mainnet") {
  setupMainnet()
} else {
  setupTestnet()
}
