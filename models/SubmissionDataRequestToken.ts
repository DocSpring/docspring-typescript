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

export class SubmissionDataRequestToken {
    'id': string | null;
    'secret': string;
    'expiresAt': string | null;
    'dataRequestUrl': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataRequestUrl",
            "baseName": "data_request_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubmissionDataRequestToken.attributeTypeMap;
    }

    public constructor() {
    }
}
