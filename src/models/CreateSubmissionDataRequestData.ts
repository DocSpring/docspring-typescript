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
 * @interface CreateSubmissionDataRequestData
 */
export interface CreateSubmissionDataRequestData {
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authPhoneNumberHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authProvider?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authSecondFactorType?: CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authSessionIdHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authSessionStartedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authType: CreateSubmissionDataRequestDataAuthTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authUserIdHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    authUsernameHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    email: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateSubmissionDataRequestData
     */
    fields?: Array<string> | null;
    /**
     * 
     * @type {object}
     * @memberof CreateSubmissionDataRequestData
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof CreateSubmissionDataRequestData
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateSubmissionDataRequestData
     */
    order?: number;
}


/**
 * @export
 */
export const CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = {
    None: 'none',
    PhoneNumber: 'phone_number',
    Totp: 'totp',
    MobilePush: 'mobile_push',
    SecurityKey: 'security_key',
    Fingerprint: 'fingerprint'
} as const;
export type CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = typeof CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum[keyof typeof CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum];

/**
 * @export
 */
export const CreateSubmissionDataRequestDataAuthTypeEnum = {
    None: 'none',
    Password: 'password',
    Oauth: 'oauth',
    EmailLink: 'email_link',
    PhoneNumber: 'phone_number',
    Ldap: 'ldap',
    Saml: 'saml'
} as const;
export type CreateSubmissionDataRequestDataAuthTypeEnum = typeof CreateSubmissionDataRequestDataAuthTypeEnum[keyof typeof CreateSubmissionDataRequestDataAuthTypeEnum];


/**
 * Check if a given object implements the CreateSubmissionDataRequestData interface.
 */
export function instanceOfCreateSubmissionDataRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "authType" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function CreateSubmissionDataRequestDataFromJSON(json: any): CreateSubmissionDataRequestData {
    return CreateSubmissionDataRequestDataFromJSONTyped(json, false);
}

export function CreateSubmissionDataRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubmissionDataRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authPhoneNumberHash': !exists(json, 'auth_phone_number_hash') ? undefined : json['auth_phone_number_hash'],
        'authProvider': !exists(json, 'auth_provider') ? undefined : json['auth_provider'],
        'authSecondFactorType': !exists(json, 'auth_second_factor_type') ? undefined : json['auth_second_factor_type'],
        'authSessionIdHash': !exists(json, 'auth_session_id_hash') ? undefined : json['auth_session_id_hash'],
        'authSessionStartedAt': !exists(json, 'auth_session_started_at') ? undefined : json['auth_session_started_at'],
        'authType': json['auth_type'],
        'authUserIdHash': !exists(json, 'auth_user_id_hash') ? undefined : json['auth_user_id_hash'],
        'authUsernameHash': !exists(json, 'auth_username_hash') ? undefined : json['auth_username_hash'],
        'email': json['email'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function CreateSubmissionDataRequestDataToJSON(value?: CreateSubmissionDataRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auth_phone_number_hash': value.authPhoneNumberHash,
        'auth_provider': value.authProvider,
        'auth_second_factor_type': value.authSecondFactorType,
        'auth_session_id_hash': value.authSessionIdHash,
        'auth_session_started_at': value.authSessionStartedAt,
        'auth_type': value.authType,
        'auth_user_id_hash': value.authUserIdHash,
        'auth_username_hash': value.authUsernameHash,
        'email': value.email,
        'fields': value.fields,
        'metadata': value.metadata,
        'name': value.name,
        'order': value.order,
    };
}
