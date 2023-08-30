import { SubmissionDataBatchRequest } from './submissionDataBatchRequest';
export declare class SubmissionBatchData {
    'metadata'?: object;
    'submissions': Array<SubmissionDataBatchRequest>;
    'templateId'?: string | null;
    'test'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
