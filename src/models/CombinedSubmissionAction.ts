/* tslint:disable */
/* eslint-disable */
/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CombinedSubmissionAction
 */
export interface CombinedSubmissionAction {
    /**
     * 
     * @type {string}
     * @memberof CombinedSubmissionAction
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CombinedSubmissionAction
     */
    integrationId: string | null;
    /**
     * 
     * @type {string}
     * @memberof CombinedSubmissionAction
     */
    state: CombinedSubmissionActionStateEnum;
    /**
     * 
     * @type {string}
     * @memberof CombinedSubmissionAction
     */
    actionCategory: CombinedSubmissionActionActionCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof CombinedSubmissionAction
     */
    actionType: CombinedSubmissionActionActionTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof CombinedSubmissionAction
     */
    resultData: object;
}


/**
 * @export
 */
export const CombinedSubmissionActionStateEnum = {
    Pending: 'pending',
    Processed: 'processed',
    Failed: 'failed',
    Error: 'error'
} as const;
export type CombinedSubmissionActionStateEnum = typeof CombinedSubmissionActionStateEnum[keyof typeof CombinedSubmissionActionStateEnum];

/**
 * @export
 */
export const CombinedSubmissionActionActionCategoryEnum = {
    Notification: 'notification',
    FileUpload: 'file_upload'
} as const;
export type CombinedSubmissionActionActionCategoryEnum = typeof CombinedSubmissionActionActionCategoryEnum[keyof typeof CombinedSubmissionActionActionCategoryEnum];

/**
 * @export
 */
export const CombinedSubmissionActionActionTypeEnum = {
    Webhook: 'webhook',
    SlackWebhook: 'slack_webhook',
    Email: 'email',
    AwsS3Upload: 'aws_s3_upload'
} as const;
export type CombinedSubmissionActionActionTypeEnum = typeof CombinedSubmissionActionActionTypeEnum[keyof typeof CombinedSubmissionActionActionTypeEnum];


/**
 * Check if a given object implements the CombinedSubmissionAction interface.
 */
export function instanceOfCombinedSubmissionAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "integrationId" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "actionCategory" in value;
    isInstance = isInstance && "actionType" in value;
    isInstance = isInstance && "resultData" in value;

    return isInstance;
}

export function CombinedSubmissionActionFromJSON(json: any): CombinedSubmissionAction {
    return CombinedSubmissionActionFromJSONTyped(json, false);
}

export function CombinedSubmissionActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CombinedSubmissionAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'integrationId': json['integration_id'],
        'state': json['state'],
        'actionCategory': json['action_category'],
        'actionType': json['action_type'],
        'resultData': json['result_data'],
    };
}

export function CombinedSubmissionActionToJSON(value?: CombinedSubmissionAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'integration_id': value.integrationId,
        'state': value.state,
        'action_category': value.actionCategory,
        'action_type': value.actionType,
        'result_data': value.resultData,
    };
}

