# DocSpring.Client

All URIs are relative to *https://sync.api.docspring.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTemplateFields**](Client.md#addTemplateFields) | **POST** /templates/{template_id}/fields | Add fields to a template
[**copyTemplate**](Client.md#copyTemplate) | **POST** /templates/{template_id}/copy | Copy a template
[**createAccountEmailAction**](Client.md#createAccountEmailAction) | **POST** /email_actions | Create an account email action
[**createCombinedPdf**](Client.md#createCombinedPdf) | **POST** /combined_pdfs | Combine PDFs
[**createCustomFileFromUpload**](Client.md#createCustomFileFromUpload) | **POST** /custom_files | Create a custom file from an upload
[**createEmailAction**](Client.md#createEmailAction) | **POST** /templates/{template_id}/email_actions | Create an email action
[**createEmailDomain**](Client.md#createEmailDomain) | **POST** /email_domains | Add an email domain
[**createFolder**](Client.md#createFolder) | **POST** /folders | Create a folder
[**createSignatureRequestEvent**](Client.md#createSignatureRequestEvent) | **POST** /signature_requests/{signature_request_id}/events | Record a signature request event
[**createSignatureRequestToken**](Client.md#createSignatureRequestToken) | **POST** /signature_requests/{signature_request_id}/tokens | Create a signature request token
[**createSubmission**](Client.md#createSubmission) | **POST** /templates/{template_id}/submissions | Generate a PDF
[**createSubmissionBatch**](Client.md#createSubmissionBatch) | **POST** /submissions/batches | Generate PDFs in a batch
[**createTemplate**](Client.md#createTemplate) | **POST** /templates | Create a template
[**createTemplatePreview**](Client.md#createTemplatePreview) | **POST** /templates/{template_id}/previews | Preview a template with data
[**createWebhook**](Client.md#createWebhook) | **POST** /webhooks | Create a webhook
[**deleteAccountEmailAction**](Client.md#deleteAccountEmailAction) | **DELETE** /email_actions/{email_action_id} | Delete an account email action
[**deleteCustomFile**](Client.md#deleteCustomFile) | **DELETE** /custom_files/{custom_file_id} | Delete a custom file
[**deleteEmailAction**](Client.md#deleteEmailAction) | **DELETE** /templates/{template_id}/email_actions/{email_action_id} | Delete an email action
[**deleteEmailActionCustomization**](Client.md#deleteEmailActionCustomization) | **DELETE** /templates/{template_id}/email_actions/{email_action_id}/customization | Reset an account email action's customization
[**deleteEmailDomain**](Client.md#deleteEmailDomain) | **DELETE** /email_domains/{email_domain_id} | Remove an email domain
[**deleteFolder**](Client.md#deleteFolder) | **DELETE** /folders/{folder_id} | Delete a folder
[**deleteTemplate**](Client.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a template
[**deleteWebhook**](Client.md#deleteWebhook) | **DELETE** /webhooks/{webhook_id} | Delete a webhook
[**expireCombinedPdf**](Client.md#expireCombinedPdf) | **DELETE** /combined_pdfs/{combined_pdf_id} | Expire a combined PDF
[**expireSubmission**](Client.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a submission
[**generateSubmissionFiles**](Client.md#generateSubmissionFiles) | **POST** /submissions/{submission_id}/generate_files | Generate more files
[**generateSubmissionPreview**](Client.md#generateSubmissionPreview) | **POST** /submissions/{submission_id}/generate_preview | Generate a preview PDF
[**getAccountEmailAction**](Client.md#getAccountEmailAction) | **GET** /email_actions/{email_action_id} | Get an account email action
[**getCombinedPdf**](Client.md#getCombinedPdf) | **GET** /combined_pdfs/{combined_pdf_id} | Get a combined PDF
[**getCustomFile**](Client.md#getCustomFile) | **GET** /custom_files/{custom_file_id} | Get a custom file
[**getEmailAction**](Client.md#getEmailAction) | **GET** /templates/{template_id}/email_actions/{email_action_id} | Get an email action
[**getEmailDomain**](Client.md#getEmailDomain) | **GET** /email_domains/{email_domain_id} | Get an email domain
[**getFolder**](Client.md#getFolder) | **GET** /folders/{folder_id} | Get a folder
[**getPresignUrl**](Client.md#getPresignUrl) | **GET** /uploads/presign | Get a presigned URL to upload a file
[**getSignatureRequest**](Client.md#getSignatureRequest) | **GET** /signature_requests/{signature_request_id} | Get a signature request
[**getSubmission**](Client.md#getSubmission) | **GET** /submissions/{submission_id} | Get a submission
[**getSubmissionBatch**](Client.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Get a batch
[**getTemplate**](Client.md#getTemplate) | **GET** /templates/{template_id} | Get a template
[**getTemplateDiff**](Client.md#getTemplateDiff) | **GET** /templates/{template_id}/diff | Compare a version of a template with the one before it
[**getTemplateModelCode**](Client.md#getTemplateModelCode) | **GET** /templates/{template_id}/model_code | Generate typed code for a template's submission data
[**getTemplatePageImages**](Client.md#getTemplatePageImages) | **GET** /templates/{template_id}/page_images | Get images of a template's pages
[**getTemplatePreview**](Client.md#getTemplatePreview) | **GET** /templates/{template_id}/previews/{preview_id} | Get a template preview
[**getTemplateSchema**](Client.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Get the JSON Schema of a template's submission data
[**getWebhook**](Client.md#getWebhook) | **GET** /webhooks/{webhook_id} | Get a webhook
[**listAccountEmailActions**](Client.md#listAccountEmailActions) | **GET** /email_actions | List account email actions
[**listCombinedPdfs**](Client.md#listCombinedPdfs) | **GET** /combined_pdfs | List combined PDFs
[**listCustomFiles**](Client.md#listCustomFiles) | **GET** /custom_files | List custom files
[**listEmailActions**](Client.md#listEmailActions) | **GET** /templates/{template_id}/email_actions | List email actions
[**listEmailDomains**](Client.md#listEmailDomains) | **GET** /email_domains | List email domains
[**listFolders**](Client.md#listFolders) | **GET** /folders | List folders
[**listSubmissions**](Client.md#listSubmissions) | **GET** /submissions | List submissions
[**listTemplateFields**](Client.md#listTemplateFields) | **GET** /templates/{template_id}/fields | List a template's fields
[**listTemplateSubmissions**](Client.md#listTemplateSubmissions) | **GET** /templates/{template_id}/submissions | List a template's submissions
[**listTemplates**](Client.md#listTemplates) | **GET** /templates | List templates
[**listWebhooks**](Client.md#listWebhooks) | **GET** /webhooks | List webhooks
[**moveFolder**](Client.md#moveFolder) | **POST** /folders/{folder_id}/move | Move a folder
[**moveTemplate**](Client.md#moveTemplate) | **POST** /templates/{template_id}/move | Move a template to a folder
[**publishTemplateVersion**](Client.md#publishTemplateVersion) | **POST** /templates/{template_id}/publish_version | Publish a template version
[**removeTemplateFields**](Client.md#removeTemplateFields) | **POST** /templates/{template_id}/fields/remove | Remove fields from a template
[**renameFolder**](Client.md#renameFolder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**reorderTemplateFields**](Client.md#reorderTemplateFields) | **POST** /templates/{template_id}/fields/reorder | Reorder a template's fields
[**restoreTemplateVersion**](Client.md#restoreTemplateVersion) | **POST** /templates/{template_id}/restore_version | Restore a template version
[**sendAccountEmailActionTestEmail**](Client.md#sendAccountEmailActionTestEmail) | **POST** /email_actions/{email_action_id}/test_email | Send a test email for an account email action
[**sendEmailActionTestEmail**](Client.md#sendEmailActionTestEmail) | **POST** /templates/{template_id}/email_actions/{email_action_id}/test_email | Send a test email
[**testAuthentication**](Client.md#testAuthentication) | **GET** /authentication | Test authentication
[**updateAccountEmailAction**](Client.md#updateAccountEmailAction) | **PUT** /email_actions/{email_action_id} | Update an account email action
[**updateEmailAction**](Client.md#updateEmailAction) | **PUT** /templates/{template_id}/email_actions/{email_action_id} | Update an email action
[**updateEmailActionCustomization**](Client.md#updateEmailActionCustomization) | **PUT** /templates/{template_id}/email_actions/{email_action_id}/customization | Customize an account email action for a template
[**updateSignatureRequest**](Client.md#updateSignatureRequest) | **PUT** /signature_requests/{signature_request_id} | Update a signature request
[**updateTemplate**](Client.md#updateTemplate) | **PUT** /templates/{template_id} | Update a template
[**updateTemplateDocument**](Client.md#updateTemplateDocument) | **PUT** /templates/{template_id}/document | Replace a template's document
[**updateTemplateFields**](Client.md#updateTemplateFields) | **PUT** /templates/{template_id}/fields | Update a template's fields
[**updateWebhook**](Client.md#updateWebhook) | **PUT** /webhooks/{webhook_id} | Update a webhook
[**uploadTemplate**](Client.md#uploadTemplate) | **POST** /templates/upload | Create a template from an uploaded PDF or Word document
[**uploadTemplateDocument**](Client.md#uploadTemplateDocument) | **PUT** /templates/{template_id}/document/upload | Replace a template's document with an uploaded file
[**validateSubmission**](Client.md#validateSubmission) | **POST** /templates/{template_id}/submissions/validate | Check a submission without creating it
[**verifyEmailDomain**](Client.md#verifyEmailDomain) | **POST** /email_domains/{email_domain_id}/verify | Verify an email domain


# **addTemplateFields**
> TemplateFields addTemplateFields(body)

Adds fields to a template's draft and returns all of its fields. Publish a version for submissions of published versions to have them. A field with the name of one of the template's fields shares its settings (`type`, `required`, `default`, ...), so a field that sets one to another value is refused: PUT /templates/{template_id}/fields changes them for every field with the name. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientAddTemplateFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientAddTemplateFieldsRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The fields to add to the template's draft.
  body: {
    fields: [
      {
        name: "name_example",
        page: 1,
        type: null,
        _static: true,
        editable: true,
        _default: "_default_example",
        title: "title_example",
        description: "description_example",
        placeholder: "placeholder_example",
        metadata: "metadata_example",
        required: true,
        option_list: "option_list_example",
        combined_field_names: "combined_field_names_example",
        combined_field_type: null,
        combined_field_separator: "combined_field_separator_example",
        combined_field_format: "combined_field_format_example",
        integer: true,
        minimum: 3.14,
        maximum: 3.14,
        exclusive_minimum: true,
        exclusive_maximum: true,
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
        min_length: 3.14,
        max_length: 1,
        auto_calculate_max_length: true,
        color: "color_example",
        color_field_name: "color_field_name_example",
        color_field_required: true,
        background_color: "background_color_example",
        background_color_field_name: "background_color_field_name_example",
        background_color_field_required: true,
        alignment: null,
        v_alignment: null,
        comb: true,
        comb_number_of_cells: 1,
        comb_value_offset: 1,
        shape_type: null,
        shape_sides: 1,
        shape_border_width: 1,
        shape_border_color: "shape_border_color_example",
        shape_border_color_field_name: "shape_border_color_field_name_example",
        shape_border_color_field_required: true,
        shape_fill_color: "shape_fill_color_example",
        shape_fill_color_field_name: "shape_fill_color_field_name_example",
        shape_fill_color_field_required: true,
        check_character: null,
        check_color: "check_color_example",
        check_color_field_name: "check_color_field_name_example",
        check_color_field_required: true,
        qrcode_color: "qrcode_color_example",
        qrcode_color_field_name: "qrcode_color_field_name_example",
        qrcode_color_field_required: true,
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
        currency: true,
        decimal_places: 1,
        image_scale_type: null,
        image_gravity: null,
        dependencies: null,
        id: 1,
      },
    ],
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.addTemplateFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AddTemplateFieldsRequest**| The fields to add to the template's draft. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**TemplateFields**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | fields added |  -  |
**409** | the template's PDF hasn't been processed |  -  |
**422** | invalid fields |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.copyTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CopyTemplateRequest**| Settings for the copy. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createAccountEmailAction**
> EmailAction createAccountEmailAction(body)

Adds an email action to your account. It sends for every template, or only for the templates in `template_ids` and the templates in the folders in `folder_ids` (and the folders inside them). Each template can turn it off or change its settings for that template only (`PUT /templates/{template_id}/email_actions/{email_action_id}/customization`). Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateAccountEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateAccountEmailActionRequest = {
    // The account email action to create. Properties left out get their defaults, and it sends for every template unless it lists `template_ids` or `folder_ids`.
  body: {
    template_ids: [
      "template_ids_example",
    ],
    folder_ids: [
      "folder_ids_example",
    ],
    name: "name_example",
    enabled: true,
    to: [
      "to_example",
    ],
    cc: [
      "cc_example",
    ],
    bcc: [
      "bcc_example",
    ],
    from_name: "from_name_example",
    from_address: "from_address_example",
    reply_to: "reply_to_example",
    subject: "subject_example",
    message: "message_example",
    file_name: "file_name_example",
    file_formats: null,
    delivery: null,
    max_attachment_mb: 1,
    submission_type: null,
    send_when: null,
    failure_notifications_enabled: true,
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createAccountEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateAccountEmailActionRequest**| The account email action to create. Properties left out get their defaults, and it sends for every template unless it lists `template_ids` or `folder_ids`. |
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | account email action created |  -  |
**422** | unknown template |  -  |
**403** | email actions turned off for the account |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createCombinedPdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateCombinedPdfRequest**| The PDFs to merge, and the combined PDF's settings. |
 **wait** | [**boolean**] | Wait until the PDF has been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**CombinedPdf**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**409** | a request with the same Idempotency-Key is still being processed |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's combined_pdf_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createCustomFileFromUpload(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateCustomFileFromUploadRequest**| The uploaded file to create the custom file from. |
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**CustomFile**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | custom file created |  -  |
**422** | invalid custom file |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createEmailAction**
> EmailAction createEmailAction(body)

Adds an email action to a template's draft. From then on, each processed submission emails its PDF to the recipients in `to`, `cc` and `bcc`: addresses, and tags for the address in one of the submission's fields (`{{ data.tenant_email }}`) or in its metadata (`{{ metadata.agent_email }}`). With `send_when`, only the submissions whose values meet its conditions send one. Without a paid plan (Starter or higher), email actions only email your team: test submissions' emails go to your account's users, and live submissions' emails aren't sent. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateEmailActionRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The email action to create. Properties left out get their defaults.
  body: {
    name: "name_example",
    enabled: true,
    to: [
      "to_example",
    ],
    cc: [
      "cc_example",
    ],
    bcc: [
      "bcc_example",
    ],
    from_name: "from_name_example",
    from_address: "from_address_example",
    reply_to: "reply_to_example",
    subject: "subject_example",
    message: "message_example",
    file_name: "file_name_example",
    file_formats: null,
    delivery: null,
    max_attachment_mb: 1,
    submission_type: null,
    send_when: null,
    failure_notifications_enabled: true,
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateEmailActionRequest**| The email action to create. Properties left out get their defaults. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | email action created |  -  |
**422** | invalid email action |  -  |
**403** | email actions turned off for the account |  -  |
**409** | locked template |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createEmailDomain**
> EmailDomain createEmailDomain(body)

Adds a domain for email actions to send from, and returns the DNS records to add to it. DocSpring checks for them every few minutes, and the domain is verified once its DKIM and DMARC records are found. Needs a paid monthly plan. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateEmailDomainRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateEmailDomainRequest = {
    // The domain to add.
  body: {
    domain: "domain_example",
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createEmailDomain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateEmailDomainRequest**| The domain to add. |
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailDomain**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | email domain added |  -  |
**422** | invalid domain |  -  |
**403** | plan without email actions |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateFolderRequest**| The folder to create. |
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | folder created inside another folder |  -  |
**422** | invalid folder |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createSignatureRequestEvent**
> SignatureRequestEvent createSignatureRequestEvent(body)

Records something that happened outside DocSpring in the signature request's audit trail: you sent the request to the person (`send_request`). The audit trail shows it as reported by your account. A finished (completed, declined or expired) signature request's audit trail takes no more events, and a test API token can't record one for a live signature request. 

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createSignatureRequestEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSignatureRequestEventRequest**| The event to record. |
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**SignatureRequestEvent**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | event recorded |  -  |
**403** | test API token on a live signature request |  -  |
**409** | signature request finished |  -  |
**422** | invalid event |  -  |
**404** | signature request not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createSignatureRequestToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSignatureRequestTokenRequest**| The kind of link to make. Send no body for an `api` token. |
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**SignatureRequestToken**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createSubmission**
> Submission createSubmission(body)

Creates a submission: fills in a template with your data and generates a PDF. The PDF is generated in the background: on sync.api hosts the request waits for it (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until `state` isn't `pending`.  Data that doesn't match the template's fields returns a 422 with an `invalid_data` error. The submission is still saved, with its errors, so you can find it in DocSpring: the error's `submission_id` is its ID.  With `signature_requests`, the PDF is generated once everyone has signed. DocSpring emails each signer a link to sign, unless `send_email` is false, and can send reminders and the completed document. 

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
    output_formats: [
      "pdf",
    ],
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
        send_email: true,
        signing_step: 1,
      },
    ],
    send_email: true,
    signing_order: null,
    email_subject: "email_subject_example",
    email_message: "email_message_example",
    cc: [
      "cc_example",
    ],
    reply_to: "reply_to_example",
    notification_emails: [
      "notification_emails_example",
    ],
    notify_when_signed: true,
    reminders: null,
  },
    // The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`. (optional)
  version: "version_example",
    // Wait until the files have been generated before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSubmissionRequest**| The submission's data and settings. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`. | (optional) defaults to undefined
 **wait** | [**boolean**] | Wait until the files have been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**409** | a request with the same Idempotency-Key is still being processed |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's submission_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    output_formats: [
      "pdf",
    ],
    submissions: [
      {
        test: true,
        editable: true,
        data: {},
        metadata: {},
        password: "password_example",
        output_formats: [
          "pdf",
        ],
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
    // Wait until every file in the batch has been generated before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createSubmissionBatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateSubmissionBatchRequest**| The submissions to create, and the settings they share. |
 **wait** | [**boolean**] | Wait until every file in the batch has been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**SubmissionBatch**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**409** | a request with the same Idempotency-Key is still being processed |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's submission_batch_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createTemplate**
> Template createTemplate(body)

Creates an HTML template, or a PDF or Word template from a file you uploaded with the presigned upload (GET /uploads/presign): pass its `fields.key` as `cache_id`. You can send a link to the file (`document_url`) or the file in base64 (`document_base64`) instead, or send the file with the request with POST /templates/upload. A Word template is made from a Word document (.docx) or an OpenDocument text file (.odt), which DocSpring converts to a Word document. It needs its `output_format`: what each submission makes, a Word document (`docx`), an OpenDocument file (`odt`) or a PDF. A page design (`page_designer`) takes its `layout` in the Page Designer layout format, or starts with an empty page without one.  A PDF template is ready to generate PDFs once DocSpring has processed its PDF, a template created from a `document_url` once its document has been downloaded, and one created from an .odt once it has been converted (`ready` is true). On sync.api hosts the request waits for that unless you pass `wait=false`. 

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
    output_format: null,
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
    signature_request_email_attachments: null,
    signature_request_from_address: "signature_request_from_address_example",
    signature_request_include_signing_token: true,
    signature_request_from_name: "signature_request_from_name_example",
    signature_request_notification_emails: [
      "signature_request_notification_emails_example",
    ],
    signature_request_reply_to: "signature_request_reply_to_example",
    signature_request_signing_url: "signature_request_signing_url_example",
    success_title: "success_title_example",
    success_message: "success_message_example",
    show_fill_again_button: true,
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
    predefined_fields: [
      {
        name: "name_example",
        display_name: "display_name_example",
        title: "title_example",
        type: null,
        option_list: "option_list_example",
        required_in_template: true,
        field_required: true,
      },
    ],
    predefined_fields_sample_data: {},
    html: "html_example",
    scss: "scss_example",
    header_html: "header_html_example",
    footer_html: "footer_html_example",
    html_engine_options: null,
    html_escape_data: true,
    layout: {},
    cache_id: "cache_id_example",
    document_url: "document_url_example",
    document_base64: "document_base64_example",
    filename: "filename_example",
    detect_fields: true,
    field_source: null,
    field_naming: null,
    field_logic: null,
    include_office_use_fields: true,
  },
    // Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateTemplateRequest**| The template to create. |
 **wait** | [**boolean**] | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's template_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **createTemplatePreview**
> TemplatePreview createTemplatePreview(body)

Makes PNG images of a template's pages filled in with the data you send (not a PDF), so you can check how an HTML, PDF or Word template or a page design prints with your data before you publish a version or send live data. A Word template's pages are its PDF's, whatever its `output_format`. It renders the template's draft, or the published `version` you ask for. A preview makes no submission and uses no credits, and its pages are watermarked like a test submission's PDF. It's `pending` while it renders: get it with GET /templates/{template_id}/previews/{preview_id} until it's `processed`, with an image of each page, or `error`. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientCreateTemplatePreviewRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientCreateTemplatePreviewRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef02",
    // The data to render the template with.
  body: {
    data: {},
  },
    // A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. (optional)
  version: "version_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createTemplatePreview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateTemplatePreviewRequest**| The data to render the template with. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | preview created |  -  |
**409** | this server can't convert Word documents to PDF |  -  |
**422** | no data |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.createWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CreateWebhookRequest**| The webhook to create. |
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | webhook created |  -  |
**422** | invalid webhook |  -  |
**403** | the plan's integration limit is reached |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **deleteAccountEmailAction**
> EmailAction deleteAccountEmailAction()

Deletes one of your account's email actions, with every template's customization of it. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteAccountEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteAccountEmailActionRequest = {
    // The account email action's ID.
  emailActionId: "email_action_id_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteAccountEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailActionId** | [**string**] | The account email action's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | account email action deleted |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteCustomFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFileId** | [**string**] | The custom file's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**CustomFile**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **deleteEmailAction**
> EmailAction deleteEmailAction()

Deletes an email action. Emails it has already queued for submissions aren't sent. Submissions keep the record of the emails it sent. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteEmailActionRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The email action's ID.
  emailActionId: "email_action_id_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **emailActionId** | [**string**] | The email action's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email action deleted |  -  |
**409** | locked template |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **deleteEmailActionCustomization**
> EmailAction deleteEmailActionCustomization()

Removes the template's changes to one of your account's email actions: it sends for this template as it is, and again if the template had turned it off. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteEmailActionCustomizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteEmailActionCustomizationRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The ID of one of your account's email actions that sends for the template.
  emailActionId: "email_action_id_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteEmailActionCustomization(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **emailActionId** | [**string**] | The ID of one of your account's email actions that sends for the template. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | customization reset |  -  |
**409** | locked template |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **deleteEmailDomain**
> EmailDomain deleteEmailDomain()

Removes an email domain. Email actions that send from an address at it fail until you add and verify it again, or change their `from_address`. You can then remove its DNS records. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientDeleteEmailDomainRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientDeleteEmailDomainRequest = {
    // The email domain's ID.
  emailDomainId: "email_domain_id_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteEmailDomain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] | The email domain's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailDomain**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email domain removed |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | [**string**] | The folder's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | Delete only this published version (`1.2.0`) or the draft (`draft`, when no version has been published). Without it, the draft and every published version are deleted. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.deleteWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The webhook's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhook deleted |  -  |
**404** | webhook not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.expireCombinedPdf(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedPdfId** | [**string**] | The combined PDF's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**CombinedPdf**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.expireSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] | The submission's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **generateSubmissionFiles**
> Submission generateSubmissionFiles(body)

Adds formats to a processed submission's files, in the background, without using credits again: `pdf`, the PDF of a Word template's submission that made only its Word document (converted from that document), `docx`, the Word document of a Word template's submission that made only its PDF (made again from its data and the template version it used), `odt`, a Word template's submission's OpenDocument file (converted from its Word document, or from one made again when it didn't keep one), and `png`, a PNG image of each page of the PDF (up to 100 pages), which makes the PDF first when the submission doesn't have one. To make them with the submission, add them to `output_formats` when you create it.  Each new file is listed in `files` while it's made: on sync.api hosts the request waits for them (unless you pass `wait=false`), otherwise poll GET /submissions/{submission_id} until none of their `state` is `pending`. A file that couldn't be made has the state `error` and an `error_message`, and the submission stays processed. Asking for a format the submission already has (or is making) changes nothing. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGenerateSubmissionFilesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGenerateSubmissionFilesRequest = {
    // The submission's ID.
  submissionId: "sub_1234567890abcdef01",
    // The formats to make.
  body: {
    formats: [
      "pdf",
    ],
  },
    // Wait until the files have been generated before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.generateSubmissionFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **GenerateSubmissionFilesRequest**| The formats to make. |
 **submissionId** | [**string**] | The submission's ID. | defaults to undefined
 **wait** | [**boolean**] | Wait until the files have been generated before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | images of the pages requested |  -  |
**409** | files not possible |  -  |
**422** | invalid request |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's submission_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.generateSubmissionPreview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | [**string**] | The submission's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Submission**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getAccountEmailAction**
> EmailAction getAccountEmailAction()

Returns one of your account's email actions, with its settings and whether its emails are failing.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetAccountEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetAccountEmailActionRequest = {
    // The account email action's ID.
  emailActionId: "email_action_id_example",
};

const data = await apiInstance.getAccountEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailActionId** | [**string**] | The account email action's ID. | defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | account email action |  -  |
**404** | account email action not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | combined PDF |  -  |
**404** | combined PDF not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | custom file found |  -  |
**404** | custom file not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getEmailAction**
> EmailAction getEmailAction()

Returns one of a template's email actions, with its settings and whether its emails are failing.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetEmailActionRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The email action's ID.
  emailActionId: "email_action_id_example",
};

const data = await apiInstance.getEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **emailActionId** | [**string**] | The email action's ID. | defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email action |  -  |
**404** | email action not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getEmailDomain**
> EmailDomain getEmailDomain()

Returns an email domain, whether it's verified, and the DNS records to add to it.

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetEmailDomainRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetEmailDomainRequest = {
    // The email domain's ID.
  emailDomainId: "email_domain_id_example",
};

const data = await apiInstance.getEmailDomain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] | The email domain's ID. | defaults to undefined


### Return type

**EmailDomain**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email domain |  -  |
**404** | email domain not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder found |  -  |
**404** | folder not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | presigned URL created |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | signature request |  -  |
**404** | signature request not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed submission |  -  |
**404** | submission not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | batch |  -  |
**404** | batch not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. (optional)
  version: "latest",
};

const data = await apiInstance.getTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getTemplateDiff**
> TemplateDiff getTemplateDiff()

Returns what changed in the template's draft since its latest published version (or in a published version since the one before it): fields added, removed, changed and moved, the settings that changed, and whether the document was replaced. Check it before you publish a version. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplateDiffRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplateDiffRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. (optional)
  version: "0.1.0",
};

const data = await apiInstance.getTemplateDiff(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. | (optional) defaults to undefined


### Return type

**TemplateDiff**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the draft's changes since the latest published version |  -  |
**409** | the template's PDF hasn't been processed |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getTemplateModelCode**
> TemplateModelCode getTemplateModelCode()

Generates types for a template's submission data in TypeScript, JavaScript, Ruby, Python, PHP, Java, C#, Elixir, Go or Rust, so your app catches mistakes before it calls the API. `root_type_name` is the type of the whole `data` object, and `just_types=true` leaves out the code that converts JSON to and from the types. Java returns every class in `code`, each under a `// ClassName.java` comment. A template with no named fields returns 422. 

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
    // The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default. (optional)
  version: "draft",
    // Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way. (optional)
  justTypes: true,
};

const data = await apiInstance.getTemplateModelCode(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **lang** | **ModelCodeLanguage** | The language to generate the code in. | defaults to undefined
 **version** | [**string**] | The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default. | (optional) defaults to undefined
 **justTypes** | [**boolean**] | Return only the types (interfaces, classes or structs), without the code that converts JSON to and from them. Default false. JavaScript has no types, PHP has no types-only code, and Rust's code is only types (serde converts the JSON), so theirs is the same either way. | (optional) defaults to undefined


### Return type

**TemplateModelCode**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getTemplatePageImages**
> TemplatePageImages getTemplatePageImages()

Returns a JPEG image of each page of a PDF template's PDF, with temporary links to download them: the draft's PDF, or a published version's. Use them to see the pages that fields are placed on. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplatePageImagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplatePageImagesRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. (optional)
  version: "latest",
};

const data = await apiInstance.getTemplatePageImages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. | (optional) defaults to undefined


### Return type

**TemplatePageImages**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | page images |  -  |
**409** | no page images |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **getTemplatePreview**
> TemplatePreview getTemplatePreview()

Returns a preview made with POST /templates/{template_id}/previews. Once it's `processed`, `pages` has a PNG image of each page with a temporary link to download it: a preview has no PDF. Previews are deleted an hour after they're created. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientGetTemplatePreviewRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientGetTemplatePreviewRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef02",
    // The preview's ID.
  previewId: "tpv_1234567890abcdef0123",
};

const data = await apiInstance.getTemplatePreview(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **previewId** | [**string**] | The preview's ID. | defaults to undefined


### Return type

**TemplatePreview**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | preview |  -  |
**404** | preview not found |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default. (optional)
  version: "draft",
};

const data = await apiInstance.getTemplateSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | The template version: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`, the version a submission uses by default. | (optional) defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template schema |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhook found |  -  |
**404** | webhook not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **listAccountEmailActions**
> EmailActionList listAccountEmailActions()

Returns your account's email actions, newest first, one page at a time. Each one emails the files of every template's processed submissions, or of the templates and folders it lists. A template's own email actions are listed with the template (`GET /templates/{template_id}/email_actions`). 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListAccountEmailActionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListAccountEmailActionsRequest = {
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listAccountEmailActions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**EmailActionList**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | account email actions |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | combined PDFs |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | custom files |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **listEmailActions**
> EmailActionList listEmailActions()

Returns the email actions of a template's draft, and your account's email actions that send for it, newest first, one page at a time. Each one emails every processed submission's files to the people it lists. An account email action (`template_id` null) shows the settings it sends for this template, with the template's changes in `customization`. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListEmailActionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListEmailActionsRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listEmailActions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**EmailActionList**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email actions |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **listEmailDomains**
> EmailDomainList listEmailDomains()

Returns the domains in your account that email actions can send from once they're verified, newest first, one page at a time. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListEmailDomainsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListEmailDomainsRequest = {
    // How many items to return (1-100, default 50). (optional)
  limit: 50,
    // The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. (optional)
  cursor: "cursor_example",
};

const data = await apiInstance.listEmailDomains(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**EmailDomainList**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email domains |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folders in a folder |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **listSubmissions**
> SubmissionList listSubmissions()

Returns the submissions in your account, newest first, one page at a time. Each one is a summary: its `data` is null unless you pass `include_data=true`, and its `files` are empty unless you pass `include_files=true`. Get a submission by its ID for its signature requests, uploads and page images. 

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
    // Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck. (optional)
  state: "invalid_data",
    // Include each submission's generated files and their download links (`files`, empty without it), without the page images' links. (optional)
  includeFiles: true,
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
 **state** | **SubmissionState** | Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck. | (optional) defaults to undefined
 **includeFiles** | [**boolean**] | Include each submission's generated files and their download links (`files`, empty without it), without the page images' links. | (optional) defaults to undefined


### Return type

**SubmissionList**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submissions |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **listTemplateFields**
> TemplateFields listTemplateFields()

Returns a template's fields with all of their settings, page by page: the draft's fields, or a published version's. A PDF template's fields are placed on its pages: GET /templates/{template_id}/page_images has images of the pages. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListTemplateFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListTemplateFieldsRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. (optional)
  version: "latest",
};

const data = await apiInstance.listTemplateFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | A published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `draft`. | (optional) defaults to undefined


### Return type

**TemplateFields**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fields |  -  |
**409** | the template's PDF hasn't been processed |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck. (optional)
  state: "processed",
    // Include each submission's generated files and their download links (`files`, empty without it), without the page images' links. (optional)
  includeFiles: true,
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
 **state** | **SubmissionState** | Only list submissions in this state (one state per request). The ones that failed are `invalid_data`, `error`, `syntax_error`, `image_download_failed` and `image_processing_failed`, and one still `pending` an hour after it was created is stuck. | (optional) defaults to undefined
 **includeFiles** | [**boolean**] | Include each submission's generated files and their download links (`files`, empty without it), without the page images' links. | (optional) defaults to undefined


### Return type

**SubmissionList**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **listTemplates**
> TemplateSummaryList listTemplates()

Returns the templates in your account (their drafts), newest first, one page at a time. Each one is a summary: get a template by its ID for its settings, its PDF in full, its HTML, defaults and published versions. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientListTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientListTemplatesRequest = {
    // Only list templates whose name contains this text (ignoring case). `%` and `_` match themselves. (optional)
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
 **query** | [**string**] | Only list templates whose name contains this text (ignoring case). `%` and `_` match themselves. | (optional) defaults to undefined
 **parentFolderId** | [**string**] | Only list the templates in this folder (not in its subfolders). | (optional) defaults to undefined
 **limit** | [**number**] | How many items to return (1-100, default 50). | (optional) defaults to 50
 **cursor** | [**string**] | The previous page's `next_cursor`, to get the next page. It's the ID of that page's last item, so get the next page before you delete or change the items on this one. | (optional) defaults to undefined


### Return type

**TemplateSummaryList**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | templates |  -  |
**422** | invalid query parameters |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhooks for a template and event |  -  |
**422** | unknown event type |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.moveFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MoveFolderRequest**| Where to move the folder. |
 **folderId** | [**string**] | The folder's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.moveTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MoveTemplateRequest**| Where to move the template. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **publishTemplateVersion**
> TemplateVersion publishTemplateVersion(body)

Publishes the template's draft as a new version. Its content (the PDF or HTML, fields, name and description) never changes, while settings such as `webhook_url` and `public_submissions` keep following the draft. `version_type` says which part of the latest version number goes up. While the template's PDF is downloading or being processed, or DocSpring is setting up its fields, it returns a 409 that says so. 

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.publishTemplateVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PublishTemplateVersionRequest**| The version to publish. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**TemplateVersion**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | version published |  -  |
**422** | invalid version type |  -  |
**404** | template not found |  -  |
**409** | no changes to publish |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **removeTemplateFields**
> TemplateFields removeTemplateFields(body)

Removes fields from a template's draft and returns the fields that are left. Conditional logic that used only the removed fields is removed too. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientRemoveTemplateFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientRemoveTemplateFieldsRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The fields to remove from the template's draft.
  body: {
    field_ids: [
      1,
    ],
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.removeTemplateFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RemoveTemplateFieldsRequest**| The fields to remove from the template's draft. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**TemplateFields**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fields removed |  -  |
**422** | a field the template does not have |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.renameFolder(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RenameFolderRequest**| The folder's new name. |
 **folderId** | [**string**] | The folder's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Folder**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **reorderTemplateFields**
> TemplateFields reorderTemplateFields(body)

Changes the order of the fields in a template's draft and returns them in their new order. Send every field's ID: each field stays on its page, and a page's fields are printed in this order, so a later field prints over an earlier one where they overlap. Their values are in this order in the template's data schema and forms. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientReorderTemplateFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientReorderTemplateFieldsRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The new order of the fields in the template's draft.
  body: {
    field_ids: [
      1,
    ],
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.reorderTemplateFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ReorderTemplateFieldsRequest**| The new order of the fields in the template's draft. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**TemplateFields**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fields reordered |  -  |
**422** | a field missing from the order |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **restoreTemplateVersion**
> Template restoreTemplateVersion(body)

Replaces the template's draft with a copy of one of its published versions. The draft keeps its settings that apply to every version, such as `webhook_url`.

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.restoreTemplateVersion(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RestoreTemplateVersionRequest**| The version to restore. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **sendAccountEmailActionTestEmail**
> EmailActionTestEmail sendAccountEmailActionTestEmail()

Sends the account email action's email to the API token's user only, as it would go for one template it sends for, with each field shown as its name in brackets, so you can check how it looks. When the email action attaches its files and that template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientSendAccountEmailActionTestEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientSendAccountEmailActionTestEmailRequest = {
    // The account email action's ID.
  emailActionId: "email_action_id_example",
    // Which template the test email is for. (optional)
  body: {
    template_id: "template_id_example",
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.sendAccountEmailActionTestEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SendAccountEmailActionTestEmailRequest**| Which template the test email is for. |
 **emailActionId** | [**string**] | The account email action's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailActionTestEmail**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | test email sent |  -  |
**422** | template it does not send for |  -  |
**409** | no template to send for |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **sendEmailActionTestEmail**
> EmailActionTestEmail sendEmailActionTestEmail()

Sends the email action's email to the API token's user only, with each field and metadata value shown as its name in brackets, so you can check how it looks. When the email action attaches its files and the template is a PDF template, the test attaches the template's blank PDF. It isn't recorded on any submission. Without a paid plan, the user needs a confirmed email address. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientSendEmailActionTestEmailRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientSendEmailActionTestEmailRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The email action's ID.
  emailActionId: "email_action_id_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.sendEmailActionTestEmail(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **emailActionId** | [**string**] | The email action's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailActionTestEmail**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | test email sent |  -  |
**409** | email action that cannot send |  -  |
**403** | email actions turned off for the account |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authentication succeeded |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **updateAccountEmailAction**
> EmailAction updateAccountEmailAction(body)

Changes one of your account's email actions. Properties left out keep their values. Its templates' customizations keep their own changes, and follow the rest. Set `enabled` to false to stop its emails for every template. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateAccountEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateAccountEmailActionRequest = {
    // The account email action's ID.
  emailActionId: "email_action_id_example",
    // The settings to change. Properties left out keep their values.
  body: {
    template_ids: [
      "template_ids_example",
    ],
    folder_ids: [
      "folder_ids_example",
    ],
    name: "name_example",
    enabled: true,
    to: [
      "to_example",
    ],
    cc: [
      "cc_example",
    ],
    bcc: [
      "bcc_example",
    ],
    from_name: "from_name_example",
    from_address: "from_address_example",
    reply_to: "reply_to_example",
    subject: "subject_example",
    message: "message_example",
    file_name: "file_name_example",
    file_formats: null,
    delivery: null,
    max_attachment_mb: 1,
    submission_type: null,
    send_when: null,
    failure_notifications_enabled: true,
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateAccountEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateAccountEmailActionRequest**| The settings to change. Properties left out keep their values. |
 **emailActionId** | [**string**] | The account email action's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | account email action updated |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **updateEmailAction**
> EmailAction updateEmailAction(body)

Changes an email action's settings. Properties left out keep their values. Set `enabled` to false to stop its emails, or to true to turn it back on after DocSpring turned it off. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateEmailActionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateEmailActionRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The email action's ID.
  emailActionId: "email_action_id_example",
    // The settings to change. Properties left out keep their values.
  body: {
    name: "name_example",
    enabled: true,
    to: [
      "to_example",
    ],
    cc: [
      "cc_example",
    ],
    bcc: [
      "bcc_example",
    ],
    from_name: "from_name_example",
    from_address: "from_address_example",
    reply_to: "reply_to_example",
    subject: "subject_example",
    message: "message_example",
    file_name: "file_name_example",
    file_formats: null,
    delivery: null,
    max_attachment_mb: 1,
    submission_type: null,
    send_when: null,
    failure_notifications_enabled: true,
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateEmailAction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateEmailActionRequest**| The settings to change. Properties left out keep their values. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **emailActionId** | [**string**] | The email action's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email action updated |  -  |
**422** | invalid email action |  -  |
**409** | account email action |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **updateEmailActionCustomization**
> EmailAction updateEmailActionCustomization(body)

Changes one of your account's email actions for this template only, replacing any changes the template had. Each setting you send is changed for this template, and the ones you leave out follow the account email action, including later changes to it. Set `enabled` to false to stop it sending for this template. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateEmailActionCustomizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateEmailActionCustomizationRequest = {
    // The template's ID.
  templateId: "template_id_example",
    // The ID of one of your account's email actions that sends for the template.
  emailActionId: "email_action_id_example",
    // The template's changes to the account email action, replacing any it had. Each setting you send is changed for this template, and the ones you leave out follow the account email action. `enabled: false` stops it sending for this template; left out, it sends.
  body: {
    enabled: true,
    to: [
      "to_example",
    ],
    cc: [
      "cc_example",
    ],
    bcc: [
      "bcc_example",
    ],
    from_name: "from_name_example",
    from_address: "from_address_example",
    reply_to: "reply_to_example",
    subject: "subject_example",
    message: "message_example",
    file_name: "file_name_example",
    file_formats: null,
    delivery: null,
    max_attachment_mb: 1,
    submission_type: null,
    send_when: null,
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateEmailActionCustomization(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateEmailActionCustomizationRequest**| The template's changes to the account email action, replacing any it had. Each setting you send is changed for this template, and the ones you leave out follow the account email action. `enabled: false` stops it sending for this template; left out, it sends. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **emailActionId** | [**string**] | The ID of one of your account's email actions that sends for the template. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailAction**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | customization saved |  -  |
**422** | invalid customization |  -  |
**409** | template's own email action |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateSignatureRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateSignatureRequestRequest**| The settings to change. Properties left out keep their values. |
 **signatureRequestId** | [**string**] | The signature request's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**SignatureRequest**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **updateTemplate**
> Template updateTemplate(body)

Changes a template's draft. Properties left out keep their values. `defaults`, `html_engine_options` and a page design's `layout` replace the whole object, and `field_groups` changes only the groups it lists. A new layout adds a field for each new value it reads. Settings such as `webhook_url`, `public_submissions` and `expire_after` apply to every published version too, and setting `parent_folder_id` moves the template and all of its published versions. 

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
    output_format: null,
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
    signature_request_email_attachments: null,
    signature_request_from_address: "signature_request_from_address_example",
    signature_request_include_signing_token: true,
    signature_request_from_name: "signature_request_from_name_example",
    signature_request_notification_emails: [
      "signature_request_notification_emails_example",
    ],
    signature_request_reply_to: "signature_request_reply_to_example",
    signature_request_signing_url: "signature_request_signing_url_example",
    success_title: "success_title_example",
    success_message: "success_message_example",
    show_fill_again_button: true,
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
    field_groups: [
      {
        name: "name_example",
        title: "title_example",
        description: "description_example",
        metadata: "metadata_example",
        min_items: 1,
        max_items: 1,
        allow_additional_items: true,
      },
    ],
    form_sections: [
      {
        id: "id_example",
        title: "title_example",
        description: "description_example",
        field_ids: [
          1,
        ],
      },
    ],
    predefined_fields: [
      {
        name: "name_example",
        display_name: "display_name_example",
        title: "title_example",
        type: null,
        option_list: "option_list_example",
        required_in_template: true,
        field_required: true,
      },
    ],
    predefined_fields_sample_data: {},
    html: "html_example",
    scss: "scss_example",
    header_html: "header_html_example",
    footer_html: "footer_html_example",
    html_engine_options: null,
    html_escape_data: true,
    layout: {},
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateTemplateRequest**| The settings to change. Properties left out keep their values. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template updated |  -  |
**409** | template is locked |  -  |
**422** | invalid field group changes |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **updateTemplateDocument**
> Template updateTemplateDocument(body)

Replaces a PDF template's PDF, or a Word template's Word document (from a .docx or an .odt), with one you uploaded with the presigned upload (GET /uploads/presign) (`cache_id`), a link to download it from (`document_url`), or the file in base64 (`document_base64`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. To send the file as `multipart/form-data` instead, use PUT /templates/{template_id}/document/upload. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateDocumentRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`.
  body: {
    cache_id: "cache_id_example",
    document_url: "document_url_example",
    document_base64: "document_base64_example",
    filename: "filename_example",
    reimport_fields: true,
  },
    // Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateTemplateDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateTemplateDocumentRequest**| The new PDF, or a Word template's new Word document, as one of `cache_id`, `document_url` and `document_base64`. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PDF replaced |  -  |
**409** | template is locked, so its fields can't be re-imported |  -  |
**422** | no document, or more than one |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's template_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **updateTemplateFields**
> TemplateFields updateTemplateFields(body)

Changes fields of a template's draft and returns all of its fields. Settings left out keep their values. A shared setting (`type`, `required`, `default`, ...) changes for every field with the same name. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUpdateTemplateFieldsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUpdateTemplateFieldsRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The fields to change in the template's draft.
  body: {
    fields: [
      {
        name: "name_example",
        page: 1,
        type: null,
        _static: true,
        editable: true,
        _default: "_default_example",
        title: "title_example",
        description: "description_example",
        placeholder: "placeholder_example",
        metadata: "metadata_example",
        required: true,
        option_list: "option_list_example",
        combined_field_names: "combined_field_names_example",
        combined_field_type: null,
        combined_field_separator: "combined_field_separator_example",
        combined_field_format: "combined_field_format_example",
        integer: true,
        minimum: 3.14,
        maximum: 3.14,
        exclusive_minimum: true,
        exclusive_maximum: true,
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
        min_length: 3.14,
        max_length: 1,
        auto_calculate_max_length: true,
        color: "color_example",
        color_field_name: "color_field_name_example",
        color_field_required: true,
        background_color: "background_color_example",
        background_color_field_name: "background_color_field_name_example",
        background_color_field_required: true,
        alignment: null,
        v_alignment: null,
        comb: true,
        comb_number_of_cells: 1,
        comb_value_offset: 1,
        shape_type: null,
        shape_sides: 1,
        shape_border_width: 1,
        shape_border_color: "shape_border_color_example",
        shape_border_color_field_name: "shape_border_color_field_name_example",
        shape_border_color_field_required: true,
        shape_fill_color: "shape_fill_color_example",
        shape_fill_color_field_name: "shape_fill_color_field_name_example",
        shape_fill_color_field_required: true,
        check_character: null,
        check_color: "check_color_example",
        check_color_field_name: "check_color_field_name_example",
        check_color_field_required: true,
        qrcode_color: "qrcode_color_example",
        qrcode_color_field_name: "qrcode_color_field_name_example",
        qrcode_color_field_required: true,
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
        currency: true,
        decimal_places: 1,
        image_scale_type: null,
        image_gravity: null,
        dependencies: null,
        id: 1,
      },
    ],
  },
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateTemplateFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateTemplateFieldsRequest**| The fields to change in the template's draft. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**TemplateFields**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | fields updated |  -  |
**422** | invalid changes |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

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
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.updateWebhook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UpdateWebhookRequest**| The settings to change. Properties left out keep their values. |
 **webhookId** | [**string**] | The webhook's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Webhook**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | webhook updated |  -  |
**403** | turning the webhook on would go over the plan's integration limit |  -  |
**404** | webhook not found |  -  |
**422** | invalid webhook |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **uploadTemplate**
> Template uploadTemplate()

Creates a PDF template from a PDF, or a Word template from a Word document (.docx) or an OpenDocument text file (.odt), sent with the request (`multipart/form-data`). A Word template needs its `output_format`. For large files, upload the file with the presigned upload (GET /uploads/presign) and create the template with POST /templates. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUploadTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUploadTemplateRequest = {
    // A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it).
  document: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. (optional)
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
    // What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document. (optional)
  outputFormat: null,
    // With `detect_fields`, whether AI field setup keeps the fields that only the office receiving the form fills in, such as a "For office use only" box (`true`), or leaves them out (`false`). Default: your account's template settings. (optional)
  includeOfficeUseFields: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.uploadTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document** | [**HttpFile**] | A PDF (for a PDF template) or a Word document (.docx or .odt, for a Word template). DocSpring converts an OpenDocument text file (.odt) to a Word document after responding: the template's `document.state` is `converting` until then (sync.api hosts wait for it). | defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **name** | [**string**] | The template's name. | (optional) defaults to undefined
 **description** | [**string**] | The template's description. | (optional) defaults to undefined
 **parentFolderId** | [**string**] | The folder to put the template in. Left out, it's created at the root. | (optional) defaults to undefined
 **aiFieldNamingLanguage** | **AiFieldNamingLanguage** | The language AI field setup names fields in: `auto` uses the form's language when it's written in the Latin alphabet without accents, and English otherwise; `english` always uses English; `form_language` uses the form's language and script. Default: your account's template settings. | (optional) defaults to undefined
 **detectFields** | [**boolean**] | Set up the PDF's fields as DocSpring's "Automatically detect fields" upload option does: import or detect the fields, name them with AI, and set up conditional logic. `field_source`, `field_naming` and `field_logic` choose how. Default false. `document.page_processing_statuses` and `document.field_logic_status` show how it's going, and `document.state` becomes `processed` once every page's fields are set up. | (optional) defaults to undefined
 **fieldSource** | **FieldSetupSource** | With `detect_fields`, where the fields come from. `auto` (the default) imports the form fields of a fillable PDF and detects the fields of a PDF without them; `pdf_detection` detects the fields from the page layout, even on a fillable PDF; `pdf_form_fields` only imports the PDF's form fields. | (optional) defaults to undefined
 **fieldNaming** | **FieldSetupNaming** | With `detect_fields`, how the fields are named. `ai` (the default) names them and sets their types and settings with AI; `preserve` keeps the names of the PDF's form fields, and AI only names the fields it detected. `preserve` needs `field_source` `auto` or `pdf_form_fields`. | (optional) defaults to undefined
 **fieldLogic** | **FieldSetupLogic** | With `detect_fields`, whether AI reads the whole form once the fields are named and sets up conditional logic and required fields (`ai`) or not (`none`). Default: your account's template settings. | (optional) defaults to undefined
 **outputFormat** | **OutputFormat** | What each submission of a Word template makes unless its request sets `output_formats`: `docx` (a Word document), `odt` (an OpenDocument file, converted from the Word document) or `pdf`. Required when `document` is a Word document. | (optional) defaults to undefined
 **includeOfficeUseFields** | [**boolean**] | With `detect_fields`, whether AI field setup keeps the fields that only the office receiving the form fills in, such as a "For office use only" box (`true`), or leaves them out (`false`). Default: your account's template settings. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

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
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's template_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **uploadTemplateDocument**
> Template uploadTemplateDocument()

Replaces a PDF template's PDF, or a Word template's Word document, with one sent with the request (`multipart/form-data`). A PDF template's fields stay where they are, unless `reimport_fields` replaces them with the new PDF's fillable fields, and a Word template gets a field for each new tag. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientUploadTemplateDocumentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientUploadTemplateDocumentRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The new PDF, or the new Word document (.docx or .odt) of a Word template.
  document: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. (optional)
  wait: true,
    // Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag. (optional)
  reimportFields: true,
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.uploadTemplateDocument(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **document** | [**HttpFile**] | The new PDF, or the new Word document (.docx or .odt) of a Word template. | defaults to undefined
 **wait** | [**boolean**] | Wait until the PDF has been processed, a `document_url`'s PDF or Word document downloaded, and an OpenDocument file converted, before responding. Default true on sync.api hosts. | (optional) defaults to undefined
 **reimportFields** | [**boolean**] | Replace all of the template's fields with the fillable fields in the new PDF, once DocSpring has processed it (`document.field_reimport_state`). As on a first upload, the default typeface, font size, bold and color are taken from the PDF's fields; the template's other settings are kept. If the PDF has no fillable fields, the template keeps its fields. A locked template can't re-import its fields. Only for PDF templates: a Word template adds a field for each new tag. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**Template**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PDF replaced |  -  |
**422** | an HTML template |  -  |
**404** | template not found |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |
**504** | On a sync.api host, the wait ran out: the record was saved and is still being processed. Get it by the ID in the error's template_id instead of sending the request again. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **validateSubmission**
> SubmissionValidation validateSubmission(body)

Checks a submission as creating it would (its data against the template's fields, its settings and signature requests) without saving it, generating anything or using credits. It doesn't check your account's credits. The response says whether the submission is valid, and if not, has the error that creating it would return. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientValidateSubmissionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientValidateSubmissionRequest = {
    // The template's ID.
  templateId: "tpl_1234567890abcdef01",
    // The submission's data and settings.
  body: {
    test: true,
    editable: true,
    data: {},
    metadata: {},
    password: "password_example",
    output_formats: [
      "pdf",
    ],
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
        send_email: true,
        signing_step: 1,
      },
    ],
    send_email: true,
    signing_order: null,
    email_subject: "email_subject_example",
    email_message: "email_message_example",
    cc: [
      "cc_example",
    ],
    reply_to: "reply_to_example",
    notification_emails: [
      "notification_emails_example",
    ],
    notify_when_signed: true,
    reminders: null,
  },
    // The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`. (optional)
  version: "latest",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.validateSubmission(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ValidateSubmissionRequest**| The submission's data and settings. |
 **templateId** | [**string**] | The template's ID. | defaults to undefined
 **version** | [**string**] | The template version to use: a published version (`1.2.0`, or `1` for the latest 1.x.x), `latest` (the newest published version, or the draft when none has been published) or `draft`. Default `latest`. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**SubmissionValidation**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | valid submission |  -  |
**404** | template not found |  -  |
**422** | invalid request |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)

# **verifyEmailDomain**
> EmailDomain verifyEmailDomain()

Checks the email domain's DNS records now, instead of waiting for the next check. If DocSpring has stopped looking for its DKIM records (3 days after they were created), it starts again with new ones: replace the CNAME records with them. 

### Example


```typescript
import { createConfiguration, Client } from '';
import type { ClientVerifyEmailDomainRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Client(configuration);

const request: ClientVerifyEmailDomainRequest = {
    // The email domain's ID.
  emailDomainId: "email_domain_id_example",
    // A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. (optional)
  idempotencyKey: "Idempotency-Key_example",
};

const data = await apiInstance.verifyEmailDomain(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailDomainId** | [**string**] | The email domain's ID. | defaults to undefined
 **idempotencyKey** | [**string**] | A key of your own, such as a UUID, that makes it safe to send this request again: for 24 hours, DocSpring answers a request with the same key from the same API token with the first request's response (and an `Idempotent-Replayed: true` header) instead of processing it again. Send a new key with each new request, and the same key each time you send the same request again, such as after a timeout, a network error or a 5xx. The same key with a different request is a 422 `idempotency_key_reused`. A 409 `idempotency_key_in_use` with a `Retry-After` header means the first request is still being processed: send the request again then. A repeated response is the first one as it was, so its `download_url` links may have expired: use `permanent_url`, or get the record again for new links. | (optional) defaults to undefined


### Return type

**EmailDomain**

### Authorization

[api_token_basic](README.md#install-and-configure)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | email domain verified |  -  |
**401** | authentication failed |  -  |
**429** | Too many requests: wait the number of seconds in the Retry-After header, then send the request again. |  * Retry-After - Seconds until you can send the request again. <br>  |

[[Back to top]](#) [[Back to API list]](README.md#methods) [[Back to Model list]](README.md#methods) [[Back to README]](README.md)


