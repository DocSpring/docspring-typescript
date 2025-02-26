export * from '../models/AddFieldsData';
export * from '../models/BatchGeneratePdfs201Response';
export * from '../models/CombinePdfsData';
export * from '../models/CombinedSubmission';
export * from '../models/CombinedSubmissionAction';
export * from '../models/CombinedSubmissionData';
export * from '../models/CopyTemplateOptions';
export * from '../models/CreateCombinedSubmissionResponse';
export * from '../models/CreateCustomFileData';
export * from '../models/CreateCustomFileResponse';
export * from '../models/CreateFolderData';
export * from '../models/CreateHtmlSubmissionData';
export * from '../models/CreateHtmlTemplate';
export * from '../models/CreatePdfSubmissionData';
export * from '../models/CreatePdfTemplate';
export * from '../models/CreateSubmissionDataRequestData';
export * from '../models/CreateSubmissionDataRequestEventRequest';
export * from '../models/CreateSubmissionDataRequestEventResponse';
export * from '../models/CreateSubmissionDataRequestResponse';
export * from '../models/CreateSubmissionDataRequestTokenResponse';
export * from '../models/CreateSubmissionResponse';
export * from '../models/CustomFile';
export * from '../models/ErrorResponse';
export * from '../models/Folder';
export * from '../models/JsonSchema';
export * from '../models/ListSubmissionsResponse';
export * from '../models/MoveFolderData';
export * from '../models/MoveTemplateData';
export * from '../models/MultipleErrorsResponse';
export * from '../models/RenameFolderData';
export * from '../models/Submission';
export * from '../models/SubmissionAction';
export * from '../models/SubmissionBatch';
export * from '../models/SubmissionBatchData';
export * from '../models/SubmissionBatchWithSubmissions';
export * from '../models/SubmissionDataRequest';
export * from '../models/SubmissionDataRequestEvent';
export * from '../models/SubmissionDataRequestShow';
export * from '../models/SubmissionDataRequestToken';
export * from '../models/SubmissionPreview';
export * from '../models/SuccessErrorResponse';
export * from '../models/SuccessMultipleErrorsResponse';
export * from '../models/Template';
export * from '../models/TemplateAddFieldsResponse';
export * from '../models/TemplatePreview';
export * from '../models/UpdateHtmlTemplate';
export * from '../models/UpdateSubmissionDataRequestData';
export * from '../models/UploadPresignResponse';

import { AddFieldsData } from '../models/AddFieldsData';
import { BatchGeneratePdfs201Response, BatchGeneratePdfs201ResponseStatusEnum       } from '../models/BatchGeneratePdfs201Response';
import { CombinePdfsData } from '../models/CombinePdfsData';
import { CombinedSubmission , CombinedSubmissionStateEnum               } from '../models/CombinedSubmission';
import { CombinedSubmissionAction  , CombinedSubmissionActionStateEnum  , CombinedSubmissionActionActionTypeEnum  , CombinedSubmissionActionActionCategoryEnum    } from '../models/CombinedSubmissionAction';
import { CombinedSubmissionData } from '../models/CombinedSubmissionData';
import { CopyTemplateOptions } from '../models/CopyTemplateOptions';
import { CreateCombinedSubmissionResponse, CreateCombinedSubmissionResponseStatusEnum     } from '../models/CreateCombinedSubmissionResponse';
import { CreateCustomFileData } from '../models/CreateCustomFileData';
import { CreateCustomFileResponse, CreateCustomFileResponseStatusEnum     } from '../models/CreateCustomFileResponse';
import { CreateFolderData } from '../models/CreateFolderData';
import { CreateHtmlSubmissionData } from '../models/CreateHtmlSubmissionData';
import { CreateHtmlTemplate } from '../models/CreateHtmlTemplate';
import { CreatePdfSubmissionData } from '../models/CreatePdfSubmissionData';
import { CreatePdfTemplate } from '../models/CreatePdfTemplate';
import { CreateSubmissionDataRequestData, CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum  , CreateSubmissionDataRequestDataAuthTypeEnum      } from '../models/CreateSubmissionDataRequestData';
import { CreateSubmissionDataRequestEventRequest, CreateSubmissionDataRequestEventRequestEventTypeEnum  , CreateSubmissionDataRequestEventRequestMessageTypeEnum   } from '../models/CreateSubmissionDataRequestEventRequest';
import { CreateSubmissionDataRequestEventResponse, CreateSubmissionDataRequestEventResponseStatusEnum     } from '../models/CreateSubmissionDataRequestEventResponse';
import { CreateSubmissionDataRequestResponse, CreateSubmissionDataRequestResponseStatusEnum     } from '../models/CreateSubmissionDataRequestResponse';
import { CreateSubmissionDataRequestTokenResponse, CreateSubmissionDataRequestTokenResponseStatusEnum     } from '../models/CreateSubmissionDataRequestTokenResponse';
import { CreateSubmissionResponse, CreateSubmissionResponseStatusEnum     } from '../models/CreateSubmissionResponse';
import { CustomFile } from '../models/CustomFile';
import { ErrorResponse, ErrorResponseStatusEnum    } from '../models/ErrorResponse';
import { Folder } from '../models/Folder';
import { JsonSchema } from '../models/JsonSchema';
import { ListSubmissionsResponse } from '../models/ListSubmissionsResponse';
import { MoveFolderData } from '../models/MoveFolderData';
import { MoveTemplateData } from '../models/MoveTemplateData';
import { MultipleErrorsResponse, MultipleErrorsResponseStatusEnum    } from '../models/MultipleErrorsResponse';
import { RenameFolderData } from '../models/RenameFolderData';
import { Submission          , SubmissionStateEnum            , SubmissionSourceEnum     } from '../models/Submission';
import { SubmissionAction  , SubmissionActionStateEnum  , SubmissionActionActionTypeEnum  , SubmissionActionActionCategoryEnum    } from '../models/SubmissionAction';
import { SubmissionBatch , SubmissionBatchStateEnum         } from '../models/SubmissionBatch';
import { SubmissionBatchData } from '../models/SubmissionBatchData';
import { SubmissionBatchWithSubmissions , SubmissionBatchWithSubmissionsStateEnum          } from '../models/SubmissionBatchWithSubmissions';
import { SubmissionDataRequest       , SubmissionDataRequestStateEnum     , SubmissionDataRequestAuthTypeEnum  , SubmissionDataRequestAuthSecondFactorTypeEnum           } from '../models/SubmissionDataRequest';
import { SubmissionDataRequestEvent   , SubmissionDataRequestEventEventTypeEnum  , SubmissionDataRequestEventMessageTypeEnum     } from '../models/SubmissionDataRequestEvent';
import { SubmissionDataRequestShow       , SubmissionDataRequestShowStateEnum     , SubmissionDataRequestShowAuthTypeEnum  , SubmissionDataRequestShowAuthSecondFactorTypeEnum            } from '../models/SubmissionDataRequestShow';
import { SubmissionDataRequestToken } from '../models/SubmissionDataRequestToken';
import { SubmissionPreview          , SubmissionPreviewStateEnum             } from '../models/SubmissionPreview';
import { SuccessErrorResponse, SuccessErrorResponseStatusEnum    } from '../models/SuccessErrorResponse';
import { SuccessMultipleErrorsResponse, SuccessMultipleErrorsResponseStatusEnum    } from '../models/SuccessMultipleErrorsResponse';
import { Template       , TemplateDocumentStateEnum                          , TemplateTemplateTypeEnum                } from '../models/Template';
import { TemplateAddFieldsResponse, TemplateAddFieldsResponseStatusEnum     } from '../models/TemplateAddFieldsResponse';
import { TemplatePreview       , TemplatePreviewDocumentStateEnum                          , TemplatePreviewTemplateTypeEnum      } from '../models/TemplatePreview';
import { UpdateHtmlTemplate } from '../models/UpdateHtmlTemplate';
import { UpdateSubmissionDataRequestData, UpdateSubmissionDataRequestDataAuthTypeEnum      } from '../models/UpdateSubmissionDataRequestData';
import { UploadPresignResponse   , UploadPresignResponseMethodEnum   } from '../models/UploadPresignResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "BatchGeneratePdfs201ResponseStatusEnum",
    "CombinedSubmissionStateEnum",
    "CombinedSubmissionActionStateEnum",
    "CombinedSubmissionActionActionTypeEnum",
    "CombinedSubmissionActionActionCategoryEnum",
    "CreateCombinedSubmissionResponseStatusEnum",
    "CreateCustomFileResponseStatusEnum",
    "CreateSubmissionDataRequestDataAuthSecondFactorTypeEnum",
    "CreateSubmissionDataRequestDataAuthTypeEnum",
    "CreateSubmissionDataRequestEventRequestEventTypeEnum",
    "CreateSubmissionDataRequestEventRequestMessageTypeEnum",
    "CreateSubmissionDataRequestEventResponseStatusEnum",
    "CreateSubmissionDataRequestResponseStatusEnum",
    "CreateSubmissionDataRequestTokenResponseStatusEnum",
    "CreateSubmissionResponseStatusEnum",
    "ErrorResponseStatusEnum",
    "MultipleErrorsResponseStatusEnum",
    "SubmissionStateEnum",
    "SubmissionSourceEnum",
    "SubmissionActionStateEnum",
    "SubmissionActionActionTypeEnum",
    "SubmissionActionActionCategoryEnum",
    "SubmissionBatchStateEnum",
    "SubmissionBatchWithSubmissionsStateEnum",
    "SubmissionDataRequestStateEnum",
    "SubmissionDataRequestAuthTypeEnum",
    "SubmissionDataRequestAuthSecondFactorTypeEnum",
    "SubmissionDataRequestEventEventTypeEnum",
    "SubmissionDataRequestEventMessageTypeEnum",
    "SubmissionDataRequestShowStateEnum",
    "SubmissionDataRequestShowAuthTypeEnum",
    "SubmissionDataRequestShowAuthSecondFactorTypeEnum",
    "SubmissionPreviewStateEnum",
    "SuccessErrorResponseStatusEnum",
    "SuccessMultipleErrorsResponseStatusEnum",
    "TemplateDocumentStateEnum",
    "TemplateTemplateTypeEnum",
    "TemplateAddFieldsResponseStatusEnum",
    "TemplatePreviewDocumentStateEnum",
    "TemplatePreviewTemplateTypeEnum",
    "UpdateSubmissionDataRequestDataAuthTypeEnum",
    "UploadPresignResponseMethodEnum",
]);

let typeMap: {[index: string]: any} = {
    "AddFieldsData": AddFieldsData,
    "BatchGeneratePdfs201Response": BatchGeneratePdfs201Response,
    "CombinePdfsData": CombinePdfsData,
    "CombinedSubmission": CombinedSubmission,
    "CombinedSubmissionAction": CombinedSubmissionAction,
    "CombinedSubmissionData": CombinedSubmissionData,
    "CopyTemplateOptions": CopyTemplateOptions,
    "CreateCombinedSubmissionResponse": CreateCombinedSubmissionResponse,
    "CreateCustomFileData": CreateCustomFileData,
    "CreateCustomFileResponse": CreateCustomFileResponse,
    "CreateFolderData": CreateFolderData,
    "CreateHtmlSubmissionData": CreateHtmlSubmissionData,
    "CreateHtmlTemplate": CreateHtmlTemplate,
    "CreatePdfSubmissionData": CreatePdfSubmissionData,
    "CreatePdfTemplate": CreatePdfTemplate,
    "CreateSubmissionDataRequestData": CreateSubmissionDataRequestData,
    "CreateSubmissionDataRequestEventRequest": CreateSubmissionDataRequestEventRequest,
    "CreateSubmissionDataRequestEventResponse": CreateSubmissionDataRequestEventResponse,
    "CreateSubmissionDataRequestResponse": CreateSubmissionDataRequestResponse,
    "CreateSubmissionDataRequestTokenResponse": CreateSubmissionDataRequestTokenResponse,
    "CreateSubmissionResponse": CreateSubmissionResponse,
    "CustomFile": CustomFile,
    "ErrorResponse": ErrorResponse,
    "Folder": Folder,
    "JsonSchema": JsonSchema,
    "ListSubmissionsResponse": ListSubmissionsResponse,
    "MoveFolderData": MoveFolderData,
    "MoveTemplateData": MoveTemplateData,
    "MultipleErrorsResponse": MultipleErrorsResponse,
    "RenameFolderData": RenameFolderData,
    "Submission": Submission,
    "SubmissionAction": SubmissionAction,
    "SubmissionBatch": SubmissionBatch,
    "SubmissionBatchData": SubmissionBatchData,
    "SubmissionBatchWithSubmissions": SubmissionBatchWithSubmissions,
    "SubmissionDataRequest": SubmissionDataRequest,
    "SubmissionDataRequestEvent": SubmissionDataRequestEvent,
    "SubmissionDataRequestShow": SubmissionDataRequestShow,
    "SubmissionDataRequestToken": SubmissionDataRequestToken,
    "SubmissionPreview": SubmissionPreview,
    "SuccessErrorResponse": SuccessErrorResponse,
    "SuccessMultipleErrorsResponse": SuccessMultipleErrorsResponse,
    "Template": Template,
    "TemplateAddFieldsResponse": TemplateAddFieldsResponse,
    "TemplatePreview": TemplatePreview,
    "UpdateHtmlTemplate": UpdateHtmlTemplate,
    "UpdateSubmissionDataRequestData": UpdateSubmissionDataRequestData,
    "UploadPresignResponse": UploadPresignResponse,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
