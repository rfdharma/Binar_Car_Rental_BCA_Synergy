import { Knex } from "knex";
import * as fs from "fs";
import * as path from "path";

export async function seed(knex: Knex): Promise<void> {
  await knex("cars").del();

  const jsonFilePath = path.join(__dirname, "../../data/cars.json");

  const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

  await knex("cars").insert(data);
}
