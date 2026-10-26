# DocSpring.Client

All URIs are relative to *https://sync.api.docspring.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyTemplate**](Client.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a template
[**createCombinedPdf**](Client.md#createCombinedPdf) | **POST** /combined_pdfs | Combine PDFs
[**createCustomFileFromUpload**](Client.md#createCustomFileFromUpload) | **POST** /custom_files | Create a custom file from an upload
[**createFolder**](Client.md#createFolder) | **POST** /folders | Create a folder
[**createSignatureRequestEvent**](Client.md#createSignatureRequestEvent) | **POST** /signature_requests/{signature_request_id}/events | Record a signature request event
[**createSignatureRequestToken**](Client.md#createSignatureRequestToken) | **POST** /signature_requests/{signature_request_id}/tokens | Create a signature request token
[**createSubmission**](Client.md#createSubmission) | **POST** /templates/{template_id}/submissions | Generate a PDF
[**createSubmissionBatch**](Client.md#createSubmissionBatch) | **POST** /submissions/batches | Generate PDFs in a batch
[**createTemplate**](Client.md#createTemplate) | **POST** /templates | Create a template
[**createWebhook**](Client.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteCustomFile**](Client.md#deleteCustomFile) | **DELETE** /custom_files/{custom_file_id} | Delete a custom file
[**deleteFolder**](Client.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](Client.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**deleteWebhook**](Client.md#deleteWebhook) | **DELETE** /webhooks/{webhook_id} | Delete a webhook
[**expireCombinedPdf**](Client.md#expireCombinedPdf) | **DELETE** /combined_pdfs/{combined_pdf_id} | Expire a combined PDF
[**expireSubmission**](Client.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a submission
[**generateSubmissionPreview**](Client.md#generateSubmissionPreview) | **POST** /submissions/{submission_id}/generate_preview | Generate a preview PDF
[**getCombinedPdf**](Client.md#getCombinedPdf) | **GET** /combined_pdfs/{combined_pdf_id} | Get a combined PDF
[**getCustomFile**](Client.md#getCustomFile) | **GET** /custom_files/{custom_file_id} | Get a custom file
[**getFolder**](Client.md#getFolder) | **GET** /folders/{folder_id} | Get a folder
[**getPresignUrl**](Client.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL to upload a file
[**getSignatureRequest**](Client.md#getSignatureRequest) | **GET** /signature_requests/{signature_request_id} | Get a signature request
[**getSubmission**](Client.md#getSubmission) | **GET** /submissions/{submission_id} | Get a submission
[**getSubmissionBatch**](Client.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Get a batch
[**getTemplate**](Client.md#getTemplate) | **GET** /templates/{template_id} | Get a template
[**getTemplateModelCode**](Client.md#getTemplateModelCode) | **GET** /templates/{template_id}/model_code | Generate typed code for a template's submission data
[**getTemplateSchema**](Client.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Get the JSON Schema of a template's submission data
[**getWebhook**](Client.md#getWebhook) | **GET** /webhooks/{webhook_id} | Get a webhook
[**listCombinedPdfs**](Client.md#listCombinedPdfs) | **GET** /combined_pdfs | List combined PDFs
[**listCustomFiles**](Client.md#listCustomFiles) | **GET** /custom_files | List custom files
[**listFolders**](Client.md#listFolders) | **GET** /folders | List folders
[**listSubmissions**](Client.md#listSubmissions) | **GET** /submissions | List submissions
[**listTemplateSubmissions**](Client.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List a template's submissions
[**listTemplates**](Client.md#listTemplates) | **GET** /templates | List templates
[**listWebhooks**](Client.md#listWebhooks) | **GET** /webhooks | List webhooks
[**moveFolder**](Client.md#moveFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplate**](Client.md#moveTemplate) | **POST** /templates/{template_id}/move | Move a template to a folder
[**publishTemplateVersion**](Client.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**renameFolder**](Client.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**restoreTemplateVersion**](Client.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**testAuthentication**](Client.md#testAuthentication) | **GET** /authentication | Test authentication
[**updateSignatureRequest**](Client.md#updateSignatureRequest) | **PUT** /signature_requests/{signature_request_id} | Update a signature request
[**updateTemplate**](Client.md#updateTemplate) | **PUT** /templates/{template_id} | Update a template
[**updateTemplateDocument**](Client.md#updateTemplateDocument) | **PUT** /templates/{template_id}/document | Replace a template's PDF
[**updateWebhook**](Client.md#updateWebhook) | **PUT** /webhooks/{webhook_id} | Update a webhook
[**uploadTemplate**](Client.md#uploadTemplate) | **POST** /templates/upload | Create a PDF template from an uploaded PDF
[**uploadTemplateDocument**](Client.md#uploadTemplateDocument) | **PUT** /templates/{template_id}/document/upload | Replace a template's PDF with an uploaded PDF


# **copyTemplate**
> Template copyTemplate()

Copies a template (its draft, or a published version) into a new template.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCopyTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCopyTemplateRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // Settings for the copy. (optional)
  body: {
    name: "name_example",
    parent_folder_id: "parent_folder_id_example",
    version: "version_example",
  },
};

const data = await apiInstance.copyTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CopyTemplateRequest**| Settings for the copy. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | template copied |  -  |
**422** | invalid copy |  -  |
**403** | the plan's template limit is reached |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCombinedPdf**
> CombinedPdf createCombinedPdf(body)

Merges PDFs into one: submissions, other combined PDFs, templates, custom files (POST /custom_files) and PDFs from URLs, in the order of `source_pdfs`. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /combined_pdfs/{combined_pdf_id} until `state` isn't `pending`.  A template source merges the template's processed PDF by default: the PDF submissions are filled in on, decrypted and with its form fields removed. Pass `processed: false` to merge the PDF as it was uploaded. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateCombinedPdfRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateCombinedPdfRequest = {
    // The PDFs to merge, and the combined PDF's settings.
  body: {
    source_pdfs: [
      null,
    ],
    metadata: {},
    password: "password_example",
    delete_custom_files: true,
    expires_in: 1,
  },
    // Wait until the PDF has been generated before responding. Default true on sync.api hosts. (optional)
  wait: true,
};

const data = await apiInstance.createCombinedPdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateCombinedPdfRequest**| The PDFs to merge, and the combined PDF's settings. |
 **wait** | [**boolean**] | Wait until the PDF has been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined


### Return type

**CombinedPdf**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | combined PDF created |  -  |
**422** | invalid source PDFs |  -  |
**403** | not allowed |  -  |
**402** | not enough credits |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createCustomFileFromUpload**
> CustomFile createCustomFileFromUpload(body)

Creates a custom file from a PDF you uploaded, so you can merge it with other PDFs. Upload the file with the presigned upload (GET /uploads/presign) first, then pass its `fields.key` as `cache_id`. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateCustomFileFromUploadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateCustomFileFromUploadRequest = {
    // The uploaded file to create the custom file from.
  body: {
    cache_id: "cache_id_example",
  },
};

const data = await apiInstance.createCustomFileFromUpload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateCustomFileFromUploadRequest**| The uploaded file to create the custom file from. |


### Return type

**CustomFile**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | custom file created |  -  |
**422** | invalid custom file |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFolder**
> Folder createFolder(body)

Creates a folder for organizing templates. Pass `parent_folder_id` to create it inside another folder. Folder names are unique within their parent folder. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateFolderRequest = {
    // The folder to create.
  body: {
    name: "name_example",
    parent_folder_id: "parent_folder_id_example",
  },
};

const data = await apiInstance.createFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateFolderRequest**| The folder to create. |


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | folder created inside another folder |  -  |
**422** | invalid folder |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSignatureRequestEvent**
> SignatureRequestEvent createSignatureRequestEvent(body)

Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateSignatureRequestEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateSignatureRequestEventRequest = {
    // The signature request's ID.
  signatureRequestId: "srq_1234567890abcdef01",
    // The event to record.
  body: {
    event_type: null,
    message_type: null,
    message_recipient: "message_recipient_example",
    occurred_at: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createSignatureRequestEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSignatureRequestEventRequest**| The event to record. |
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined


### Return type

**SignatureRequestEvent**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | event recorded |  -  |
**422** | invalid event |  -  |
**404** | signature request not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSignatureRequestToken**
> SignatureRequestToken createSignatureRequestToken()

Creates a token that opens the signature request without signing in, in a form embedded in your app or from a link you send. The response is the only time the token's secret is returned. The link works for 24 hours, or 7 days for an `email` token, and a signing page that opened in time keeps working for 7 more days. A test API token can't create a token for a live signature request. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateSignatureRequestTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateSignatureRequestTokenRequest = {
    // The signature request's ID.
  signatureRequestId: "srq_1234567890abcdef01",
    // The kind of link to make. Send no body for an `api` token. (optional)
  body: {
    type: null,
  },
};

const data = await apiInstance.createSignatureRequestToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSignatureRequestTokenRequest**| The kind of link to make. Send no body for an `api` token. |
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined


### Return type

**SignatureRequestToken**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | token created |  -  |
**403** | test API token on a live signature request |  -  |
**409** | signature request finished |  -  |
**422** | invalid token request |  -  |
**404** | signature request not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSubmission**
> Submission createSubmission(body)

Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateSubmissionRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The submission's data and settings.
  body: {
    test: true,
    editable: true,
    data: {},
    metadata: {},
    password: "password_example",
    expires_in: 1,
    field_overrides: {
      "key": {
        _static: true,
        editable: true,
        _default: "_default_example",
        title: "title_example",
        required: true,
        option_list: "option_list_example",
        combined_field_names: "combined_field_names_example",
        combined_field_type: null,
        combined_field_separator: "combined_field_separator_example",
        combined_field_format: "combined_field_format_example",
        integer: true,
        include_time: true,
        signature_allow_draw: true,
        signature_allow_type: true,
        barcode_symbology: null,
        hidden: true,
        x: 3.14,
        y: 3.14,
        width: 3.14,
        height: 3.14,
        rotation: 3.14,
        display_type: null,
        opacity: 3.14,
        date_time_format: "date_time_format_example",
        typeface: null,
        font_size: 1,
        character_spacing: 3.14,
        bold: true,
        uppercase: true,
        strikethrough: true,
        keep_leading_spaces: true,
        overflow: null,
        multiline: true,
        multiline_lines: 1,
        max_length: 1,
        color: "color_example",
        background_color: "background_color_example",
        alignment: null,
        v_alignment: null,
        comb: true,
        comb_number_of_cells: 1,
        comb_value_offset: 1,
        shape_type: null,
        shape_sides: 1,
        shape_border_width: 1,
        shape_border_color: "shape_border_color_example",
        shape_fill_color: "shape_fill_color_example",
        check_character: null,
        check_color: "check_color_example",
        qrcode_color: "qrcode_color_example",
        true_text: "true_text_example",
        false_text: "false_text_example",
        condition: "condition_example",
        string_condition_type: null,
        number_condition_type: null,
        number_condition_range_min: 3.14,
        number_condition_range_max: 3.14,
        number_condition_range_exclusive_min: true,
        number_condition_range_exclusive_max: true,
        invert_boolean_condition: true,
        decimal_places: 1,
        image_scale_type: null,
        image_gravity: null,
      },
    },
    html: "html_example",
    css: "css_example",
    signature_requests: [
      {
        name: "name_example",
        email: "email_example",
        fields: [
          "fields_example",
        ],
        metadata: {},
        role: "role_example",
        auth_type: null,
        auth_second_factor_type: null,
        auth_provider: "auth_provider_example",
        auth_session_started_at: new Date('1970-01-01T00:00:00.00Z'),
        auth_session_id_hash: "auth_session_id_hash_example",
        auth_user_id_hash: "auth_user_id_hash_example",
        auth_username_hash: "auth_username_hash_example",
        auth_phone_number_hash: "auth_phone_number_hash_example",
        ignore_unknown_fields: true,
        prefilled_values_editable: true,
      },
    ],
  },
    // The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published). (optional)
  version: "version_example",
    // Wait until the PDF has been generated before responding. Default true on sync.api hosts. (optional)
  wait: true,
};

const data = await apiInstance.createSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSubmissionRequest**| The submission's data and settings. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published). | (optional) defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | submission created |  -  |
**422** | invalid data |  -  |
**402** | not enough credits |  -  |
**403** | the account is suspended |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSubmissionBatch**
> SubmissionBatch createSubmissionBatch(body)

Creates up to 50 submissions in one request, from one template or several. The PDFs are only generated when every submission is valid. On sync.api hosts the request waits until every PDF has been generated (unless you pass `wait=false`), otherwise poll GET /submissions/batches/{submission_batch_id} until `processed_at` is set.  When any submission is invalid, nothing is generated and the request returns a 422. Submissions whose data doesn't match their template's fields are still saved with their errors (an `invalid_data` error, with each one's `submission_id` in its details), so you can find them in DocSpring. The other submissions aren't saved. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateSubmissionBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateSubmissionBatchRequest = {
    // The submissions to create, and the settings they share.
  body: {
    metadata: {},
    template_id: "template_id_example",
    template_version: "template_version_example",
    test: true,
    submissions: [
      {
        test: true,
        editable: true,
        data: {},
        metadata: {},
        password: "password_example",
        expires_in: 1,
        field_overrides: {
          "key": {
            _static: true,
            editable: true,
            _default: "_default_example",
            title: "title_example",
            required: true,
            option_list: "option_list_example",
            combined_field_names: "combined_field_names_example",
            combined_field_type: null,
            combined_field_separator: "combined_field_separator_example",
            combined_field_format: "combined_field_format_example",
            integer: true,
            include_time: true,
            signature_allow_draw: true,
            signature_allow_type: true,
            barcode_symbology: null,
            hidden: true,
            x: 3.14,
            y: 3.14,
            width: 3.14,
            height: 3.14,
            rotation: 3.14,
            display_type: null,
            opacity: 3.14,
            date_time_format: "date_time_format_example",
            typeface: null,
            font_size: 1,
            character_spacing: 3.14,
            bold: true,
            uppercase: true,
            strikethrough: true,
            keep_leading_spaces: true,
            overflow: null,
            multiline: true,
            multiline_lines: 1,
            max_length: 1,
            color: "color_example",
            background_color: "background_color_example",
            alignment: null,
            v_alignment: null,
            comb: true,
            comb_number_of_cells: 1,
            comb_value_offset: 1,
            shape_type: null,
            shape_sides: 1,
            shape_border_width: 1,
            shape_border_color: "shape_border_color_example",
            shape_fill_color: "shape_fill_color_example",
            check_character: null,
            check_color: "check_color_example",
            qrcode_color: "qrcode_color_example",
            true_text: "true_text_example",
            false_text: "false_text_example",
            condition: "condition_example",
            string_condition_type: null,
            number_condition_type: null,
            number_condition_range_min: 3.14,
            number_condition_range_max: 3.14,
            number_condition_range_exclusive_min: true,
            number_condition_range_exclusive_max: true,
            invert_boolean_condition: true,
            decimal_places: 1,
            image_scale_type: null,
            image_gravity: null,
          },
        },
        html: "html_example",
        css: "css_example",
        template_id: "template_id_example",
        template_version: "template_version_example",
      },
    ],
  },
    // Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts. (optional)
  wait: true,
};

const data = await apiInstance.createSubmissionBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSubmissionBatchRequest**| The submissions to create, and the settings they share. |
 **wait** | [**boolean**] | Wait until every PDF in the batch has been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined


### Return type

**SubmissionBatch**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | batch created |  -  |
**422** | invalid data |  -  |
**402** | not enough credits |  -  |
**403** | account suspended |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTemplate**
> Template createTemplate(body)

Creates an HTML template, or a PDF template from a PDF you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. To send the PDF with the request instead, use POST /templates/upload.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateTemplateRequest = {
    // The template to create.
  body: {
    name: "name_example",
    description: "description_example",
    template_type: null,
    parent_folder_id: "parent_folder_id_example",
    locked: true,
    add_signature_request_submission_id_footers: true,
    ai_field_naming_language: null,
    allow_additional_properties: true,
    allow_skipping_optional_fields: true,
    default_form_mode: null,
    editable_submissions: true,
    embed_domains: [
      "embed_domains_example",
    ],
    embed_edit_allow_settings: true,
    embed_edit_allow_versioning: true,
    embed_edit_allow_document_replacement: true,
    encrypt_pdfs: true,
    encrypt_pdfs_password: "encrypt_pdfs_password_example",
    expire_submissions: true,
    expire_after: 1,
    expiration_interval: null,
    merge_audit_trail_pdf: true,
    parse_dates_using_template_date_format: true,
    public_submissions: true,
    public_web_form: true,
    redirect_url: "redirect_url_example",
    slack_webhook_url: "slack_webhook_url_example",
    defaults: null,
    field_dependencies: [
      {
        action: null,
        match: null,
        conditions: [
          null,
        ],
        targets: [
          "targets_example",
        ],
        group: "group_example",
      },
    ],
    html: "html_example",
    scss: "scss_example",
    header_html: "header_html_example",
    footer_html: "footer_html_example",
    html_engine_options: null,
    cache_id: "cache_id_example",
    filename: "filename_example",
    detect_fields: true,
    field_source: null,
    field_naming: null,
    field_logic: null,
  },
    // Wait until the PDF has been processed before responding. Default true on sync.api hosts. (optional)
  wait: true,
};

const data = await apiInstance.createTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateTemplateRequest**| The template to create. |
 **wait** | [**boolean**] | Wait until the PDF has been processed before responding. Default true on sync.api hosts. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | HTML template created |  -  |
**422** | invalid template |  -  |
**403** | the plan's template limit is reached |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createWebhook**
> Webhook createWebhook(body)

Creates a webhook that sends a POST request to your endpoint whenever a subscribed event happens. Scope it to API tokens, templates or folders to receive only their events. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateWebhookRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateWebhookRequest = {
    // The webhook to create.
  body: {
    name: "name_example",
    url: "url_example",
    enabled: true,
    event_types: [
      "submission.processed",
    ],
    mode: null,
    api_token_ids: [
      "api_token_ids_example",
    ],
    template_ids: [
      "template_ids_example",
    ],
    folder_ids: [
      "folder_ids_example",
    ],
    include_submission_data: true,
    strip_fields: [
      "strip_fields_example",
    ],
    headers: {
      "key": "key_example",
    },
  },
};

const data = await apiInstance.createWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateWebhookRequest**| The webhook to create. |


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | webhook created |  -  |
**422** | invalid webhook |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomFile**
> CustomFile deleteCustomFile()

Deletes a custom file and returns it. Use a live API token: test tokens can't delete custom files. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteCustomFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteCustomFileRequest = {
    // The custom file's ID.
  customFileId: "custom_file_id_example",
};

const data = await apiInstance.deleteCustomFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFileId** | [**string**] | The custom file's ID. | defaults to undefined


### Return type

**CustomFile**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | custom file deleted |  -  |
**403** | test API token |  -  |
**404** | custom file not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFolder**
> Folder deleteFolder()

Deletes an empty folder and returns it. A folder that still has templates or folders in it can't be deleted. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteFolderRequest = {
    // The folder's ID.
  folderId: "folder_id_example",
};

const data = await apiInstance.deleteFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**string**] | The folder's ID. | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder deleted |  -  |
**409** | folder is not empty |  -  |
**404** | folder not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTemplate**
> Template deleteTemplate()

Deletes a template's draft and all of its published versions, or one published version (`version`). Returns the template as it was before it was deleted. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteTemplateRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef02",
    // Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted. (optional)
  version: "version_example",
};

const data = await apiInstance.deleteTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template deleted |  -  |
**409** | template is locked |  -  |
**404** | template not found |  -  |
**422** | invalid version |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWebhook**
> Webhook deleteWebhook()

Deletes a webhook so it stops receiving events, and returns it.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteWebhookRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteWebhookRequest = {
    // The webhook's ID.
  webhookId: "webhook_id_example",
};

const data = await apiInstance.deleteWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The webhook's ID. | defaults to undefined


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhook deleted |  -  |
**404** | webhook not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expireCombinedPdf**
> CombinedPdf expireCombinedPdf()

Deletes a combined PDF's PDF and returns the expired combined PDF.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientExpireCombinedPdfRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientExpireCombinedPdfRequest = {
    // The combined PDF's ID.
  combinedPdfId: "com_1234567890abcdef05",
};

const data = await apiInstance.expireCombinedPdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedPdfId** | [**string**] | The combined PDF's ID. | defaults to undefined


### Return type

**CombinedPdf**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | combined PDF expired |  -  |
**403** | test API token |  -  |
**404** | combined PDF not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expireSubmission**
> Submission expireSubmission()

Deletes a submission's data and PDF now, and returns the expired submission.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientExpireSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientExpireSubmissionRequest = {
    // The submission's ID.
  submissionId: "sub_1234567890abcdef01",
};

const data = await apiInstance.expireSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] | The submission's ID. | defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission expired |  -  |
**403** | test API token |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateSubmissionPreview**
> Submission generateSubmissionPreview()

Generates a preview of a submission's PDF in the background, such as for a submission still waiting for its signature requests. It's in `files.preview` once `preview_generated_at` changes. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGenerateSubmissionPreviewRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGenerateSubmissionPreviewRequest = {
    // The submission's ID.
  submissionId: "sub_1234567890abcdef03",
};

const data = await apiInstance.generateSubmissionPreview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] | The submission's ID. | defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | preview requested |  -  |
**409** | preview not possible |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCombinedPdf**
> CombinedPdf getCombinedPdf()

Returns a combined PDF, with a temporary link to download it once it has been generated.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetCombinedPdfRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetCombinedPdfRequest = {
    // The combined PDF's ID.
  combinedPdfId: "com_1234567890abcdef05",
};

const data = await apiInstance.getCombinedPdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedPdfId** | [**string**] | The combined PDF's ID. | defaults to undefined


### Return type

**CombinedPdf**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | combined PDF |  -  |
**404** | combined PDF not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomFile**
> CustomFile getCustomFile()

Returns a custom file, with a temporary URL to download it.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetCustomFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetCustomFileRequest = {
    // The custom file's ID.
  customFileId: "custom_file_id_example",
};

const data = await apiInstance.getCustomFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFileId** | [**string**] | The custom file's ID. | defaults to undefined


### Return type

**CustomFile**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | custom file found |  -  |
**404** | custom file not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFolder**
> Folder getFolder()

Returns a folder.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetFolderRequest = {
    // The folder's ID.
  folderId: "folder_id_example",
};

const data = await apiInstance.getFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**string**] | The folder's ID. | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder found |  -  |
**404** | folder not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPresignUrl**
> UploadPresign getPresignUrl()

Returns a presigned S3 form for uploading a file directly to DocSpring, for files too large to send in a request body. POST the `fields` and the file (as `file`) to `url` as multipart/form-data, then pass `fields.key` as the `cache_id` when you create a custom file. 

### Example


```typescript
import { createConfiguration, Client } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request = {};

const data = await apiInstance.getPresignUrl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UploadPresign**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | presigned URL created |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSignatureRequest**
> SignatureRequest getSignatureRequest()

Returns a signature request, with the values the person has entered so far.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetSignatureRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetSignatureRequestRequest = {
    // The signature request's ID.
  signatureRequestId: "srq_1234567890abcdef01",
};

const data = await apiInstance.getSignatureRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined


### Return type

**SignatureRequest**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | signature request |  -  |
**404** | signature request not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubmission**
> Submission getSubmission()

Returns a submission, with its data and links to download its PDF.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetSubmissionRequest = {
    // The submission's ID.
  submissionId: "sub_1234567890abcdef01",
};

const data = await apiInstance.getSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] | The submission's ID. | defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed submission |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubmissionBatch**
> SubmissionBatch getSubmissionBatch()

Returns a batch with its submissions. The batch has finished once `processed_at` is set: its `state` is `processed` when every PDF was generated, or `error` when any submission failed. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetSubmissionBatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetSubmissionBatchRequest = {
    // The batch's ID.
  submissionBatchId: "sbb_1234567890abcdef05",
    // Include each submission's `data` (null without it). (optional)
  includeData: true,
};

const data = await apiInstance.getSubmissionBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionBatchId** | [**string**] | The batch's ID. | defaults to undefined
 **includeData** | [**boolean**] | Include each submission's `data` (null without it). | (optional) defaults to undefined


### Return type

**SubmissionBatch**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | batch |  -  |
**404** | batch not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemplate**
> Template getTemplate()

Returns a template: its draft, or one of its published versions.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplateRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. (optional)
  version: "latest",
};

const data = await apiInstance.getTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `draft`. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PDF template |  -  |
**404** | template not found |  -  |
**422** | invalid version |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemplateModelCode**
> TemplateModelCode getTemplateModelCode()

Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir or Go, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplateModelCodeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplateModelCodeRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The language to generate the code in.
  lang: "typescript",
    // The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default. (optional)
  version: "draft",
};

const data = await apiInstance.getTemplateModelCode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **lang** | **ModelCodeLanguage** | The language to generate the code in. | defaults to undefined
 **version** | [**string**] | The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default. | (optional) defaults to undefined


### Return type

**TemplateModelCode**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | model code |  -  |
**422** | unknown language |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemplateSchema**
> { [key: string]: any; } getTemplateSchema()

Returns the JSON Schema that a submission's `data` must match. Use it to check data before you create submissions, or to build a form for the template's fields. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplateSchemaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplateSchemaRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default. (optional)
  version: "draft",
};

const data = await apiInstance.getTemplateSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` or `draft`. Default `latest` (the draft when no version has been published), the version a submission uses by default. | (optional) defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template schema |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWebhook**
> Webhook getWebhook()

Returns a webhook.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetWebhookRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetWebhookRequest = {
    // The webhook's ID.
  webhookId: "webhook_id_example",
};

const data = await apiInstance.getWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The webhook's ID. | defaults to undefined


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhook found |  -  |
**404** | webhook not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCombinedPdfs**
> CombinedPdfList listCombinedPdfs()

Returns the combined PDFs in your account, newest first, one page at a time.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListCombinedPdfsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListCombinedPdfsRequest = {
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listCombinedPdfs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**CombinedPdfList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | combined PDFs |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomFiles**
> CustomFileList listCustomFiles()

Returns the custom files in your account, newest first, one page at a time.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListCustomFilesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListCustomFilesRequest = {
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listCustomFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**CustomFileList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | custom files |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFolders**
> FolderList listFolders()

Returns the folders in your account, newest first, one page at a time. Pass `parent_folder_id` to list the folders in one folder. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListFoldersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListFoldersRequest = {
    // Only list the folders in this folder. Without it, the list has every folder, at any depth. (optional)
  parentFolderId: "fld_1234567890abcdef02",
    // How many items to return (1-100, default 50). (optional)
  limit: 2,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "fld_1234567890abcdef02",
};

const data = await apiInstance.listFolders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentFolderId** | [**string**] | Only list the folders in this folder. Without it, the list has every folder, at any depth. | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**FolderList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folders in a folder |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSubmissions**
> SubmissionList listSubmissions()

Returns the submissions in your account, newest first, one page at a time. Lists leave out each submission's `data` unless you pass `include_data=true`. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListSubmissionsRequest = {
    // Only list this template's submissions. (optional)
  templateId: "tpl_1234567890abcdef01",
    // Only list test submissions (true) or live submissions (false). (optional)
  test: false,
    // Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`). (optional)
  createdAfter: new Date('2018-10-20T08:40:00Z'),
    // Only list submissions created before this time. (optional)
  createdBefore: new Date('2018-10-20T09:00:00Z'),
    // Include each submission's `data` (null without it). (optional)
  includeData: true,
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listSubmissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | Only list this template's submissions. | (optional) defaults to undefined
 **test** | [**boolean**] | Only list test submissions (true) or live submissions (false). | (optional) defaults to undefined
 **createdAfter** | [**Date**] | Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`). | (optional) defaults to undefined
 **createdBefore** | [**Date**] | Only list submissions created before this time. | (optional) defaults to undefined
 **includeData** | [**boolean**] | Include each submission's `data` (null without it). | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**SubmissionList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submissions |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplateSubmissions**
> SubmissionList listTemplateSubmissions()

Returns a template's submissions (from every version of the template), newest first.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListTemplateSubmissionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListTemplateSubmissionsRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // Only list test submissions (true) or live submissions (false). (optional)
  test: true,
    // Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`). (optional)
  createdAfter: new Date('1970-01-01T00:00:00.00Z'),
    // Only list submissions created before this time. (optional)
  createdBefore: new Date('1970-01-01T00:00:00.00Z'),
    // Include each submission's `data` (null without it). (optional)
  includeData: true,
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listTemplateSubmissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **test** | [**boolean**] | Only list test submissions (true) or live submissions (false). | (optional) defaults to undefined
 **createdAfter** | [**Date**] | Only list submissions created after this time (RFC 3339, such as `2025-01-31T09:00:00Z`). | (optional) defaults to undefined
 **createdBefore** | [**Date**] | Only list submissions created before this time. | (optional) defaults to undefined
 **includeData** | [**boolean**] | Include each submission's `data` (null without it). | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**SubmissionList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template's submissions |  -  |
**404** | template not found |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplates**
> TemplateSummaryList listTemplates()

Returns the templates in your account (their drafts), newest first, one page at a time. Get a template by its ID for its HTML, defaults and published versions. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListTemplatesRequest = {
    // Only list templates whose name contains this text (ignoring case). (optional)
  query: "rental",
    // Only list the templates in this folder (not in its subfolders). (optional)
  parentFolderId: "fld_1234567890abcdef01",
    // How many items to return (1-100, default 50). (optional)
  limit: 1,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Only list templates whose name contains this text (ignoring case). | (optional) defaults to undefined
 **parentFolderId** | [**string**] | Only list the templates in this folder (not in its subfolders). | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**TemplateSummaryList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | templates |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWebhooks**
> WebhookList listWebhooks()

Returns the webhooks in your account, newest first, one page at a time. Filter them by event type, mode, or the API token, template or folder they're scoped to. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListWebhooksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListWebhooksRequest = {
    // Only list webhooks that subscribe to this event. (optional)
  eventType: "submission.processed",
    // Only list webhooks set to this mode. (optional)
  mode: "test",
    // Only list webhooks scoped to this template. (optional)
  templateId: "tpl_1234567890abcdef01",
    // Only list webhooks scoped to this folder. (optional)
  folderId: "folder_id_example",
    // Only list webhooks scoped to this API token. (optional)
  apiTokenId: "api_token_id_example",
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listWebhooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventType** | **WebhookEventType** | Only list webhooks that subscribe to this event. | (optional) defaults to undefined
 **mode** | **WebhookMode** | Only list webhooks set to this mode. | (optional) defaults to undefined
 **templateId** | [**string**] | Only list webhooks scoped to this template. | (optional) defaults to undefined
 **folderId** | [**string**] | Only list webhooks scoped to this folder. | (optional) defaults to undefined
 **apiTokenId** | [**string**] | Only list webhooks scoped to this API token. | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**WebhookList**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhooks for a template and event |  -  |
**422** | unknown event type |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **moveFolder**
> Folder moveFolder(body)

Moves a folder into another folder, or to the root with `parent_folder_id: null`. Its templates and folders move with it. A folder can't move into itself or one of its own folders. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientMoveFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientMoveFolderRequest = {
    // The folder's ID.
  folderId: "folder_id_example",
    // Where to move the folder.
  body: {
    parent_folder_id: "parent_folder_id_example",
  },
};

const data = await apiInstance.moveFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MoveFolderRequest**| Where to move the folder. |
 **folderId** | [**string**] | The folder's ID. | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder moved into another folder |  -  |
**422** | invalid move |  -  |
**404** | folder not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **moveTemplate**
> Template moveTemplate(body)

Moves a template and all of its published versions to a folder, or to the root (`null`).

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientMoveTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientMoveTemplateRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // Where to move the template.
  body: {
    parent_folder_id: "parent_folder_id_example",
  },
};

const data = await apiInstance.moveTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MoveTemplateRequest**| Where to move the template. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template moved |  -  |
**422** | invalid move |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **publishTemplateVersion**
> TemplateVersion publishTemplateVersion(body)

Publishes the template's draft as a new version that doesn't change. `version_type` says which part of the latest version number goes up. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientPublishTemplateVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientPublishTemplateVersionRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The version to publish.
  body: {
    version_type: null,
    description: "description_example",
  },
};

const data = await apiInstance.publishTemplateVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PublishTemplateVersionRequest**| The version to publish. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined


### Return type

**TemplateVersion**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | version published |  -  |
**422** | invalid version type |  -  |
**404** | template not found |  -  |
**409** | published at the same time |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **renameFolder**
> Folder renameFolder(body)

Renames a folder. The name must be unique within its parent folder. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientRenameFolderRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientRenameFolderRequest = {
    // The folder's ID.
  folderId: "folder_id_example",
    // The folder's new name.
  body: {
    name: "name_example",
  },
};

const data = await apiInstance.renameFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RenameFolderRequest**| The folder's new name. |
 **folderId** | [**string**] | The folder's ID. | defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder renamed |  -  |
**422** | name already exists |  -  |
**404** | folder not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreTemplateVersion**
> Template restoreTemplateVersion(body)

Replaces the template's draft with a copy of one of its published versions.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientRestoreTemplateVersionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientRestoreTemplateVersionRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The version to restore.
  body: {
    version: "version_example",
  },
};

const data = await apiInstance.restoreTemplateVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RestoreTemplateVersionRequest**| The version to restore. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | version restored |  -  |
**409** | template is locked |  -  |
**422** | unknown version |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testAuthentication**
> AuthenticationCheck testAuthentication()

Checks whether your API token is valid by making an authenticated request. This endpoint is useful for verifying credentials during setup or troubleshooting issues. 

### Example


```typescript
import { createConfiguration, Client } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request = {};

const data = await apiInstance.testAuthentication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AuthenticationCheck**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authentication succeeded |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSignatureRequest**
> SignatureRequest updateSignatureRequest(body)

Changes a pending signature request's metadata, or how your app authenticated the person (for the audit trail). Once the person has opened it, only its metadata can be changed, and a completed or declined signature request can't be changed. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateSignatureRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateSignatureRequestRequest = {
    // The signature request's ID.
  signatureRequestId: "srq_1234567890abcdef01",
    // The settings to change. Properties left out keep their values.
  body: {
    metadata: {},
    auth_type: null,
    auth_second_factor_type: null,
    auth_provider: "auth_provider_example",
    auth_session_started_at: new Date('1970-01-01T00:00:00.00Z'),
    auth_session_id_hash: "auth_session_id_hash_example",
    auth_user_id_hash: "auth_user_id_hash_example",
    auth_username_hash: "auth_username_hash_example",
    auth_phone_number_hash: "auth_phone_number_hash_example",
  },
};

const data = await apiInstance.updateSignatureRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateSignatureRequestRequest**| The settings to change. Properties left out keep their values. |
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined


### Return type

**SignatureRequest**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | signature request updated |  -  |
**409** | signature request completed |  -  |
**422** | invalid request |  -  |
**404** | signature request not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTemplate**
> Template updateTemplate(body)

Changes a template's draft. Properties left out keep their values. `defaults` and `html_engine_options` replace the whole object. Setting `parent_folder_id` moves the template and all of its published versions. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The settings to change. Properties left out keep their values.
  body: {
    name: "name_example",
    description: "description_example",
    parent_folder_id: "parent_folder_id_example",
    locked: true,
    add_signature_request_submission_id_footers: true,
    ai_field_naming_language: null,
    allow_additional_properties: true,
    allow_skipping_optional_fields: true,
    default_form_mode: null,
    editable_submissions: true,
    embed_domains: [
      "embed_domains_example",
    ],
    embed_edit_allow_settings: true,
    embed_edit_allow_versioning: true,
    embed_edit_allow_document_replacement: true,
    encrypt_pdfs: true,
    encrypt_pdfs_password: "encrypt_pdfs_password_example",
    expire_submissions: true,
    expire_after: 1,
    expiration_interval: null,
    merge_audit_trail_pdf: true,
    parse_dates_using_template_date_format: true,
    public_submissions: true,
    public_web_form: true,
    redirect_url: "redirect_url_example",
    slack_webhook_url: "slack_webhook_url_example",
    defaults: null,
    field_dependencies: [
      {
        action: null,
        match: null,
        conditions: [
          null,
        ],
        targets: [
          "targets_example",
        ],
        group: "group_example",
      },
    ],
    html: "html_example",
    scss: "scss_example",
    header_html: "header_html_example",
    footer_html: "footer_html_example",
    html_engine_options: null,
  },
};

const data = await apiInstance.updateTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateTemplateRequest**| The settings to change. Properties left out keep their values. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template updated |  -  |
**409** | template is locked |  -  |
**404** | template not found |  -  |
**422** | invalid update |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTemplateDocument**
> Template updateTemplateDocument(body)

Replaces a PDF template's PDF with one you uploaded with the presigned upload (GET /uploads/presign). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. To send the PDF with the request instead, use PUT /templates/{template_id}/document/upload. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateDocumentRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The new PDF.
  body: {
    cache_id: "cache_id_example",
    filename: "filename_example",
    reimport_fields: true,
  },
    // Wait until the PDF has been processed before responding. Default true on sync.api hosts. (optional)
  wait: true,
};

const data = await apiInstance.updateTemplateDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateTemplateDocumentRequest**| The new PDF. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been processed before responding. Default true on sync.api hosts. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PDF replaced |  -  |
**409** | template is locked, so its fields can't be re-imported |  -  |
**422** | not a PDF template |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateWebhook**
> Webhook updateWebhook(body)

Updates a webhook. Only the properties you send change.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateWebhookRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateWebhookRequest = {
    // The webhook's ID.
  webhookId: "webhook_id_example",
    // The settings to change. Properties left out keep their values.
  body: {
    name: "name_example",
    url: "url_example",
    enabled: true,
    event_types: [
      "submission.processed",
    ],
    mode: null,
    api_token_ids: [
      "api_token_ids_example",
    ],
    template_ids: [
      "template_ids_example",
    ],
    folder_ids: [
      "folder_ids_example",
    ],
    include_submission_data: true,
    strip_fields: [
      "strip_fields_example",
    ],
    headers: {
      "key": "key_example",
    },
  },
};

const data = await apiInstance.updateWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateWebhookRequest**| The settings to change. Properties left out keep their values. |
 **webhookId** | [**string**] | The webhook's ID. | defaults to undefined


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhook updated |  -  |
**404** | webhook not found |  -  |
**422** | invalid webhook |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadTemplate**
> Template uploadTemplate()

Creates a PDF template from a PDF sent with the request (`multipart/form-data`). For large files, upload the PDF with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUploadTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUploadTemplateRequest = {
    // The PDF.
  document: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Wait until the PDF has been processed before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // The template's name. (optional)
  name: "name_example",
    // The template's description. (optional)
  description: "description_example",
    // The folder to put the template in. Left out, it's created at the root. (optional)
  parentFolderId: "parentFolderId_example",
    // The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings. (optional)
  aiFieldNamingLanguage: null,
    // Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up. (optional)
  detectFields: true,
    // With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields. (optional)
  fieldSource: null,
    // With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`. (optional)
  fieldNaming: null,
    // With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings. (optional)
  fieldLogic: null,
};

const data = await apiInstance.uploadTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document** | [**HttpFile**] | The PDF. | defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been processed before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **name** | [**string**] | The template's name. | (optional) defaults to undefined
 **description** | [**string**] | The template's description. | (optional) defaults to undefined
 **parentFolderId** | [**string**] | The folder to put the template in. Left out, it's created at the root. | (optional) defaults to undefined
 **aiFieldNamingLanguage** | **AiFieldNamingLanguage** | The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings. | (optional) defaults to undefined
 **detectFields** | [**boolean**] | Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up. | (optional) defaults to undefined
 **fieldSource** | **FieldSetupSource** | With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields. | (optional) defaults to undefined
 **fieldNaming** | **FieldSetupNaming** | With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`. | (optional) defaults to undefined
 **fieldLogic** | **FieldSetupLogic** | With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | PDF template created |  -  |
**422** | invalid upload |  -  |
**403** | the plan's template limit is reached |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadTemplateDocument**
> Template uploadTemplateDocument()

Replaces a PDF template's PDF with one sent with the request (`multipart/form-data`). The fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUploadTemplateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUploadTemplateDocumentRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The new PDF.
  document: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Wait until the PDF has been processed before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. (optional)
  reimportFields: true,
};

const data = await apiInstance.uploadTemplateDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **document** | [**HttpFile**] | The new PDF. | defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been processed before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **reimportFields** | [**boolean**] | Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PDF replaced |  -  |
**422** | not a PDF template |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


