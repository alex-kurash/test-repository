'use strict';

import template from './template.html';

export default {
    template,
    bindings: {
        fieldLabel: '@',
        fieldPlaceholder: '@',
        fieldName: '@',
        fieldData: '='
    }
};