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
import type { CreateSubmissionBatchSubmissionsResponse } from './CreateSubmissionBatchSubmissionsResponse';
import {
    CreateSubmissionBatchSubmissionsResponseFromJSON,
    CreateSubmissionBatchSubmissionsResponseFromJSONTyped,
    CreateSubmissionBatchSubmissionsResponseToJSON,
} from './CreateSubmissionBatchSubmissionsResponse';
import type { SubmissionBatch } from './SubmissionBatch';
import {
    SubmissionBatchFromJSON,
    SubmissionBatchFromJSONTyped,
    SubmissionBatchToJSON,
} from './SubmissionBatch';

/**
 * 
 * @export
 * @interface CreateSubmissionBatchResponse
 */
export interface CreateSubmissionBatchResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionBatchResponse
     */
    status: CreateSubmissionBatchResponseStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionBatchResponse
     */
    error?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateSubmissionBatchResponse
     */
    errors?: Array<string>;
    /**
     * 
     * @type {SubmissionBatch}
     * @memberof CreateSubmissionBatchResponse
     */
    submissionBatch: SubmissionBatch;
    /**
     * 
     * @type {Array<CreateSubmissionBatchSubmissionsResponse>}
     * @memberof CreateSubmissionBatchResponse
     */
    submissions: Array<CreateSubmissionBatchSubmissionsResponse>;
}


/**
 * @export
 */
export const CreateSubmissionBatchResponseStatusEnum = {
    Success: 'success',
    Error: 'error'
} as const;
export type CreateSubmissionBatchResponseStatusEnum = typeof CreateSubmissionBatchResponseStatusEnum[keyof typeof CreateSubmissionBatchResponseStatusEnum];


/**
 * Check if a given object implements the CreateSubmissionBatchResponse interface.
 */
export function instanceOfCreateSubmissionBatchResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "submissionBatch" in value;
    isInstance = isInstance && "submissions" in value;

    return isInstance;
}

export function CreateSubmissionBatchResponseFromJSON(json: any): CreateSubmissionBatchResponse {
    return CreateSubmissionBatchResponseFromJSONTyped(json, false);
}

export function CreateSubmissionBatchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubmissionBatchResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'submissionBatch': SubmissionBatchFromJSON(json['submission_batch']),
        'submissions': ((json['submissions'] as Array<any>).map(CreateSubmissionBatchSubmissionsResponseFromJSON)),
    };
}

export function CreateSubmissionBatchResponseToJSON(value?: CreateSubmissionBatchResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'error': value.error,
        'errors': value.errors,
        'submission_batch': SubmissionBatchToJSON(value.submissionBatch),
        'submissions': ((value.submissions as Array<any>).map(CreateSubmissionBatchSubmissionsResponseToJSON)),
    };
}

