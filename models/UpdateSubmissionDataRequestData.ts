/**
 * DocSpring API
 * DocSpring provides an API that helps you fill out and sign PDF templates.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class UpdateSubmissionDataRequestData {
    'authType'?: UpdateSubmissionDataRequestDataAuthTypeEnum;
    'fields'?: Array<string>;
    'metadata'?: any;
    'order'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authType",
            "baseName": "auth_type",
            "type": "UpdateSubmissionDataRequestDataAuthTypeEnum",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateSubmissionDataRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateSubmissionDataRequestDataAuthTypeEnum {
    None = 'none',
    Password = 'password',
    Oauth = 'oauth',
    EmailLink = 'email_link',
    PhoneNumber = 'phone_number',
    Ldap = 'ldap',
    Saml = 'saml'
}

