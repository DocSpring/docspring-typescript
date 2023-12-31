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
 * @interface CreateCustomFileData
 */
export interface CreateCustomFileData {
    /**
     * 
     * @type {string}
     * @memberof CreateCustomFileData
     */
    cacheId: string;
}

/**
 * Check if a given object implements the CreateCustomFileData interface.
 */
export function instanceOfCreateCustomFileData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cacheId" in value;

    return isInstance;
}

export function CreateCustomFileDataFromJSON(json: any): CreateCustomFileData {
    return CreateCustomFileDataFromJSONTyped(json, false);
}

export function CreateCustomFileDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCustomFileData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cacheId': json['cache_id'],
    };
}

export function CreateCustomFileDataToJSON(value?: CreateCustomFileData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cache_id': value.cacheId,
    };
}

