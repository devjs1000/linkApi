/** @format */

import fsp from "fs/promises";
import { INDEX } from "../constants/core.mjs";
import { exec } from "child_process";
import { importFinder } from "../helpers/importFinde.mjs";
import { isFile, writeFile, getFile } from "./fsUtils.mjs";
import { addImport } from "../helpers/addImport.mjs";

export const createIndex = async () => {
	const exists = isFile(INDEX);
	!exists && (await fsp.writeFile(INDEX, `console.log("hello world")`));
};

export const runCommand = (cmd) => {
	exec(cmd, (error, stdout, stderr) => {
		error && console.log(error);
		stderr != "" && console.log(stderr);
		stdout && console.log(stdout);
	});
};

export const runIndex = async () => runCommand(`node ${INDEX}`);
