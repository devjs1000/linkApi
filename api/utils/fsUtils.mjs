/** @format */

import fs from "fs";

export const isFile = (fileName) => fs.existsSync(fileName);

export const getFile = async (fileName) => fs.readFileSync(fileName, "utf8");

export const writeFile = async (fileName, data) =>
	fs.writeFileSync(fileName, data);
