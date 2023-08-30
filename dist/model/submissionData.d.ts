import { CreateSubmissionDataRequestData } from './createSubmissionDataRequestData';
export declare class SubmissionData {
    'css'?: string;
    'data': object;
    'dataRequests'?: Array<CreateSubmissionDataRequestData>;
    'expiresIn'?: number;
    'fieldOverrides'?: object;
    'html'?: string;
    'metadata'?: object;
    'password'?: string;
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
