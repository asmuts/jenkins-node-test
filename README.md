# jenkins-node-test
Project to be used to verify Jenkins deployment on AWS EC2.

AWS CodePipeline is notified by GitHub of changes via a webhook.
AWS CP tells Jenkins running on AWS EC2 to build via the CodePipeline plugin.
Jenkins runs the tests.
If succesful, AWS CP depoys the sample to AWS Elastic Beanstalk.

http://jenkinsnodetest.us-east-1.elasticbeanstalk.com/


I have another Jenkins build process registed for this project directly, not through AWC CP. 
This project is just for tesing configuration, IAM roles, etc.


