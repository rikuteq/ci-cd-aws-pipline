import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { SecretValue } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { pipeline } from 'stream';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CiCdAwsPiplineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //GitHub token from AWS Secrets Manager
    const githubToken = SecretValue.secretsManager('github-token');

    // The code that defines your stack goes here
    new CodePipeline(this, 'CiCdAwsPiplinePipeline', {
      pipelineName: 'CiCdAwsPiplinePipeline',
      synth: new ShellStep('Synth', {
            input: CodePipelineSource.gitHub('rikuteq/ci-cd-aws-pipline', 'main', {
              authentication: githubToken,
            }),
            commands: [
              'npm ci',
              'npm run build',
              'npx cdk synth'
            ],
          })
        })
      }; 
  }

