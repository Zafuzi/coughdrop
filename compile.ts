import less from "less";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

(() => {
	const inFiles = ["coughdrop"];

	const outDir = "dist";

	inFiles.forEach((fileName) => {
		const inFile = path.resolve(__dirname, "src", fileName + ".less");
		const m = fs.readFileSync(inFile);

		if (!m) {
			throw new Error("Cannot compile missing file: " + fileName);
		}

		less.render(m.toString(), { compress: false, paths: ["src"] }, (e, output) => {
			if (!output || e) {
				throw new Error("failed to generate css: " + e.message);
			}

			const outFile = path.resolve(__dirname, "dist", fileName + ".css");
			writeFileSyncRecursive(outFile, output.css.toString());
			if (!fs.statSync(outFile)) {
				throw new Error("failed to write css");
			}
		});
	});
})();

function writeFileSyncRecursive(filename: string, content: string = ""): void {
	fs.mkdirSync(path.dirname(filename), { recursive: true });
	fs.writeFileSync(filename, content);
}
