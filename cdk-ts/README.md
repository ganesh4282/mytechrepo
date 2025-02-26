# CDK (Cloud Development Kit)

This sections covers CDK using TypeScript

## Install CDK using npm & Deploy Sample App
```
MINGW64 /c/Gans
$ npm i -g aws-cdk

added 1 package in 4s
npm notice
npm notice New patch version of npm available! 9.6.3 -> 9.6.4
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.6.4
npm notice Run npm install -g npm@9.6.4 to update!
npm notice

MINGW64 /c/Gans
$ cdk --version
2.74.0 (build 70e2a33)

MINGW64 /c/Gans
$ cd MyDevOpsScripts/cdk-ts/

MINGW64 /c/Gans/MyDevOpsScripts/cdk-ts (master)
$ cdk init
Available templates:
* app: Template for a CDK Application
   └─ cdk init app --language=[csharp|fsharp|go|java|javascript|python|typescript]
* lib: Template for a CDK Construct Library
   └─ cdk init lib --language=typescript
* sample-app: Example CDK Application with some constructs
   └─ cdk init sample-app --language=[csharp|fsharp|go|java|javascript|python|typescript]

MINGW64 /c/Gans/MyDevOpsScripts/cdk-ts (master)
$ cd cdk-starter/

MINGW64 /c/Gans/MyDevOpsScripts/cdk-ts/cdk-starter (master)
$ cdk init --language=typescript
Applying project template app for typescript
# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

Executing npm install...
✅ All done!
 
$ cdk bootstrap
 ⏳  Bootstrapping environment aws://288XXXXXX642/us-west-2...
Trusted accounts for deployment: (none)
Trusted accounts for lookup: (none)
Using default execution policy of 'arn:aws:iam::aws:policy/AdministratorAccess'. Pass '--cloudformation-execution-policies' to customize.
CDKToolkit: creating CloudFormation changeset...
CDKToolkit |  0/12 | 9:35:11 AM | REVIEW_IN_PROGRESS   | AWS::CloudFormation::Stack | CDKToolkit User Initiated
CDKToolkit |  0/12 | 9:35:17 AM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack | CDKToolkit User Initiated
CDKToolkit |  0/12 | 9:35:21 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | LookupRole
CDKToolkit |  0/12 | 9:35:21 AM | CREATE_IN_PROGRESS   | AWS::S3::Bucket         | StagingBucket
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::SSM::Parameter     | CdkBootstrapVersion
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | CloudFormationExecutionRole
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | ImagePublishingRole
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | FilePublishingRole
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::ECR::Repository    | ContainerAssetsRepository
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | LookupRole Resource creation Initiated
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | CloudFormationExecutionRole Resource creation Initiated
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | FilePublishingRole Resource creation Initiated
CDKToolkit |  0/12 | 9:35:22 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | ImagePublishingRole Resource creation Initiated
CDKToolkit |  0/12 | 9:35:23 AM | CREATE_IN_PROGRESS   | AWS::S3::Bucket         | StagingBucket Resource creation Initiated
CDKToolkit |  0/12 | 9:35:23 AM | CREATE_IN_PROGRESS   | AWS::SSM::Parameter     | CdkBootstrapVersion Resource creation Initiated
CDKToolkit |  0/12 | 9:35:23 AM | CREATE_IN_PROGRESS   | AWS::ECR::Repository    | ContainerAssetsRepository Resource creation Initiated
CDKToolkit |  1/12 | 9:35:23 AM | CREATE_COMPLETE      | AWS::ECR::Repository    | ContainerAssetsRepository
CDKToolkit |  2/12 | 9:35:23 AM | CREATE_COMPLETE      | AWS::SSM::Parameter     | CdkBootstrapVersion
CDKToolkit |  3/12 | 9:35:37 AM | CREATE_COMPLETE      | AWS::IAM::Role          | CloudFormationExecutionRole 
CDKToolkit |  4/12 | 9:35:37 AM | CREATE_COMPLETE      | AWS::IAM::Role          | FilePublishingRole
CDKToolkit |  5/12 | 9:35:37 AM | CREATE_COMPLETE      | AWS::IAM::Role          | ImagePublishingRole
CDKToolkit |  6/12 | 9:35:38 AM | CREATE_COMPLETE      | AWS::IAM::Role          | LookupRole
CDKToolkit |  6/12 | 9:35:39 AM | CREATE_IN_PROGRESS   | AWS::IAM::Policy        | ImagePublishingRoleDefaultPolicy
CDKToolkit |  6/12 | 9:35:40 AM | CREATE_IN_PROGRESS   | AWS::IAM::Policy        | ImagePublishingRoleDefaultPolicy Resource creation Initiated
CDKToolkit |  7/12 | 9:35:45 AM | CREATE_COMPLETE      | AWS::S3::Bucket         | StagingBucket
CDKToolkit |  7/12 | 9:35:46 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | DeploymentActionRole 
CDKToolkit |  7/12 | 9:35:46 AM | CREATE_IN_PROGRESS   | AWS::S3::BucketPolicy   | StagingBucketPolicy
CDKToolkit |  7/12 | 9:35:46 AM | CREATE_IN_PROGRESS   | AWS::IAM::Policy        | FilePublishingRoleDefaultPolicy
CDKToolkit |  7/12 | 9:35:47 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role          | DeploymentActionRole Resource creation Initiated
CDKToolkit |  7/12 | 9:35:47 AM | CREATE_IN_PROGRESS   | AWS::IAM::Policy        | FilePublishingRoleDefaultPolicy Resource creation Initiated
CDKToolkit |  7/12 | 9:35:47 AM | CREATE_IN_PROGRESS   | AWS::S3::BucketPolicy   | StagingBucketPolicy Resource creation Initiated
CDKToolkit |  8/12 | 9:35:47 AM | CREATE_COMPLETE      | AWS::S3::BucketPolicy   | StagingBucketPolicy
CDKToolkit |  9/12 | 9:35:54 AM | CREATE_COMPLETE      | AWS::IAM::Policy        | ImagePublishingRoleDefaultPolicy 
CDKToolkit | 10/12 | 9:36:01 AM | CREATE_COMPLETE      | AWS::IAM::Policy        | FilePublishingRoleDefaultPolicy 
CDKToolkit | 11/12 | 9:36:02 AM | CREATE_COMPLETE      | AWS::IAM::Role          | DeploymentActionRole
CDKToolkit | 12/12 | 9:36:04 AM | CREATE_COMPLETE      | AWS::CloudFormation::Stack | CDKToolkit 
 ✅  Environment aws://288XXXXXX642/us-west-2 bootstrapped.

$ cdk deploy

✨  Synthesis time: 4.39s

CdkStarterStack: building assets...

[0%] start: Building f54dd0f19d4ca1dca0:current_account-current_region
[100%] success: Built f54dd0f19d4ca1dca0:current_account-current_region

CdkStarterStack: assets built

CdkStarterStack: deploying... [1/1]
[0%] start: Publishing f54dd0f19d4ca1dca0:current_account-current_region
[100%] success: Published f54dd0f19d4ca1dca0:current_account-current_region
CdkStarterStack: creating CloudFormation changeset...
CdkStarterStack | 0/2 | 9:40:14 AM | REVIEW_IN_PROGRESS   | AWS::CloudFormation::Stack | CdkStarterStack User Initiated
CdkStarterStack | 0/2 | 9:40:20 AM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack | CdkStarterStack User Initiated
CdkStarterStack | 0/2 | 9:40:24 AM | CREATE_IN_PROGRESS   | AWS::CDK::Metadata | CDKMetadata/Default (CDKMetadata) 
CdkStarterStack | 0/2 | 9:40:25 AM | CREATE_IN_PROGRESS   | AWS::CDK::Metadata | CDKMetadata/Default (CDKMetadata) Resource creation Initiated
CdkStarterStack | 1/2 | 9:40:25 AM | CREATE_COMPLETE      | AWS::CDK::Metadata | CDKMetadata/Default (CDKMetadata) 
CdkStarterStack | 2/2 | 9:40:26 AM | CREATE_COMPLETE      | AWS::CloudFormation::Stack | CdkStarterStack 

 ✅  CdkStarterStack

✨  Deployment time: 16.28s

Stack ARN:
arn:aws:cloudformation:us-west-2:288XXXXXX642:stack/CdkStarterStack/992480a0-dc64-11ed-9836-0234bfee6bcf

✨  Total time: 20.67s
```

------------------------------------------------------------------------------------------
## Folder Structure 

```
cdk-starter
   |
   |- bin/cdk-starter.ts               - Application Starts here [ Kind of Root Stack file]
   |- lib/cdk-started-stack.ts         - Stack Defined here      [ This folder contains individual stack definition ]
   |- cdk.out/*                        - CF template 
   |- node-modules/*
   |- test/*
   |- cdk.json
   |- package.json
   |- tsconfig.json
```
------------------------------------------------------------------------------------------
## Constructs Type

```
L1 - Low Level  - Cfn resources, when used, we must configure all properties 
L2 - High Level - CDK provides additional functionality like defaults, boiler plate 
                  and type safety for many parameters
L3 - Patterns   - Combine multiple types of resources and help with common tasks in AWS.
```

------------------------------------------------------------------------------------------
## Commands

```
cdk init app --language typescript  - Initilize CDK 
cdk bootstrap                       - Initilizing the aws account to deploy cdk apps
cdk deploy                          - Deploy the app 
cdk synth                           - Create cloudformation template
cdk list                            - List of stacks
cdk diff                            - Kind of ChangeSet in Cloudformation
cdk doctor                          - To Debug the problems 
cdk destroy <stack>                 - Destroy the CDK Stack 
```
------------------------------------------------------------------------------------------