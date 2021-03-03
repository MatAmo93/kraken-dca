import { APIGatewayProxyHandler } from "aws-lambda";
import { IHandlerResponse } from "./types";
import { KrakenExchange } from "./exchanges/KrakenExchange";
import AppConfig from "./config/App";

export const trade: APIGatewayProxyHandler = async () => {
  console.log("EXEC account.trade");

  const exchange = new KrakenExchange();
  await exchange.createOrder("BUY", "ADA/EUR", AppConfig.ORDER_AMOUNT); // amount in quote currency

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Success. Account Trade"
  };

  return response;
};

export const withdraw: APIGatewayProxyHandler = async () => {
  console.log("EXEC account.withdraw");

  const exchange = new KrakenExchange();
  await exchange.withdraw("ADA", AppConfig.WALLET_ADDRESS_ADA, undefined, AppConfig.WALLET_DESCRIPTION_ADA);

  const response: IHandlerResponse = {
    statusCode: 200,
    body: "Success. Account Withdraw"
  };

  return response;
};
