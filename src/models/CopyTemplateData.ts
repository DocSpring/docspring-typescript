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
 * @interface CopyTemplateData
 */
export interface CopyTemplateData {
    /**
     * 
     * @type {string}
     * @memberof CopyTemplateData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CopyTemplateData
     */
    parentFolderId: string;
}

/**
 * Check if a given object implements the CopyTemplateData interface.
 */
export function instanceOfCopyTemplateData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "parentFolderId" in value;

    return isInstance;
}

export function CopyTemplateDataFromJSON(json: any): CopyTemplateData {
    return CopyTemplateDataFromJSONTyped(json, false);
}

export function CopyTemplateDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTemplateData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parentFolderId': json['parent_folder_id'],
    };
}

export function CopyTemplateDataToJSON(value?: CopyTemplateData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'parent_folder_id': value.parentFolderId,
    };
}

