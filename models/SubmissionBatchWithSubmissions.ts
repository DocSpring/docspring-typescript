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

import { SubmissionPreview } from '../models/SubmissionPreview';
import { HttpFile } from '../http/http';

export class SubmissionBatchWithSubmissions {
    'id': string | null;
    'state': SubmissionBatchWithSubmissionsStateEnum;
    'metadata': any;
    'processedAt': string | null;
    'totalCount': number;
    'pendingCount': number;
    'errorCount': number;
    'completionPercentage': number;
    'submissions'?: Array<SubmissionPreview>;

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
            "type": "SubmissionBatchWithSubmissionsStateEnum",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "processedAt",
            "baseName": "processed_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "pendingCount",
            "baseName": "pending_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "errorCount",
            "baseName": "error_count",
            "type": "number",
            "format": ""
        },
        {
            "name": "completionPercentage",
            "baseName": "completion_percentage",
            "type": "number",
            "format": ""
        },
        {
            "name": "submissions",
            "baseName": "submissions",
            "type": "Array<SubmissionPreview>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubmissionBatchWithSubmissions.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum SubmissionBatchWithSubmissionsStateEnum {
    Pending = 'pending',
    Processed = 'processed',
    Error = 'error'
}

