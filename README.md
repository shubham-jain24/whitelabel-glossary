# Whitelabel Glossary

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white)
![API Gateway](https://img.shields.io/badge/AWS_API_Gateway-FF4F8B?style=for-the-badge&logo=amazon-aws&logoColor=white)
![DynamoDB](https://img.shields.io/badge/AWS_DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)



This application provides a common codebase to serve different whitelabel partners.

Whitelabels are partner companies that use our product with their branding, ensuring that consumers will never know they are using the same platform.

## Features

This application currently serves three different companies, providing each with their own workspace. Employees of these companies can:
- Post updates about their teams
- Announce new products
- Share launch information
- Organize team parties and more

## Whitelabel Identification

The application performs runtime identification of the whitelabel ID based on the **domain name**.

|**Domain**| **Whitelabel**  |
| ------------ | ------------ |
|   https://lays-blog-spot.vercel.app/ |   Lays|
|  https://siemens-blog-spot.vercel.app/ |   Siemens|
|   https://bmw-blog-spot.vercel.app/ |   BMW Cars|



## Technology Stack

The application is built using:

- **React.js**
- **Redux**
- **Tailwind**
- **AWS Serverless**
  - AWS Lambda
  - AWS API Gateway
  - DynamoDB (database)


