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

export class DeleteTemplateResponse {
    'status': DeleteTemplateResponse.StatusEnum;
    'errors'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "DeleteTemplateResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return DeleteTemplateResponse.attributeTypeMap;
    }
}

export namespace DeleteTemplateResponse {
    export enum StatusEnum {
        Success = <any> 'success',
        Error = <any> 'error'
    }
}
