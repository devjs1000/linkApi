export const importFinder = (data) => {
	const importFindRegex = RegExp("import *", "g");
	return Array.from(
		new Set(
			importFindRegex
				.exec(data.trim())
				.input.split("\n")
				.filter((a) => a !== ""),
		),
	).map(a=>{
        const arr=a.split(' ');
        return ({
            name:arr[1],
            module:arr[3].replace(';', '')
        })
    })
};
