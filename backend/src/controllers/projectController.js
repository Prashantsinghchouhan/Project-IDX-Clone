import child_process from "child_process";
import util from "util";
import fs from "fs/promises";
import uuid from "uuid4";
const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req, res) => {
  try {
    const projectId = uuid4();
    console.log("New project id is:", projectId);
    await fs.mkdir(`./projects/${projectId}`);

    const response = await execPromisified(
      "npm create vite@latest sandbox -- --template react",
      {
        cwd: `./projects/${projectId}`,
      }
    );

    return res.json({ message: "Project Created", data: projectId });
  } catch (error) {
    console.error("Execution error:", error);
    return res
      .status(500)
      .json({ message: "Project creation failed", error: error.message });
  }
};
