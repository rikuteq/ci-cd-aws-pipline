#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdAwsPiplineStack } from '../lib/ci-cd-aws-pipline-stack';

const app = new cdk.App();
new CiCdAwsPiplineStack(app, 'CiCdAwsPiplineStack', {
  env: {
    account: '343218179849',
    region: 'us-east-2',
    
  }
});

app.synth();