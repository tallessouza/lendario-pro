const translation = {
  title: 'Tools',
  createCustomTool: 'Create Custom Tool',
  type: {
    all: 'All',
    builtIn: 'Built-in',
    custom: 'Custom',
  },
  contribute: {
    line1: 'I\'m interested in ',
    line2: 'contributing tools to Dify.',
    viewGuide: 'View the guide',
  },
  author: 'By',
  auth: {
    unauthorized: 'To Authorize',
    authorized: 'Authorized',
    setup: 'Set up authorization to use',
    setupModalTitle: 'Set Up Authorization',
    setupModalTitleDescription: 'After configuring credentials, all members within the workspace can use this tool when orchestrating applications.',
  },
  includeToolNum: '{{num}} tools included',
  addTool: 'Add Tool',
  createTool: {
    title: 'Create Custom Tool',
    editAction: 'Configure',
    editTitle: 'Edit Custom Tool',
    name: 'Name',
    toolNamePlaceHolder: 'Enter the tool name',
    schema: 'Schema',
    schemaPlaceHolder: 'Enter your OpenAPI schema here',
    viewSchemaSpec: 'View the OpenAPI-Swagger Specification',
    importFromUrl: 'Import from URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Please enter a valid URL',
    examples: 'Examples',
    exampleOptions: {
      json: 'Weather(JSON)',
      yaml: 'Pet Store(YAML)',
      blankTemplate: 'Blank Template',
    },
    availableTools: {
      title: 'Available Tools',
      name: 'Name',
      description: 'Description',
      method: 'Method',
      path: 'Path',
      action: 'Actions',
      test: 'Test',
    },
    authMethod: {
      title: 'Authorization method',
      type: 'Authorization type',
      keyTooltip: 'Http Header Key, You can leave it with "Authorization" if you have no idea what it is or set it to a custom value',
      types: {
        none: 'None',
        api_key: 'API Key',
        apiKeyPlaceholder: 'HTTP header name for API Key',
        apiValuePlaceholder: 'Enter API Key',
      },
      key: 'Key',
      value: 'Value',
    },
    authHeaderPrefix: {
      title: 'Auth Type',
      types: {
        basic: 'Basic',
        bearer: 'Bearer',
        custom: 'Custom',
      },
    },
    privacyPolicy: 'Privacy policy',
    privacyPolicyPlaceholder: 'Please enter privacy policy',
  },
  test: {
    title: 'Test',
    parametersValue: 'Parameters & Value',
    parameters: 'Parameters',
    value: 'Value',
    testResult: 'Test Results',
    testResultPlaceholder: 'Test result will show here',
  },
  thought: {
    using: 'Using',
    used: 'Used',
    requestTitle: 'Request to',
    responseTitle: 'Response from',
  },
  setBuiltInTools: {
    info: 'Info',
    setting: 'Setting',
    toolDescription: 'Tool description',
    parameters: 'parameters',
    string: 'string',
    number: 'number',
    required: 'Required',
    infoAndSetting: 'Info & Settings',
  },
  noCustomTool: {
    title: 'No custom tools!',
    content: 'Add and manage your custom tools here for building AI apps.',
    createTool: 'Create Tool',
  },
  noSearchRes: {
    title: 'Sorry, no results!',
    content: 'We couldn\'t find any tools that match your search.',
    reset: 'Reset Search',
  },
  builtInPromptTitle: 'Prompt',
  toolRemoved: 'Tool removed',
  notAuthorized: 'Tool not authorized',
  howToGet: 'How to get',
}

export default translation
