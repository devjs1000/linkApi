/** @format */
import { writeFile, getFile } from "../utils/fsUtils.mjs";

export const addImport = async (fileName, module, imports) => {
	const statement = `import ${imports} from "${module}";`;
	const fileData = await getFile(fileName);
	const arrayFile = fileData.split("\n");
	arrayFile.unshift(statement);
	await writeFile(fileName, arrayFile.join("\n"));
};
