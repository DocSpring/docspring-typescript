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

import { CombinedSubmissionAction } from '../models/CombinedSubmissionAction';
import { HttpFile } from '../http/http';

export class CombinedSubmission {
    'id': string | null;
    'state': CombinedSubmissionStateEnum;
    'expired': boolean;
    'expiresIn': number | null;
    'expiresAt': string | null;
    'processedAt': string | null;
    'errorMessage': string | null;
    'submissionIds': Array<string>;
    'sourcePdfs': Array<any>;
    'metadata': any;
    'password': string | null;
    'pdfHash': string | null;
    'downloadUrl': string | null;
    'actions': Array<CombinedSubmissionAction>;

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
            "name": "state",
            "baseName": "state",
            "type": "CombinedSubmissionStateEnum",
            "format": ""
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "processedAt",
            "baseName": "processed_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "submissionIds",
            "baseName": "submission_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sourcePdfs",
            "baseName": "source_pdfs",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "pdfHash",
            "baseName": "pdf_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "downloadUrl",
            "baseName": "download_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<CombinedSubmissionAction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CombinedSubmission.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CombinedSubmissionStateEnum {
    Pending = 'pending',
    Processed = 'processed',
    Error = 'error'
}

