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
import { CreateSubmissionDataRequestTokenResponseToken } from './createSubmissionDataRequestTokenResponseToken';

export class CreateSubmissionDataRequestTokenResponse {
    'status': CreateSubmissionDataRequestTokenResponse.StatusEnum;
    'errors'?: Array<string>;
    'token': CreateSubmissionDataRequestTokenResponseToken;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateSubmissionDataRequestTokenResponse.StatusEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "CreateSubmissionDataRequestTokenResponseToken"
        }    ];

    static getAttributeTypeMap() {
        return CreateSubmissionDataRequestTokenResponse.attributeTypeMap;
    }
}

export namespace CreateSubmissionDataRequestTokenResponse {
    export enum StatusEnum {
        Success = <any> 'success',
        Error = <any> 'error'
    }
}
