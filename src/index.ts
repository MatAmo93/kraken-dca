import { KrakenExchange } from "./exchanges/KrakenExchange";
import AppConfig from "./config/App";

console.log("Testing..");
Test();

async function Test() {
  const exchange = new KrakenExchange();
  let price = 0;
  let balance = 0;

  console.log("BALANCE.");
  // ==
  price = await exchange.price("BTC/EUR");
  balance = await exchange.balance("BTC");
  console.log("BTC", "Balance", balance, "Price", price);

  price = await exchange.price("ADA/EUR");
  balance = await exchange.balance("ADA");
  console.log("ADA", "Balance", balance, "Price", price);

  balance = await exchange.balance("EUR");
  console.log("EUR", "Balance", balance);

  console.log("TRADE.");
  // ==
  await exchange.createOrder("BUY", "ADA/EUR", AppConfig.ORDER_AMOUNT); // amount in quote currency

  console.log("WITHDRAW.");
  // ==
  // console.log("ETH", AppConfig.WALLET_ADDRESS_ETH, AppConfig.WALLET_DESCRIPTION_ETH, 0.1);
  // await exchange.withdraw("ETH", AppConfig.WALLET_ADDRESS_ETH, 0.1, AppConfig.WALLET_DESCRIPTION_ETH);
  console.log("ADA", AppConfig.WALLET_ADDRESS_ADA, AppConfig.WALLET_DESCRIPTION_ETH, "ALL");
  await exchange.withdraw("ADA", AppConfig.WALLET_ADDRESS_ADA, undefined, AppConfig.WALLET_DESCRIPTION_ADA);

  console.log("DONE.");
}
