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
 * @interface UpdateTemplateResponse
 */
export interface UpdateTemplateResponse {
    /**
     * 
     * @type {string}
     * @memberof UpdateTemplateResponse
     */
    status: UpdateTemplateResponseStatusEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateTemplateResponse
     */
    errors?: Array<string>;
}


/**
 * @export
 */
export const UpdateTemplateResponseStatusEnum = {
    Success: 'success',
    Error: 'error'
} as const;
export type UpdateTemplateResponseStatusEnum = typeof UpdateTemplateResponseStatusEnum[keyof typeof UpdateTemplateResponseStatusEnum];


/**
 * Check if a given object implements the UpdateTemplateResponse interface.
 */
export function instanceOfUpdateTemplateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function UpdateTemplateResponseFromJSON(json: any): UpdateTemplateResponse {
    return UpdateTemplateResponseFromJSONTyped(json, false);
}

export function UpdateTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTemplateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function UpdateTemplateResponseToJSON(value?: UpdateTemplateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'errors': value.errors,
    };
}

