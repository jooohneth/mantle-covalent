import "dotenv/config";
import { CovalentClient } from "@covalenthq/client-sdk";

const client = new CovalentClient(process.env.API_KEY);
