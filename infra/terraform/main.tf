# Configure the AWS Provider
provider "aws" {
  version = "~> 3.0"
  region  = "us-east-2"
}

# Create a VPC
resource "aws_vpc" "RaaS-vpc" {
  cidr_block = "10.0.0.0/16"
}
