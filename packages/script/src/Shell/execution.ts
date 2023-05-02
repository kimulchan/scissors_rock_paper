import { exec } from 'child_process';

type ExecPromiseType<OutT, ErrT> = {
    stdout: OutT;
    stderr: ErrT;
};

async function execution<OutT extends string = string, ErrT extends string = string>(cmd: string) {
    return new Promise<ExecPromiseType<OutT, ErrT>>(function (resolve, reject) {
        exec(cmd, (err, stdout, stderr) => {
            if (err) reject(err);
            else resolve({ stdout, stderr } as ExecPromiseType<OutT, ErrT>);
        });
    });
}

export default execution;
