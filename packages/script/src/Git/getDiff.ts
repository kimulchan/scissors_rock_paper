import execution from "../Shell/execution";
import splitSpacer from "../Utils/splitSpacer";

async function getDiff() {
  const { stdout } = await execution("git diff HEAD HEAD^ --name-only");
  return splitSpacer(stdout);
}

export default getDiff;
