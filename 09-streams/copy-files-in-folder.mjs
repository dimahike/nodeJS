import fs from "fs";
import path from "path";

const sourceDir = "./files";
const destinationDir = "./copied-files";

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source directory ${sourceDir} does not exist`);
  console.log("Exiting...");
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Remove .DS_Store file from the list of files for macOS users
  const filteredFileNames = fileNames.filter((name) => name !== ".DS_Store");
  console.log("Start", performance.now());

  filteredFileNames.forEach((fileName, index) => {
    const sourceFilePath = path.join(sourceDir, fileName);
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${fileName}`,
    );

    const readFileStream = fs.createReadStream(sourceFilePath);
    const writeFileStream = fs.createWriteStream(destinationFilePath);

    readFileStream.pipe(writeFileStream);

    writeFileStream.on("finish", () => console.log(`File ${fileName} copied`));
  });

  console.log("End", performance.now());
});
