import execution from '../Shell/execution';
import jsonParser from '../Utils/jsonParser';
import splitSpacer from '../Utils/splitSpacer';

async function getWorkspaceList() {
    const { stdout } = await execution('yarn workspaces list --json');
    const workspaceListArr = splitSpacer(stdout).map((workspace) =>
        jsonParser<{ location: string; name: string }>(workspace),
    );

    return workspaceListArr.filter(({ location }) => location !== '.');
}

export default getWorkspaceList;
