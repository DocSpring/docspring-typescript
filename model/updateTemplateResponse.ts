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

export class UpdateTemplateResponse {
    'status': UpdateTemplateResponse.StatusEnum;
    'errors'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateTemplateResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UpdateTemplateResponse.attributeTypeMap;
    }
}

export namespace UpdateTemplateResponse {
    export enum StatusEnum {
        Success = <any> 'success',
        Error = <any> 'error'
    }
}
