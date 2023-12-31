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
 * @interface PendingTemplate
 */
export interface PendingTemplate {
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    description: string | null;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    templateType: string;
    /**
     * 
     * @type {boolean}
     * @memberof PendingTemplate
     */
    publicWebForm: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PendingTemplate
     */
    publicSubmissions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PendingTemplate
     */
    expireSubmissions: boolean;
    /**
     * 
     * @type {number}
     * @memberof PendingTemplate
     */
    expireAfter?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PendingTemplate
     */
    locked: boolean;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    expirationInterval?: PendingTemplateExpirationIntervalEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PendingTemplate
     */
    allowAdditionalProperties: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PendingTemplate
     */
    editableSubmissions: boolean;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    webhookUrl: string | null;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    slackWebhookUrl: string | null;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    redirectUrl: string | null;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingTemplate
     */
    parentFolderId?: string | null;
}


/**
 * @export
 */
export const PendingTemplateExpirationIntervalEnum = {
    Minutes: 'minutes',
    Hours: 'hours',
    Days: 'days'
} as const;
export type PendingTemplateExpirationIntervalEnum = typeof PendingTemplateExpirationIntervalEnum[keyof typeof PendingTemplateExpirationIntervalEnum];


/**
 * Check if a given object implements the PendingTemplate interface.
 */
export function instanceOfPendingTemplate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "templateType" in value;
    isInstance = isInstance && "publicWebForm" in value;
    isInstance = isInstance && "publicSubmissions" in value;
    isInstance = isInstance && "expireSubmissions" in value;
    isInstance = isInstance && "locked" in value;
    isInstance = isInstance && "allowAdditionalProperties" in value;
    isInstance = isInstance && "editableSubmissions" in value;
    isInstance = isInstance && "webhookUrl" in value;
    isInstance = isInstance && "slackWebhookUrl" in value;
    isInstance = isInstance && "redirectUrl" in value;

    return isInstance;
}

export function PendingTemplateFromJSON(json: any): PendingTemplate {
    return PendingTemplateFromJSONTyped(json, false);
}

export function PendingTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'templateType': json['template_type'],
        'publicWebForm': json['public_web_form'],
        'publicSubmissions': json['public_submissions'],
        'expireSubmissions': json['expire_submissions'],
        'expireAfter': !exists(json, 'expire_after') ? undefined : json['expire_after'],
        'locked': json['locked'],
        'expirationInterval': !exists(json, 'expiration_interval') ? undefined : json['expiration_interval'],
        'allowAdditionalProperties': json['allow_additional_properties'],
        'editableSubmissions': json['editable_submissions'],
        'webhookUrl': json['webhook_url'],
        'slackWebhookUrl': json['slack_webhook_url'],
        'redirectUrl': json['redirect_url'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'parentFolderId': !exists(json, 'parent_folder_id') ? undefined : json['parent_folder_id'],
    };
}

export function PendingTemplateToJSON(value?: PendingTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'template_type': value.templateType,
        'public_web_form': value.publicWebForm,
        'public_submissions': value.publicSubmissions,
        'expire_submissions': value.expireSubmissions,
        'expire_after': value.expireAfter,
        'locked': value.locked,
        'expiration_interval': value.expirationInterval,
        'allow_additional_properties': value.allowAdditionalProperties,
        'editable_submissions': value.editableSubmissions,
        'webhook_url': value.webhookUrl,
        'slack_webhook_url': value.slackWebhookUrl,
        'redirect_url': value.redirectUrl,
        'path': value.path,
        'parent_folder_id': value.parentFolderId,
    };
}

