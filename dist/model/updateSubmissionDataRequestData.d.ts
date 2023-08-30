export declare class UpdateSubmissionDataRequestData {
    'authPhoneNumberHash'?: string | null;
    'authProvider'?: string | null;
    'authSecondFactorType'?: UpdateSubmissionDataRequestData.AuthSecondFactorTypeEnum;
    'authSessionIdHash'?: string | null;
    'authSessionStartedAt'?: string | null;
    'authType'?: UpdateSubmissionDataRequestData.AuthTypeEnum;
    'authUserIdHash'?: string | null;
    'authUsernameHash'?: string | null;
    'email'?: string | null;
    'fields'?: Array<string>;
    'metadata'?: object;
    'name'?: string | null;
    'order'?: number;
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
export declare namespace UpdateSubmissionDataRequestData {
    enum AuthSecondFactorTypeEnum {
        None,
        PhoneNumber,
        Totp,
        MobilePush,
        SecurityKey,
        Fingerprint
    }
    enum AuthTypeEnum {
        None,
        Password,
        Oauth,
        EmailLink,
        PhoneNumber,
        Ldap,
        Saml
    }
}
