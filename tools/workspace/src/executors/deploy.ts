import { PromiseExecutor } from '@nx/devkit';
import { DeployExecutorSchema } from './schema';
import { exec } from 'node:child_process';

const runExecutor: PromiseExecutor<DeployExecutorSchema> = async (options, context) => {
  console.log('logging something', options);
  const projectName = context.projectName;
  exec(
    `docker build -f ${options.dockerFile} --build-arg='APP_NAME=${projectName}' . -t ${options.tag}`
  );
  return {
    success: true,
  };
};

export default runExecutor;
