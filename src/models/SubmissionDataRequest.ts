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
 * @interface SubmissionDataRequest
 */
export interface SubmissionDataRequest {
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    submissionId?: string;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    email: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubmissionDataRequest
     */
    order: number;
    /**
     * 
     * @type {number}
     * @memberof SubmissionDataRequest
     */
    sortOrder: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubmissionDataRequest
     */
    fields: Array<string> | null;
    /**
     * 
     * @type {object}
     * @memberof SubmissionDataRequest
     */
    metadata: object;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    state: SubmissionDataRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    viewedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    completedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authType?: SubmissionDataRequestAuthTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authSecondFactorType?: SubmissionDataRequestAuthSecondFactorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authProvider?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authSessionStartedAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authSessionIdHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authUserIdHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authUsernameHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    authPhoneNumberHash?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    ipAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubmissionDataRequest
     */
    userAgent?: string | null;
}


/**
 * @export
 */
export const SubmissionDataRequestStateEnum = {
    Pending: 'pending',
    Completed: 'completed'
} as const;
export type SubmissionDataRequestStateEnum = typeof SubmissionDataRequestStateEnum[keyof typeof SubmissionDataRequestStateEnum];

/**
 * @export
 */
export const SubmissionDataRequestAuthTypeEnum = {
    None: 'none',
    Password: 'password',
    Oauth: 'oauth',
    EmailLink: 'email_link',
    PhoneNumber: 'phone_number',
    Ldap: 'ldap',
    Saml: 'saml'
} as const;
export type SubmissionDataRequestAuthTypeEnum = typeof SubmissionDataRequestAuthTypeEnum[keyof typeof SubmissionDataRequestAuthTypeEnum];

/**
 * @export
 */
export const SubmissionDataRequestAuthSecondFactorTypeEnum = {
    None: 'none',
    PhoneNumber: 'phone_number',
    Totp: 'totp',
    MobilePush: 'mobile_push',
    SecurityKey: 'security_key',
    Fingerprint: 'fingerprint'
} as const;
export type SubmissionDataRequestAuthSecondFactorTypeEnum = typeof SubmissionDataRequestAuthSecondFactorTypeEnum[keyof typeof SubmissionDataRequestAuthSecondFactorTypeEnum];


/**
 * Check if a given object implements the SubmissionDataRequest interface.
 */
export function instanceOfSubmissionDataRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "order" in value;
    isInstance = isInstance && "sortOrder" in value;
    isInstance = isInstance && "fields" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function SubmissionDataRequestFromJSON(json: any): SubmissionDataRequest {
    return SubmissionDataRequestFromJSONTyped(json, false);
}

export function SubmissionDataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubmissionDataRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'submissionId': !exists(json, 'submission_id') ? undefined : json['submission_id'],
        'name': json['name'],
        'email': json['email'],
        'order': json['order'],
        'sortOrder': json['sort_order'],
        'fields': json['fields'],
        'metadata': json['metadata'],
        'state': json['state'],
        'viewedAt': !exists(json, 'viewed_at') ? undefined : json['viewed_at'],
        'completedAt': !exists(json, 'completed_at') ? undefined : json['completed_at'],
        'authType': !exists(json, 'auth_type') ? undefined : json['auth_type'],
        'authSecondFactorType': !exists(json, 'auth_second_factor_type') ? undefined : json['auth_second_factor_type'],
        'authProvider': !exists(json, 'auth_provider') ? undefined : json['auth_provider'],
        'authSessionStartedAt': !exists(json, 'auth_session_started_at') ? undefined : json['auth_session_started_at'],
        'authSessionIdHash': !exists(json, 'auth_session_id_hash') ? undefined : json['auth_session_id_hash'],
        'authUserIdHash': !exists(json, 'auth_user_id_hash') ? undefined : json['auth_user_id_hash'],
        'authUsernameHash': !exists(json, 'auth_username_hash') ? undefined : json['auth_username_hash'],
        'authPhoneNumberHash': !exists(json, 'auth_phone_number_hash') ? undefined : json['auth_phone_number_hash'],
        'ipAddress': !exists(json, 'ip_address') ? undefined : json['ip_address'],
        'userAgent': !exists(json, 'user_agent') ? undefined : json['user_agent'],
    };
}

export function SubmissionDataRequestToJSON(value?: SubmissionDataRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'submission_id': value.submissionId,
        'name': value.name,
        'email': value.email,
        'order': value.order,
        'sort_order': value.sortOrder,
        'fields': value.fields,
        'metadata': value.metadata,
        'state': value.state,
        'viewed_at': value.viewedAt,
        'completed_at': value.completedAt,
        'auth_type': value.authType,
        'auth_second_factor_type': value.authSecondFactorType,
        'auth_provider': value.authProvider,
        'auth_session_started_at': value.authSessionStartedAt,
        'auth_session_id_hash': value.authSessionIdHash,
        'auth_user_id_hash': value.authUserIdHash,
        'auth_username_hash': value.authUsernameHash,
        'auth_phone_number_hash': value.authPhoneNumberHash,
        'ip_address': value.ipAddress,
        'user_agent': value.userAgent,
    };
}

