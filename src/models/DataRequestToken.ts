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
 * @interface DataRequestToken
 */
export interface DataRequestToken {
    /**
     * 
     * @type {string}
     * @memberof DataRequestToken
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DataRequestToken
     */
    secret: string;
    /**
     * 
     * @type {string}
     * @memberof DataRequestToken
     */
    expiresAt: string;
    /**
     * 
     * @type {string}
     * @memberof DataRequestToken
     */
    dataRequestUrl: string;
}

/**
 * Check if a given object implements the DataRequestToken interface.
 */
export function instanceOfDataRequestToken(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "dataRequestUrl" in value;

    return isInstance;
}

export function DataRequestTokenFromJSON(json: any): DataRequestToken {
    return DataRequestTokenFromJSONTyped(json, false);
}

export function DataRequestTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataRequestToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'secret': json['secret'],
        'expiresAt': json['expires_at'],
        'dataRequestUrl': json['data_request_url'],
    };
}

export function DataRequestTokenToJSON(value?: DataRequestToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'secret': value.secret,
        'expires_at': value.expiresAt,
        'data_request_url': value.dataRequestUrl,
    };
}
