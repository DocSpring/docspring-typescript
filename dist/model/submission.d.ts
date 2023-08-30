import { SubmissionAction } from './submissionAction';
import { SubmissionDataRequest } from './submissionDataRequest';
export declare class Submission {
    'id': string;
    'templateId'?: string;
    'test': boolean;
    'editable'?: boolean | null;
    'expired': boolean;
    'expiresAt'?: string | null;
    'processedAt'?: string | null;
    'state': Submission.StateEnum;
    'data'?: object | null;
    'metadata'?: object;
    'truncatedText'?: object;
    'pdfHash'?: string | null;
    'downloadUrl'?: string | null;
    'permanentDownloadUrl'?: string | null;
    'batchId'?: string | null;
    'dataRequests'?: Array<SubmissionDataRequest>;
    'actions'?: Array<SubmissionAction>;
    'source'?: string | null;
    'referrer'?: string | null;
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
export declare namespace Submission {
    enum StateEnum {
        Pending,
        Processed,
        InvalidData,
        Error,
        ImageDownloadFailed,
        ImageProcessingFailed,
        WaitingForDataRequests,
        SyntaxError,
        AccountSuspended,
        LicenseRevoked,
        Accidental
    }
}
