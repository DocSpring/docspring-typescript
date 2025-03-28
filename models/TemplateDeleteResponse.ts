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

export class TemplateDeleteResponse {
    'status': TemplateDeleteResponseStatusEnum;
    'errors'?: Array<string>;
    'latestVersion'?: string | null;
    'versions'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "TemplateDeleteResponseStatusEnum",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "latestVersion",
            "baseName": "latest_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateDeleteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TemplateDeleteResponseStatusEnum {
    Success = 'success',
    Error = 'error'
}

