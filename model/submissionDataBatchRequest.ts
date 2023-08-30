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

import { RequestFile } from './models';

export class SubmissionDataBatchRequest {
    'css'?: string;
    'data': object;
    'html'?: string;
    'metadata'?: object;
    'templateId': string | null;
    'test'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "css",
            "baseName": "css",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "templateId",
            "baseName": "template_id",
            "type": "string"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubmissionDataBatchRequest.attributeTypeMap;
    }
}

