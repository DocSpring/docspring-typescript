import { CombinedSubmissionAction } from './combinedSubmissionAction';
export declare class CombinedSubmission {
    'id': string;
    'expired': boolean;
    'expiresIn'?: number | null;
    'expiresAt'?: string | null;
    'state': CombinedSubmission.StateEnum;
    'errorMessage'?: string | null;
    'metadata'?: object;
    'password'?: string | null;
    'submissionIds': Array<string>;
    'sourcePdfs': Array<object>;
    'downloadUrl'?: string | null;
    'pdfHash'?: string | null;
    'actions'?: Array<CombinedSubmissionAction>;
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
export declare namespace CombinedSubmission {
    enum StateEnum {
        Pending,
        Processed,
        Error
    }
}
