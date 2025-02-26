import * as cdk from 'aws-cdk-lib';
//import { Duration, Expiration } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { CfnOutput, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, 'L3Bucket',{
      lifecycleRules: [{
        expiration: Duration.days(expiration)
      }]
    })
  }

}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a S3 Bucket in 3 ways
    // L1 Construct
    new CfnBucket(this, 'L1Bucket',{
      lifecycleConfiguration:{
        rules:[{
          expirationInDays: 1,
          status: 'Enabled'
        }]
      }
    })
    // L2 Construct 
    new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(2)
      }]
    });
    //L3 Construct
    new L3Bucket(this, 'L3Bucket', 3);
  }
}
