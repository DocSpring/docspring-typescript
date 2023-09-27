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
 * @interface TemplateDocumentMetadata
 */
export interface TemplateDocumentMetadata {
    /**
     * 
     * @type {string}
     * @memberof TemplateDocumentMetadata
     */
    filename: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateDocumentMetadata
     */
    mimeType: TemplateDocumentMetadataMimeTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TemplateDocumentMetadata
     */
    size: number;
}


/**
 * @export
 */
export const TemplateDocumentMetadataMimeTypeEnum = {
    ApplicationPdf: 'application/pdf'
} as const;
export type TemplateDocumentMetadataMimeTypeEnum = typeof TemplateDocumentMetadataMimeTypeEnum[keyof typeof TemplateDocumentMetadataMimeTypeEnum];


/**
 * Check if a given object implements the TemplateDocumentMetadata interface.
 */
export function instanceOfTemplateDocumentMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "filename" in value;
    isInstance = isInstance && "mimeType" in value;
    isInstance = isInstance && "size" in value;

    return isInstance;
}

export function TemplateDocumentMetadataFromJSON(json: any): TemplateDocumentMetadata {
    return TemplateDocumentMetadataFromJSONTyped(json, false);
}

export function TemplateDocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateDocumentMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filename': json['filename'],
        'mimeType': json['mime_type'],
        'size': json['size'],
    };
}

export function TemplateDocumentMetadataToJSON(value?: TemplateDocumentMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filename': value.filename,
        'mime_type': value.mimeType,
        'size': value.size,
    };
}

