// ./src/lambda.ts
import type {
  Context,
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from 'aws-lambda';
import moment from 'moment';
import { logger } from './utils/logger';

export const handler: Handler = async (
  _event: APIGatewayProxyEventV2,
  _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
  logger.info('Hello, Lambda 1!');
  const lambdaMachineTime = moment();
  const toBogotaTime = lambdaMachineTime.clone().add(-5, 'hours');
  logger.info(lambdaMachineTime.format());
  logger.info(toBogotaTime.format());

  return {
    statusCode: 200,
    body: process.env.CUSTOM_VAR,
  };
};