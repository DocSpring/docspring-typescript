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
import type { SubmissionDataRequest } from './SubmissionDataRequest';
import {
    SubmissionDataRequestFromJSON,
    SubmissionDataRequestFromJSONTyped,
    SubmissionDataRequestToJSON,
} from './SubmissionDataRequest';

/**
 * 
 * @export
 * @interface UpdateDataRequestResponse
 */
export interface UpdateDataRequestResponse {
    /**
     * 
     * @type {string}
     * @memberof UpdateDataRequestResponse
     */
    status: UpdateDataRequestResponseStatusEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateDataRequestResponse
     */
    errors?: Array<string>;
    /**
     * 
     * @type {SubmissionDataRequest}
     * @memberof UpdateDataRequestResponse
     */
    dataRequest: SubmissionDataRequest;
}


/**
 * @export
 */
export const UpdateDataRequestResponseStatusEnum = {
    Success: 'success',
    Error: 'error'
} as const;
export type UpdateDataRequestResponseStatusEnum = typeof UpdateDataRequestResponseStatusEnum[keyof typeof UpdateDataRequestResponseStatusEnum];


/**
 * Check if a given object implements the UpdateDataRequestResponse interface.
 */
export function instanceOfUpdateDataRequestResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "dataRequest" in value;

    return isInstance;
}

export function UpdateDataRequestResponseFromJSON(json: any): UpdateDataRequestResponse {
    return UpdateDataRequestResponseFromJSONTyped(json, false);
}

export function UpdateDataRequestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDataRequestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'dataRequest': SubmissionDataRequestFromJSON(json['data_request']),
    };
}

export function UpdateDataRequestResponseToJSON(value?: UpdateDataRequestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'errors': value.errors,
        'data_request': SubmissionDataRequestToJSON(value.dataRequest),
    };
}

