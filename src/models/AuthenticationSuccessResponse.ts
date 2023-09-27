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
 * @interface AuthenticationSuccessResponse
 */
export interface AuthenticationSuccessResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationSuccessResponse
     */
    status: AuthenticationSuccessResponseStatusEnum;
}


/**
 * @export
 */
export const AuthenticationSuccessResponseStatusEnum = {
    Success: 'success'
} as const;
export type AuthenticationSuccessResponseStatusEnum = typeof AuthenticationSuccessResponseStatusEnum[keyof typeof AuthenticationSuccessResponseStatusEnum];


/**
 * Check if a given object implements the AuthenticationSuccessResponse interface.
 */
export function instanceOfAuthenticationSuccessResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function AuthenticationSuccessResponseFromJSON(json: any): AuthenticationSuccessResponse {
    return AuthenticationSuccessResponseFromJSONTyped(json, false);
}

export function AuthenticationSuccessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticationSuccessResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function AuthenticationSuccessResponseToJSON(value?: AuthenticationSuccessResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

