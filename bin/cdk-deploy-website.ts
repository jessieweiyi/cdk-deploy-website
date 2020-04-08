#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDeployWebsiteStack } from '../lib/cdk-deploy-website-stack';

const app = new cdk.App();
new CdkDeployWebsiteStack(app, 'CdkDeployWebsiteStack');
