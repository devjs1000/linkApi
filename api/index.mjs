/** @format */

// import fsp from "fs/promises";
// import { INDEX } from "./constants/core.mjs";
// import { exec } from "child_process";
// import { importFinder } from "./helpers/importFinde.mjs";
// import { isFile, writeFile, getFile } from "./utils/fsUtils.mjs";
// import { addImport } from "./helpers/addImport.mjs";
import {createIndex, runCommand, runIndex} from './utils/linkUtils.mjs'

createIndex();
runIndex();
