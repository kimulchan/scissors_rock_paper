import getDiff from './Git/getDiff';
import getWorkspaceList from './Workspace/getWorkspaceList';

async function main() {
    const workspaceList = await getWorkspaceList();
    const diffFiles = await getDiff();
    const filterWorkspace = workspaceList.filter(({ location }) =>
        diffFiles.some((file) => file.startsWith(location)),
    );

    console.log(filterWorkspace.map((workspace) => workspace.name));
}

main();
