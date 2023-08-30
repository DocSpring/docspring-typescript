import { Submission } from './submission';
export declare class ListSubmissionsResponse {
    'submissions': Array<Submission>;
    'limit': number;
    'nextCursor': string | null;
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
