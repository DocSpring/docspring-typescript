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
 * @interface HtmlTemplateData
 */
export interface HtmlTemplateData {
    /**
     * 
     * @type {boolean}
     * @memberof HtmlTemplateData
     */
    allowAdditionalProperties?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof HtmlTemplateData
     */
    editableSubmissions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    expirationInterval?: HtmlTemplateDataExpirationIntervalEnum;
    /**
     * 
     * @type {number}
     * @memberof HtmlTemplateData
     */
    expireAfter?: number;
    /**
     * 
     * @type {boolean}
     * @memberof HtmlTemplateData
     */
    expireSubmissions?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    footerHtml?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    headerHtml?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    html?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    name: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof HtmlTemplateData
     */
    publicSubmissions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HtmlTemplateData
     */
    publicWebForm?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    redirectUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    scss?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    slackWebhookUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    templateType?: HtmlTemplateDataTemplateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof HtmlTemplateData
     */
    webhookUrl?: string | null;
}


/**
 * @export
 */
export const HtmlTemplateDataExpirationIntervalEnum = {
    Minutes: 'minutes',
    Hours: 'hours',
    Days: 'days'
} as const;
export type HtmlTemplateDataExpirationIntervalEnum = typeof HtmlTemplateDataExpirationIntervalEnum[keyof typeof HtmlTemplateDataExpirationIntervalEnum];

/**
 * @export
 */
export const HtmlTemplateDataTemplateTypeEnum = {
    Pdf: 'pdf',
    Html: 'html'
} as const;
export type HtmlTemplateDataTemplateTypeEnum = typeof HtmlTemplateDataTemplateTypeEnum[keyof typeof HtmlTemplateDataTemplateTypeEnum];


/**
 * Check if a given object implements the HtmlTemplateData interface.
 */
export function instanceOfHtmlTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function HtmlTemplateDataFromJSON(json: any): HtmlTemplateData {
    return HtmlTemplateDataFromJSONTyped(json, false);
}

export function HtmlTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HtmlTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowAdditionalProperties': !exists(json, 'allow_additional_properties') ? undefined : json['allow_additional_properties'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'editableSubmissions': !exists(json, 'editable_submissions') ? undefined : json['editable_submissions'],
        'expirationInterval': !exists(json, 'expiration_interval') ? undefined : json['expiration_interval'],
        'expireAfter': !exists(json, 'expire_after') ? undefined : json['expire_after'],
        'expireSubmissions': !exists(json, 'expire_submissions') ? undefined : json['expire_submissions'],
        'footerHtml': !exists(json, 'footer_html') ? undefined : json['footer_html'],
        'headerHtml': !exists(json, 'header_html') ? undefined : json['header_html'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'name': json['name'],
        'publicSubmissions': !exists(json, 'public_submissions') ? undefined : json['public_submissions'],
        'publicWebForm': !exists(json, 'public_web_form') ? undefined : json['public_web_form'],
        'redirectUrl': !exists(json, 'redirect_url') ? undefined : json['redirect_url'],
        'scss': !exists(json, 'scss') ? undefined : json['scss'],
        'slackWebhookUrl': !exists(json, 'slack_webhook_url') ? undefined : json['slack_webhook_url'],
        'templateType': !exists(json, 'template_type') ? undefined : json['template_type'],
        'webhookUrl': !exists(json, 'webhook_url') ? undefined : json['webhook_url'],
    };
}

export function HtmlTemplateDataToJSON(value?: HtmlTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allow_additional_properties': value.allowAdditionalProperties,
        'description': value.description,
        'editable_submissions': value.editableSubmissions,
        'expiration_interval': value.expirationInterval,
        'expire_after': value.expireAfter,
        'expire_submissions': value.expireSubmissions,
        'footer_html': value.footerHtml,
        'header_html': value.headerHtml,
        'html': value.html,
        'name': value.name,
        'public_submissions': value.publicSubmissions,
        'public_web_form': value.publicWebForm,
        'redirect_url': value.redirectUrl,
        'scss': value.scss,
        'slack_webhook_url': value.slackWebhookUrl,
        'template_type': value.templateType,
        'webhook_url': value.webhookUrl,
    };
}
