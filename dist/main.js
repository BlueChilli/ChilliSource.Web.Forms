(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("immutable"), require("recompose"), require("lodash"), require("moment"), require("prop-types"), require("react-date-range"), require("react-dom/server"), require("react-dropzone"), require("react-onclickoutside"), require("react-select"), require("react-select/dist/react-select.css"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "immutable", "recompose", "lodash", "moment", "prop-types", "react-date-range", "react-dom/server", "react-dropzone", "react-onclickoutside", "react-select", "react-select/dist/react-select.css"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("immutable"), require("recompose"), require("lodash"), require("moment"), require("prop-types"), require("react-date-range"), require("react-dom/server"), require("react-dropzone"), require("react-onclickoutside"), require("react-select"), require("react-select/dist/react-select.css")) : factory(root["react"], root["classnames"], root["immutable"], root["recompose"], root["lodash"], root["moment"], root["prop-types"], root["react-date-range"], root["react-dom/server"], root["react-dropzone"], root["react-onclickoutside"], root["react-select"], root["react-select/dist/react-select.css"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getInputPath */
/* unused harmony export getPrioritisedDefaultValue */
/* unused harmony export getPrioritisedValue */
/* unused harmony export withNeededProps */
/* unused harmony export updateLifcycle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationPerformanceWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cs_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cs_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cs_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Actions_fields__ = __webpack_require__(11);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




/** Components */



/** Helpers */
var specificShallowEqual = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_cs_core__["createSpecificShallowEqual"])('inputInfo', 'name', 'nameSpace', 'type', 'id', 'disabled', 'noValidate', 'required', 'className', 'defaultValue', 'defaultChecked', 'defaultSelected', 'options', 'fieldSetNameSpace', 'value', 'label');
var specificShallowEqualDefault = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_cs_core__["createSpecificShallowEqual"])('defaultValue');
var specificShallowEqualValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_cs_core__["createSpecificShallowEqual"])('value');
var getUnsetValue = function (_a) {
    var type = _a.type;
    if (type === 'radio' || type === 'checkbox') {
        return undefined;
    }
    else {
        return '';
    }
};
/**
 *
 * @param type The type of grouping - 'input' or 'validation'
 * @param Object The values for each of the items i.e. {name, id, fieldSetNameSpace}
 */
var getInputPath = function (type, _a) {
    var name = _a.name, id = _a.id, fieldSetNameSpace = _a.fieldSetNameSpace;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["a" /* isMultipleValueInput */])(name) && fieldSetNameSpace !== undefined) {
        if (id) {
            return [fieldSetNameSpace, name, type, id];
        }
        else {
            return [fieldSetNameSpace, name, type];
        }
    }
    else if (fieldSetNameSpace !== undefined) {
        return [fieldSetNameSpace, name];
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["a" /* isMultipleValueInput */])(name)) {
        if (id) {
            return [name, type, id];
        }
        else {
            return [name, type];
        }
    }
    return [name];
};
var getPrioritisedDefaultValue = function (defaultValue, defaultChecked, defaultSelected) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["b" /* returnCheckedValue */])(function (arg) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isUndefined"])(arg) && arg !== false; }, defaultValue, defaultChecked, defaultSelected);
};
var getPrioritisedValue = function (value, inputInfoValue, prioritisedDefaultValue, unsetValue) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__inputHelpers__["b" /* returnCheckedValue */])(function (arg) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isUndefined"])(arg); }, value, inputInfoValue, prioritisedDefaultValue, unsetValue);
};
var setIdToDefault = function (type, id, defaultSwitch) {
    if ((type === 'radio' || type === 'checkbox') &&
        typeof defaultSwitch === 'boolean' &&
        defaultSwitch !== false) {
        return id;
    }
    return defaultSwitch;
};
var withNeededProps = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (props) {
        if (props.nameSpace === undefined) {
            throw new Error("nameSpace is undefined ensure that a Form component is a parent of the component with name: \"" + props.name + "\"");
        }
        var inputPath = getInputPath('input', props);
        var inputInfo = props.FormState.getIn([props.nameSpace].concat(inputPath), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_immutable__["Map"])({}));
        var defaultValue = props.defaultValue, defaultChecked = props.defaultChecked, defaultSelected = props.defaultSelected;
        var prioritisedDefaultValue = getPrioritisedDefaultValue(defaultValue, setIdToDefault(props.type, props.id, defaultChecked), setIdToDefault(props.type, props.id, defaultSelected));
        var value = getPrioritisedValue(props.value, inputInfo.get('value'), prioritisedDefaultValue, getUnsetValue(props));
        return {
            inputInfo: inputInfo,
            defaultValue: prioritisedDefaultValue,
            inputPath: inputPath,
            value: value
        };
    });
};
var setValidationWithHandlersObject = {
    setValidation: function (_a) {
        var dispatch = _a.dispatch, nameSpace = _a.nameSpace, props = __rest(_a, ["dispatch", "nameSpace"]);
        return function (type, test) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["b" /* setValidation */])(nameSpace, getInputPath('validation', props), type, test));
        };
    },
    compareAdditionalProps: function (_a) {
        var additionalCompareProps = _a.additionalCompareProps;
        if (additionalCompareProps) {
            return __WEBPACK_IMPORTED_MODULE_5_cs_core__["createSpecificShallowEqual"].apply(void 0, additionalCompareProps);
        }
        else {
            return function () { return false; };
        }
    }
};
var updateLifcycle = function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
        componentWillMount: function () {
            this.props.inputChanged(this.props.value, false);
        },
        componentWillReceiveProps: function (nextProps) {
            if (!specificShallowEqualDefault(nextProps, this.props)) {
                nextProps.inputChanged(nextProps.defaultValue, false);
            }
            if (!specificShallowEqualValue(nextProps, this.props)) {
                nextProps.inputChanged(nextProps.value, true);
            }
            if (!nextProps.FormState.hasIn([nextProps.nameSpace].concat(nextProps.inputPath))) {
                nextProps.inputChanged(nextProps.value, false);
            }
        }
    });
};
var createUniversalCompose = function (withHandlersArgs, type) {
    if (type === void 0) { type = 'input'; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["getContext"])({
        nameSpace: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        FormState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
        fieldSetNameSpace: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
        dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
    }), withNeededProps(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])(withHandlersArgs), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function (props, nextProps) {
        return (!specificShallowEqual(props, nextProps) ||
            !nextProps.compareAdditionalProps(props, nextProps));
    }));
};
var validationPerformanceWrapper = function (ReactClass) {
    return createUniversalCompose(setValidationWithHandlersObject)(ReactClass);
};
/* harmony default export */ __webpack_exports__["a"] = (function (ReactClass) {
    var inputWrapperCompose = createUniversalCompose(__assign({ inputChanged: function (_a) {
            var dispatch = _a.dispatch, nameSpace = _a.nameSpace, name = _a.name, id = _a.id, fieldSetNameSpace = _a.fieldSetNameSpace;
            return function (value, changed) {
                if (changed === void 0) { changed = true; }
                var inputPath = getInputPath('input', { name: name, id: id, fieldSetNameSpace: fieldSetNameSpace });
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["c" /* setInput */])(nameSpace, inputPath, value));
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["d" /* setInputInteraction */])(nameSpace, inputPath, 'changed', changed));
            };
        }, setInputBlurred: function (_a) {
            var dispatch = _a.dispatch, nameSpace = _a.nameSpace, props = __rest(_a, ["dispatch", "nameSpace"]);
            return function () {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["d" /* setInputInteraction */])(nameSpace, getInputPath('input', props), 'blurred', true));
            };
        } }, setValidationWithHandlersObject));
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(inputWrapperCompose, updateLifcycle())(ReactClass);
});;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMultipleValueInput; });
/* harmony export (immutable) */ __webpack_exports__["b"] = returnCheckedValue;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHTMLAttributes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

/**
 * Checks whether the specified input field is a multi-value
 * input field or not
 * @param inputName The name of the input which needs to be checked
 */
var isMultipleValueInput = function (inputName) {
    return inputName.search(/\[\]$/) !== -1;
};
/**
 * Checks all the supplied values and returns
 * the appropriately validated value
 * @param check Test for the values supplied
 * @param args Values that need to be checked with the test provided
 */
function returnCheckedValue(check) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var innerReturnCheckedValue = function (index) {
        if (index === void 0) { index = 0; }
        if (index === args.length) {
            return undefined;
        }
        else if (check(args[index])) {
            return args[index];
        }
        return innerReturnCheckedValue(index + 1);
    };
    return innerReturnCheckedValue();
}
/**
 * getHTMLAttributes
 * @param props All the props on which the 'picking' is performed
 */
var getHTMLAttributes = function (props) {
    var safeProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["pick"])(props, 'id', 'autoFocus', 'required', 'name', 'type', 'value', 'min', 'max', 'minLength', 'maxLength', 'pattern', 'accept', 'multiple', 'placeholder', 'disabled', 'rows', 'style');
    return safeProps;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_ErrorWrapper__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */

/** Components */

/** Class InputWrapper */
var InputWrapper = /** @class */ (function (_super) {
    __extends(InputWrapper, _super);
    function InputWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputWrapper.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name, label = _a.label, labelPrefix = _a.labelPrefix, labelPostfix = _a.labelPostfix, explanation = _a.explanation, type = _a.type, children = _a.children;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Form_ErrorWrapper__["a" /* default */], { className: className, type: type },
            (label || labelPostfix || labelPrefix) && (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-label-wrapper" },
                labelPrefix && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-label-prefix" }, labelPrefix),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "input-label", htmlFor: name }, label),
                labelPostfix && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-label-postfix" }, labelPostfix))),
            explanation && (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-description" }, typeof explanation === 'string' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, explanation) : explanation)),
            children));
    };
    return InputWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (InputWrapper);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Validation_Validation__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_validate__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */

/** Components */

/** Helpers */

var childrenValidations = function (children) {
    if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.count(children) > 0) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
            return child.props.isFor;
        });
    }
    return [];
};
var isSwitch = function (type) { return type === 'checkbox' || type === 'radio'; };
var validationsUnused = function (validationsUsed, validationsAvailable, isSwitch) {
    return validationsAvailable.filter(function (validation) {
        if (validation === 'type' && isSwitch)
            return false;
        return validationsUsed.indexOf(validation) === -1;
    });
};
/** Class DisplayValidation */
var DisplayValidation = /** @class */ (function (_super) {
    __extends(DisplayValidation, _super);
    function DisplayValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayValidation.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, inputInfo = _a.inputInfo, noValidate = _a.noValidate, type = _a.type, props = __rest(_a, ["children", "disabled", "inputInfo", "noValidate", "type"]);
        var validationsAvail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_validate__["a" /* validationsAvailable */])(props);
        var validationUsed = childrenValidations(children);
        var unusedValidations = validationsUnused(validationUsed, validationsAvail, isSwitch(type));
        if (disabled || noValidate) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", null);
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
                var typeOfValidation = child.props.isFor;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                    test: props[typeOfValidation],
                    inputInfo: inputInfo,
                    type: type,
                    name: props.name,
                    setValidation: props.setValidation
                });
            }),
            unusedValidations.map(function (validation, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Validation_Validation__["a" /* default */], {
                    key: index,
                    isFor: validation,
                    test: props[validation],
                    inputInfo: inputInfo,
                    type: type,
                    children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__libs_validate__["b" /* validationsMessages */])(validation, props[validation]),
                    name: props.name,
                    setValidation: props.setValidation
                });
            })));
    };
    return DisplayValidation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (DisplayValidation);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/** Libraries */


/** Internal method to make creation of input boxes with appended or prepended segments easier */
var InputGroup = function (_a) {
    var prepend = _a.prepend, append = _a.append, style = _a.style, children = _a.children;
    var inputGroupClass = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('input-group', { 'input-prepend': !!prepend }, { 'input-append': !!append });
    return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: inputGroupClass, style: style },
        !!append && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-addon" }, append),
        children,
        !!prepend && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-addon" }, prepend)));
};
/* harmony default export */ __webpack_exports__["a"] = (InputGroup);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationsMessages; });
/* unused harmony export testValidation */
/* harmony export (immutable) */ __webpack_exports__["a"] = validationsAvailable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return testElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationRegExps__ = __webpack_require__(40);


var validations = {
    required: function (value, test, type) {
        if (__WEBPACK_IMPORTED_MODULE_0_immutable__["Iterable"].isIterable(value)) {
            if (type === 'checkbox') {
                return value.size > 0;
            }
        }
        else if (type === 'checkbox') {
            return value === true;
        }
        return value.toString().length > 0 && value !== false;
    },
    pattern: function (value, test) {
        if (value !== undefined && value !== null && (value + '').length > 0) {
            var patternRegExp = new RegExp(test);
            return patternRegExp.test(value);
        }
        return true;
    },
    type: function (value, test) {
        if (test === 'number' || test === 'email') {
            var typeRegExp = new RegExp(__WEBPACK_IMPORTED_MODULE_1__validationRegExps__["a" /* default */][test]);
            return typeRegExp.test(value);
        }
        return true;
    },
    minLength: function (value, test) {
        return value.toString().length >= parseInt(test);
    },
    maxLength: function (value, test) {
        return value.toString().length <= parseInt(test);
    },
    min: function (value, test) {
        return parseInt(value) >= parseInt(test);
    },
    max: function (value, test) {
        return parseInt(value) <= parseInt(test);
    },
    default: function () {
        return false;
    }
};
var validationsMessages = function (type, test) {
    switch (type) {
        case 'required':
            return "This is a required field.";
        case 'minLength':
            return "This is too short, it must have at least " + test + " characters.";
        case 'maxLength':
            return "This is too long, it cannot have more then " + test + " characters.";
        case 'min':
            return "This must be at least " + test + ".";
        case 'max':
            return "This must not be greater than " + test + ".";
        case 'type':
            return "That's not a valid " + test + ".";
        default:
            return "It looks like something went wrong. Try again?";
    }
};
function testValidation(value, typeOfTest, typeOfInput, test) {
    if (value !== undefined && value !== null) {
        if (validations[typeOfTest] !== undefined) {
            if (typeOfTest === 'required') {
                return validations[typeOfTest](value, test, typeOfInput);
            }
            else {
                return validations[typeOfTest](value, test);
            }
        }
        else {
            return validations['default']();
        }
    }
    return validations['default']();
}
function validationsAvailable(inputAttributes) {
    var validationsAvail = Object.keys(validations);
    return validationsAvail.filter(function (validation) { return inputAttributes.hasOwnProperty(validation) && validation !== 'default'; });
}
var testElement = function (_a) {
    var value = _a.value, test = _a.test, isFor = _a.isFor, type = _a.type, setValid = _a.setValid;
    if (test === false || test === 'false') {
        return setValid(true);
    }
    else if (isFor !== 'customValidation' && typeof test !== 'function') {
        return setValid(testValidation(value, isFor, type, test));
    }
    else {
        if (typeof test === 'function') {
            var customValidation = test(value);
            if (typeof customValidation === 'boolean' || customValidation === 'undefined') {
                return setValid(!!customValidation);
            }
            else if (customValidation instanceof Promise) {
                customValidation.then(function (res) { return setValid(!!res); }).catch(function (res) { return setValid(!!res); });
                return setValid(true);
            }
            else {
                return console.error('Custom validation functions must return a bool, undefined or a promise');
            }
        }
        return setValid(false);
    }
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_INPUT */
/* unused harmony export SET_VALIDATION */
/* unused harmony export SET_INPUT_INTERACTION */
/* unused harmony export SET_ALL_INPUT_INTERACTIONS */
/* unused harmony export CLEAR_ALL_INPUTS */
/* harmony export (immutable) */ __webpack_exports__["c"] = setInput;
/* harmony export (immutable) */ __webpack_exports__["b"] = setValidation;
/* harmony export (immutable) */ __webpack_exports__["d"] = setInputInteraction;
/* harmony export (immutable) */ __webpack_exports__["e"] = setAllInputInteractions;
/* harmony export (immutable) */ __webpack_exports__["a"] = clearAllInputs;
/* unused harmony export setDefaultValue */
/** Constants */
var SET_INPUT = 'SET_INPUT';
var SET_VALIDATION = 'SET_VALIDATION';
var SET_INPUT_INTERACTION = 'SET_INPUT_INTERACTION';
var SET_ALL_INPUT_INTERACTIONS = 'SET_ALL_INPUT_INTERACTIONS';
var CLEAR_ALL_INPUTS = 'CLEAR_ALL_INPUTS';
function setInput(nameSpace, inputName, value) {
    return {
        type: SET_INPUT,
        payload: {
            nameSpace: nameSpace,
            inputName: inputName,
            value: value
        }
    };
}
function setValidation(nameSpace, inputName, type, test) {
    return {
        type: SET_VALIDATION,
        payload: {
            nameSpace: nameSpace,
            inputName: inputName,
            type: type,
            test: test
        }
    };
}
function setInputInteraction(nameSpace, inputName, interaction, value) {
    return {
        type: SET_INPUT_INTERACTION,
        payload: {
            nameSpace: nameSpace,
            inputName: inputName,
            interaction: interaction,
            value: value
        }
    };
}
function setAllInputInteractions(nameSpace, interaction, value) {
    return {
        type: SET_ALL_INPUT_INTERACTIONS,
        payload: {
            nameSpace: nameSpace,
            interaction: interaction,
            value: value
        }
    };
}
function clearAllInputs(nameSpace) {
    return {
        type: CLEAR_ALL_INPUTS,
        payload: {
            nameSpace: nameSpace
        }
    };
}
function setDefaultValue(nameSpace, inputName, value) {
    return function (dispatch, getState) {
        var currentValue = getState().getIn(['FormState', nameSpace, inputName, 'value'], false);
        if (!currentValue) {
            dispatch(setInput(nameSpace, inputName, value));
        }
    };
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */


/** Class ErrorWrapper */
var ErrorWrapper = /** @class */ (function (_super) {
    __extends(ErrorWrapper, _super);
    function ErrorWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorWrapper.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, type = _a.type, children = _a.children;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, {
            'input-hidden': type === 'hidden'
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: classes, style: style }, children));
    };
    return ErrorWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (ErrorWrapper);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertToFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeFields; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);


var convertToFormData = function (formMap) {
    var formData = new FormData();
    if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Iterable"].isIterable(formMap)) {
        formMap.forEach(function (value, key) {
            if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Iterable"].isIterable(value) && value.size === 1 && value.first() instanceof File) {
                formData.append(key, value.first());
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(value)) {
                value.map(function (innerVal, index) {
                    if (innerVal !== null) {
                        formData.append(key + ("." + index), innerVal);
                    }
                });
            }
            else if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(value) || __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(value)) {
                value.map(function (innerVal, index) {
                    if (innerVal !== null) {
                        formData.append(key + ("[" + index + "]"), innerVal);
                    }
                });
            }
            else {
                if (value !== null) {
                    formData.append(key, value);
                }
            }
        });
        return formData;
    }
    throw new Error('convertToFormData requires a Immutable Iterable object');
};
var normalizeFields = function (fields) {
    return fields.map(function (input, inputName) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__inputHelpers__["a" /* isMultipleValueInput */])(inputName)) {
            return input.map(function (innerInput) {
                return innerInput.get('value');
            });
        }
        return input.get('value');
    });
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withReducerState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_path__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Helpers_inputHelpers__ = __webpack_require__(4);
/** Libraries */

/** Helpers */


var basicReducer = {
    SET_INPUT: function (state, _a) {
        var payload = _a.payload;
        var valuePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Helpers_path__["a" /* getInputValue */])(payload.nameSpace, payload.inputName);
        return state.setIn(valuePath, payload.value);
    },
    SET_VALIDATION: function (state, _a) {
        var payload = _a.payload;
        var validationPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Helpers_path__["b" /* getInputValidation */])(payload.nameSpace, payload.inputName);
        return state.updateIn(validationPath, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])(), function (validationMap) {
            return validationMap.set(payload.type, payload.test);
        });
    },
    SET_INPUT_INTERACTION: function (state, _a) {
        var payload = _a.payload;
        var interactionPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Helpers_path__["c" /* getInputState */])(payload.nameSpace, payload.inputName, payload.interaction);
        return state.setIn(interactionPath, payload.value);
    },
    SET_ALL_INPUT_INTERACTIONS: function (state, _a) {
        var payload = _a.payload;
        var inputs = state.get(payload.nameSpace, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}));
        if (inputs.size && inputs.size === 0) {
            return state;
        }
        var updatedFields = inputs.map(function (input, key) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Helpers_inputHelpers__["a" /* isMultipleValueInput */])(key)) {
                return input.map(function (innerInput) {
                    return innerInput.setIn(['input', payload.interaction], payload.value);
                });
            }
            return input.set(payload.interaction, payload.value);
        });
        return state.set(payload.nameSpace, updatedFields);
    },
    CLEAR_ALL_INPUTS: function (state, _a) {
        var payload = _a.payload;
        return state.set(payload.nameSpace, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}));
    }
};
var withReducerState = function (state, action) {
    if (state === void 0) { state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])(); }
    var reducerFunc = basicReducer[action.type];
    if (typeof reducerFunc === 'function') {
        return reducerFunc(state, action);
    }
    else {
        return state;
    }
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputGroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__InputWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Assets_yen_svg__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Assets_yen_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Assets_yen_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Assets_euro_svg__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Assets_euro_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Assets_euro_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assets_dollar_svg__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Assets_dollar_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Assets_dollar_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Assets_percentage_svg__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Assets_percentage_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Assets_percentage_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Assets_search_svg__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Assets_search_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Assets_search_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Input_scss__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Input_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */





/** Icons & Images */





/** Styles */

/** Class Input */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getInputGroupProps = function () {
            var _a = _this.props, prepend = _a.prepend, append = _a.append, format = _a.format;
            var inputGroupProps = {
                append: append,
                prepend: prepend
            };
            var getInputAddon = function (icon, shaded) {
                if (shaded === void 0) { shaded = false; }
                return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: shaded ? '#EDEDED' : 'transparent'
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: icon })));
            };
            if (format) {
                switch (format) {
                    case 'percentage': {
                        inputGroupProps['append'] = getInputAddon(__WEBPACK_IMPORTED_MODULE_10__Assets_percentage_svg___default.a, true);
                        break;
                    }
                    case 'yen': {
                        inputGroupProps['prepend'] = getInputAddon(__WEBPACK_IMPORTED_MODULE_7__Assets_yen_svg___default.a, true);
                        break;
                    }
                    case 'euro': {
                        inputGroupProps['prepend'] = getInputAddon(__WEBPACK_IMPORTED_MODULE_8__Assets_euro_svg___default.a, true);
                        break;
                    }
                    case 'dollar': {
                        inputGroupProps['prepend'] = getInputAddon(__WEBPACK_IMPORTED_MODULE_9__Assets_dollar_svg___default.a, true);
                        break;
                    }
                    case 'search': {
                        inputGroupProps['append'] = getInputAddon(__WEBPACK_IMPORTED_MODULE_11__Assets_search_svg___default.a);
                        break;
                    }
                    default:
                        break;
                }
            }
            return inputGroupProps;
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelPostfix = _a.labelPostfix, labelPrefix = _a.labelPrefix, explanation = _a.explanation, prepend = _a.prepend, append = _a.append, format = _a.format, radius = _a.radius, props = __rest(_a, ["className", "label", "labelPostfix", "labelPrefix", "explanation", "prepend", "append", "format", "radius"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, value = props.value, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "value"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'input');
        if (props.type !== 'hidden') {
            var inputWrapperProps = {
                labelPrefix: labelPrefix,
                labelPostfix: labelPostfix,
                explanation: explanation,
                label: label,
                name: props.name,
                type: props.type,
                className: classes
            };
            return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__InputWrapper__["a" /* default */], __assign({}, inputWrapperProps),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InputGroup__["a" /* default */], __assign({}, this.getInputGroupProps(), { style: { borderRadius: radius ? radius + "px" : 0 } }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Base__["a" /* default */], __assign({}, props, { style: { borderRadius: radius ? radius + "px" : 0 } }))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Base__["a" /* default */], __assign({}, props));
    };
    return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__["a" /* default */])(Input));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch_Switch__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */

/**
 * Class Radio
 * Creates a radio button connected to forms
 * state management. All HTML5 attributes apply.
 */
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, className = _a.className, other = __rest(_a, ["className"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'radio');
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Switch_Switch__["a" /* default */], __assign({ className: classes }, other, { type: "radio" }));
    };
    return Radio;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (Radio);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cs_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cs_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cs_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_validate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Validation_scss__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Validation_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Validation_scss__);
/** Libraries */





/** Helpers */


var specificShallowEqual = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_cs_core__["createSpecificShallowEqual"])('value', 'changed', 'type');
var specificShallowEqualDisplayed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_cs_core__["createSpecificShallowEqual"])('displayed', 'className');
var specificShallowEqualTestElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_cs_core__["createSpecificShallowEqual"])('value', 'typeOfValidation', 'type');
var availableValidationsShallowEqual = __WEBPACK_IMPORTED_MODULE_4_cs_core__["createSpecificShallowEqual"].apply(void 0, ['isFor',
    'test'].concat(Object.keys(__WEBPACK_IMPORTED_MODULE_5__libs_validate__["c" /* validations */])));
var Validation = function (_a) {
    var displayed = _a.displayed, className = _a.className, children = _a.children;
    var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('validation', className, {
        invalid: displayed
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: classes }, children);
};
var getValue = function (name, inputInfo) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["a" /* isMultipleValueInput */])(name) && __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(inputInfo)) {
        return __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["b" /* returnCheckedValue */].apply(void 0, [function (arg) { return typeof arg !== 'undefined' && arg !== false; }].concat(inputInfo.map(function (item) { return item.get('value', false); }).toArray()));
    }
    else {
        return inputInfo.get('value') || false;
    }
};
/** Styles */

/** Class Validation */
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withProps"])(function (ownerProps) {
    var name = ownerProps.name, inputInfo = ownerProps.inputInfo, type = ownerProps.type;
    var changed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["a" /* isMultipleValueInput */])(name)
        ? inputInfo.some(function (item) { return item.get('changed', false); })
        : inputInfo.get('changed', false);
    var value = getValue(name, inputInfo);
    return {
        changed: changed,
        value: value
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function (currentProps, nextProps) {
    return (!specificShallowEqual(currentProps, nextProps) ||
        !availableValidationsShallowEqual(currentProps, nextProps));
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withState"])('valid', 'setValid', false), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withHandlers"])({
    testElement: function () { return __WEBPACK_IMPORTED_MODULE_5__libs_validate__["d" /* testElement */]; }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["lifecycle"])({
    componentWillMount: function () {
        var _a = this.props, testElement = _a.testElement, setValidation = _a.setValidation, value = _a.value, type = _a.type, isFor = _a.isFor, test = _a.test;
        setValidation(isFor, test);
        // value, test, isFor, type, setValid
        testElement(this.props);
    },
    componentWillReceiveProps: function (nextProps) {
        if (!specificShallowEqualTestElement(this.props, nextProps)) {
            nextProps.testElement(nextProps);
        }
        if (!availableValidationsShallowEqual(this.props, nextProps)) {
            nextProps.setValidation(nextProps.isFor, nextProps.test);
        }
    }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["mapProps"])(function (ownerProps) {
    var valid = ownerProps.valid, value = ownerProps.value, className = ownerProps.className, changed = ownerProps.changed, children = ownerProps.children, test = ownerProps.test;
    return {
        displayed: !valid && changed,
        className: className,
        children: children
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["shouldUpdate"])(function (currentProps, nextProps) {
    return !specificShallowEqualDisplayed(currentProps, nextProps);
}))(Validation));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_onclickoutside__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_onclickoutside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_onclickoutside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Input_InputWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Input_InputGroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Assets_date_icon_inactive_svg__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Assets_date_icon_inactive_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Assets_date_icon_inactive_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Assets_date_icon_active_svg__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Assets_date_icon_active_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Assets_date_icon_active_svg__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */



/** Components */


/** Icons & Images */


/** Class DateWrapper */
var DateWrapper = /** @class */ (function (_super) {
    __extends(DateWrapper, _super);
    function DateWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function (event) {
            event.preventDefault();
            _this.setState({ hidden: false });
        };
        _this.handleClickOutside = function () {
            _this.setState({ hidden: true });
        };
        _this.closeInput = function () {
            _this.setState({ hidden: true });
            _this.refs[_this.props.name].blur();
        };
        _this.state = {
            hidden: true
        };
        return _this;
    }
    DateWrapper.prototype.render = function () {
        var hidden = this.state.hidden;
        var dateRangeClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ hidden: hidden }, 'date-range-container');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "date-range-wrapper" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Input_InputWrapper__["a" /* default */], { className: "input date-picker", name: this.props.name, labelPostfix: this.props.labelPostfix, label: this.props.label },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Input_InputGroup__["a" /* default */], { prepend: this.props.prepend, append: this.props.append },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('date-input-container', { active: !hidden }) },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { onFocus: this.handleFocus, placeholder: this.props.placeholder, value: this.props.valueString, ref: this.props.name, readOnly: true }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: hidden ? __WEBPACK_IMPORTED_MODULE_5__Assets_date_icon_inactive_svg___default.a : __WEBPACK_IMPORTED_MODULE_6__Assets_date_icon_active_svg___default.a })))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: dateRangeClasses }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, {
                close: this.closeInput
            }))));
    };
    return DateWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_react_onclickoutside___default()(DateWrapper));



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
var theme = {
    DateRange: { background: '#ffffff' },
    Calendar: { background: '#FFFFFF', color: '#626163' },
    MonthAndYear: {
        background: '#00AFEF',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '1.6px'
    },
    MonthButton: { background: 'transparent' },
    MonthArrowPrev: { borderRightColor: '#FFFFFF' },
    MonthArrowNext: { borderLeftColor: '#FFFFFF' },
    Weekday: { color: '#DFDEE3' },
    Day: { transition: 'transform .1s ease, box-shadow .1s ease, background .1s ease' },
    DaySelected: { background: '#00AFEF', color: '#FFFFFF' },
    DayActive: { background: '#00AFEF', color: '#FFFFFF' },
    DayInRange: { background: 'rgba(0, 175, 239, 0.2)', color: '#626163' },
    DayHover: { background: 'rgba(0, 175, 239, 0.2)', color: '#626163' }
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Base__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Validation_DisplayValidation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_ErrorWrapper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch_scss__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Switch_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */




/** Styles */

/** Class Switch */
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, style = _a.style, props = __rest(_a, ["className", "label", "style"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, defaultChecked = props.defaultChecked, defaultSelected = props.defaultSelected, defaultValue = props.defaultValue, value = props.value, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "defaultChecked", "defaultSelected", "defaultValue", "value"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('switch', className);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Form_ErrorWrapper__["a" /* default */], { className: classes, type: props.type, style: style },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Base__["a" /* default */], __assign({}, props, { id: id || this.props.name })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: id || this.props.name },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "box" }),
                label),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
    };
    return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(Switch));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(0),__webpack_require__(62),__webpack_require__(2),__webpack_require__(13));else if("function"==typeof define&&define.amd)define(["react","react-dom/server","immutable","moment"],t);else{var r="object"==typeof exports?t(require("react"),require("react-dom/server"),require("immutable"),require("moment")):t(e.React,e[void 0],e.Immutable,e.Moment);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){function n(e){return null==e?void 0===e?a:c:f&&f in Object(e)?i(e):u(e)}var o=r(1),i=r(9),u=r(10),c="[object Null]",a="[object Undefined]",f=o?o.toStringTag:void 0;e.exports=n},function(e,t,r){var n=r(6),o=n.Symbol;e.exports=o},function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);r.d(t,"createSpecificShallowEqual",function(){return n.a})},function(e,t,r){"use strict";var n=r(5),o=r.n(n),i=r(11),u=r.n(i),c=r(2),a=r.n(c),f=r(14),s=r.n(f),l=r(15),p=(r.n(l),r(16)),b=r.n(p),v=r(17),d=(r.n(v),r(18)),j=(r.n(d),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t,r){return e.every(function(e){var n=t[e],i=r[e];if(v.Iterable.isIterable(n)||v.Iterable.isIterable(i))return Object(v.is)(n,i);if(void 0!==i&&null!==i&&Object(l.isValidElement)(i)){return b.a.renderToStaticMarkup(n)===b.a.renderToStaticMarkup(i)}if(o()(i))return n+""==i+"";if(Object(d.isMoment)(i))return i.isSame(n);if((s()(i)||a()(i)||u()(i))&&!(i instanceof File))throw new Error("Specific shallow equal does not support plain old JS objects, Arrays and NaN: prop "+e+" is a "+typeof i);return n===i})}});t.a=j},function(e,t,r){function n(e){if(!i(e))return!1;var t=o(e);return t==c||t==a||t==u||t==f}var o=r(0),i=r(2),u="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",f="[object Proxy]";e.exports=n},function(e,t,r){var n=r(7),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(8))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){function n(e){var t=u.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[a]=r:delete e[a]),o}var o=r(1),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,a=o?o.toStringTag:void 0;e.exports=n},function(e,t){function r(e){return o.call(e)}var n=Object.prototype,o=n.toString;e.exports=r},function(e,t,r){function n(e){return o(e)&&e!=+e}var o=r(12);e.exports=n},function(e,t,r){function n(e){return"number"==typeof e||i(e)&&o(e)==u}var o=r(0),i=r(13),u="[object Number]";e.exports=n},function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r},function(e,t){var r=Array.isArray;e.exports=r},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n}])});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-date-range");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Switch_Switch__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */

/**
 * Class CheckBox
 * Creates a Checkbox connected to forms state management.
 * All HTML5 attributes apply.
 */
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.render = function () {
        var _a = this.props, className = _a.className, other = __rest(_a, ["className"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'checkbox');
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Switch_Switch__["a" /* default */], __assign({ className: classes }, other, { type: "checkbox" }));
    };
    return CheckBox;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (CheckBox);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePicker */
/* unused harmony export CalendarBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_date_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateWrapper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateRange_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateRange_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DateRange_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */



/** Styles */

/** Class CalendarBase */
var CalendarBase = /** @class */ (function (_super) {
    __extends(CalendarBase, _super);
    function CalendarBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (dateRange) {
            var _a = _this.props, inputChanged = _a.inputChanged, close = _a.close;
            inputChanged(dateRange.format(_this.props.serverFormat));
            if (typeof close === 'function') {
                close();
            }
            if (typeof _this.props.onChange === 'function') {
                _this.props.onChange(dateRange);
            }
        };
        return _this;
    }
    CalendarBase.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_date_range__["Calendar"], __assign({}, this.props, { onChange: this.handleChange, theme: __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* theme */] }));
    };
    return CalendarBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/** Class DatePicker */
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getValue = function () {
            var _a = _this.props, value = _a.value, defaultValue = _a.defaultValue, dateFormat = _a.dateFormat;
            var parsedValue = __WEBPACK_IMPORTED_MODULE_1_moment___default()(value || defaultValue);
            if (parsedValue.isValid()) {
                return parsedValue.format(dateFormat);
            }
            else {
                return value || defaultValue || '';
            }
        };
        return _this;
    }
    DatePicker.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DateWrapper__["a" /* default */], __assign({}, props, { valueString: this.getValue() }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CalendarBase, __assign({}, this.props))));
    };
    return DatePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["defaultProps"])({
    defaultValue: __WEBPACK_IMPORTED_MODULE_1_moment___default()().format(),
    dateFormat: 'DD-MM-YYYY',
    serverFormat: null
}), __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(DatePicker));



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateRangeBase */
/* unused harmony export DateRangePicker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_date_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_date_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateWrapper__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateRange_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateRange_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DateRange_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */



/** Helpers */
var getValue = function (dateRange, dateFormat) {
    if (dateFormat === void 0) { dateFormat = 'DD-MM-YYYY'; }
    if (__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"].isMap(dateRange) && dateRange) {
        return (__WEBPACK_IMPORTED_MODULE_1_moment___default()(dateRange.get('startDate'), 'DD-MM-YYYY').format(dateFormat) +
            ' to ' +
            __WEBPACK_IMPORTED_MODULE_1_moment___default()(dateRange.get('endDate'), 'DD-MM-YYYY').format(dateFormat));
    }
    return __WEBPACK_IMPORTED_MODULE_1_moment___default()().format(dateFormat) + ' to ' + __WEBPACK_IMPORTED_MODULE_1_moment___default()().format(dateFormat);
};
/** Styles */

/** Class DateRangeBase */
var DateRangeBase = /** @class */ (function (_super) {
    __extends(DateRangeBase, _super);
    function DateRangeBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (dateRange) {
            _this.props.inputChanged(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])({
                startDate: dateRange.startDate.format('DD-MM-YYYY'),
                endDate: dateRange.endDate.format('DD-MM-YYYY')
            }));
            if (typeof _this.props.onChange === 'function') {
                _this.props.onChange(dateRange);
            }
        };
        return _this;
    }
    DateRangeBase.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_date_range__["DateRange"], __assign({}, this.props, { calendars: 1, onChange: this.handleChange, theme: __WEBPACK_IMPORTED_MODULE_6__theme__["a" /* theme */] }));
    };
    return DateRangeBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/** Class DateRangePicker */
var DateRangePicker = /** @class */ (function (_super) {
    __extends(DateRangePicker, _super);
    function DateRangePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateRangePicker.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DateWrapper__["a" /* default */], __assign({}, props, { valueString: getValue(props.value, props.dateFormat) }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DateRangeBase, __assign({}, props))));
    };
    return DateRangePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(DateRangePicker));



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropZone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Assets_doc_svg__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Assets_doc_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Assets_doc_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DropZone_scss__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DropZone_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__DropZone_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */





/** * Components */


/** Icons & Images */

/** Styles */

/** Helpers */
var isFileArray = function (files) {
    return __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(files) && files.size > 1;
};
var isSingleFile = function (files) {
    return __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(files) && files.size === 1;
};
var PassDownProps = function (props, children) {
    if (children.type === 'span' || children.type === 'div') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children);
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, __assign({}, props));
    }
};
/** Class DropZone */
var DropZone = /** @class */ (function (_super) {
    __extends(DropZone, _super);
    function DropZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getFiles = function () {
            var value = _this.props.value;
            if (isFileArray(value)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])(value);
            }
            else if (isSingleFile(value)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])([value.first()]);
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])();
        };
        _this.onDrop = function (files) {
            var _a = _this.props, _b = _a.multiple, multiple = _b === void 0 ? false : _b, inputChanged = _a.inputChanged, onDrop = _a.onDrop;
            if (multiple) {
                var allFiles = _this.getFiles().concat(files);
                inputChanged(allFiles);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(onDrop)) {
                    onDrop(allFiles);
                }
            }
            else {
                inputChanged(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"])([files]));
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(onDrop)) {
                    onDrop(files);
                }
            }
        };
        _this.deleteFile = function (index) {
            var _a = _this.props, _b = _a.multiple, multiple = _b === void 0 ? false : _b, inputChanged = _a.inputChanged;
            var stateFiles = _this.getFiles();
            inputChanged(stateFiles.delete(index));
        };
        _this.getInnerContent = function () {
            var _a = _this.props, children = _a.children, placeholder = _a.placeholder;
            if (children && _this.getFiles().size > 0) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(children)) {
                    return children(_this.getFiles(), _this.deleteFile);
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, PassDownProps({ files: _this.getFiles() }, children));
            }
            return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "placeholder-container" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_7__Assets_doc_svg___default.a }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, placeholder),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", { type: "button", className: "button button-primary" }, "Upload")));
        };
        return _this;
    }
    DropZone.prototype.componentDidMount = function () {
        var files = this.getFiles();
        if (files.size > 0) {
            this.props.inputChanged(this.getFiles(), false);
        }
    };
    DropZone.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, placeholder = _a.placeholder, _b = _a.multiple, multiple = _b === void 0 ? false : _b, _c = _a.showList, showList = _c === void 0 ? true : _c, fileListComponent = _a.fileListComponent, width = _a.width, height = _a.height;
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        var files = this.getFiles();
        var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('drop-zone-box', className);
        var style = {
            width: width,
            height: height
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "drop-zone" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_dropzone___default.a, __assign({ className: classes, onDrop: this.onDrop, multiple: multiple }, attributes, { style: style }), this.getInnerContent())),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(fileListComponent) && fileListComponent(this.getFiles(), this.deleteFile)));
    };
    DropZone.defaultProps = {
        placeholder: 'Drag and drop files here',
        width: '100%',
        height: '256px'
    };
    return DropZone;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(DropZone));



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */



/** Class Fieldset */
var Fieldset = /** @class */ (function (_super) {
    __extends(Fieldset, _super);
    function Fieldset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fieldset.prototype.render = function () {
        var _a = this.props, children = _a.children, props = __rest(_a, ["children"]);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("fieldset", __assign({}, props), children);
    };
    return Fieldset;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["withContext"])({
    fieldSetNameSpace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
}, function (_a) {
    var name = _a.name, id = _a.id;
    return ({
        fieldSetNameSpace: id ? name + "/" + id : name
    });
})(Fieldset));


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Actions_fields__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Reducers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__ = __webpack_require__(15);
/* unused harmony reexport clearAllInputs */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */






/** Helpers */



var mapOutput = function (data, mapOutputFunc) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["isFunction"])(mapOutputFunc)) {
        var mappedData = mapOutputFunc(data);
        if (!__WEBPACK_IMPORTED_MODULE_2_immutable__["Iterable"].isIterable(mappedData)) {
            throw new Error('mapOutput must return an Immutable Iterable');
        }
        return mappedData;
    }
    else {
        return data;
    }
};
var randomString = function (length) {
    return Math.random()
        .toString(36)
        .substring(length);
};
/** Displays a form component, inserts all user input into redux state and ensures that all inputs are validated
 * before allowing the user to submit the form. */
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.lastSumbittedString = null;
        _this.handleFormSubmit = function (event) {
            event.preventDefault();
            if (_this.state.canSubmitString !== _this.lastSumbittedString) {
                var _a = _this.props, dispatch = _a.dispatch, onSubmit_1 = _a.onSubmit, FormState_1 = _a.FormState, name_1 = _a.name, encType_1 = _a.encType;
                // INSERT COMMENT HERE
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["e" /* setAllInputInteractions */])(name_1, 'changed', true));
                // INSERT COMMENT HERE
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash__["defer"])(function () {
                    var form = _this.refs[name_1];
                    var firstError = form.querySelector('.invalid');
                    if (firstError === null) {
                        if (onSubmit_1) {
                            var fields = FormState_1.get(name_1);
                            var normalizedFields = mapOutput(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__["b" /* normalizeFields */])(fields), _this.props.mapOutput);
                            if (encType_1 === 'multipart/form-data') {
                                onSubmit_1(event, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Helpers_formHelpers__["a" /* convertToFormData */])(normalizedFields));
                            }
                            else {
                                onSubmit_1(event, normalizedFields);
                            }
                            // update state so users cannot submit again
                            _this.lastSumbittedString = _this.state.canSubmitString;
                        }
                    }
                    else {
                        var scrollTo_1 = firstError.getBoundingClientRect().top - 50;
                        if (typeof window === 'object' && scrollTo_1 < 0) {
                            window.scrollTo(0, document.body.scrollTop + scrollTo_1 - 5);
                        }
                    }
                });
            }
        };
        _this.state = {
            canSubmitString: randomString(10)
        };
        return _this;
    }
    Form.prototype.getChildContext = function () {
        return {
            FormState: this.props.FormState,
            nameSpace: this.props.name,
            dispatch: this.props.dispatch
        };
    };
    Form.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.name !== nextProps.name) {
            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["a" /* clearAllInputs */])(nextProps.name));
            // make the new form unsubmit-able
            this.setState({
                canSubmitString: randomString(10)
            });
        }
        else {
            this.setState({
                canSubmitString: randomString(10)
            });
        }
    };
    Form.prototype.componentWillUnmount = function () {
        this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Actions_fields__["a" /* clearAllInputs */])(this.props.name));
    };
    Form.prototype.render = function () {
        var _a = this.props, FormState = _a.FormState, dispatch = _a.dispatch, onSubmit = _a.onSubmit, className = _a.className, name = _a.name, encType = _a.encType, safeProps = __rest(_a, ["FormState", "dispatch", "onSubmit", "className", "name", "encType"]);
        var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('form', className);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", { name: name, ref: name, onSubmit: this.handleFormSubmit, className: classes, noValidate: true, encType: encType }, this.props.children));
    };
    Form.childContextTypes = {
        FormState: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
        nameSpace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
        dispatch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
    };
    //FIXME: any to make TS happy unsure why it needs to be this way
    Form.defaultProps = {
        encType: 'application/json',
        mapOutput: function (data) { return data; }
    };
    return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_recompose__["branch"])(function (props) {
    return !(props.FormState && props.dispatch);
}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_recompose__["withReducer"])('FormState', 'dispatch', __WEBPACK_IMPORTED_MODULE_7__Reducers__["b" /* withReducerState */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])()))(
//"any" is a short term fix till recompose types are updated
Form));



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input_Input__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Components */

var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    function Number() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Number.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Input_Input__["a" /* default */], __assign({}, this.props));
    };
    Number.defaultProps = {
        pattern: '[0-9]+.?[0-9]*',
        type: 'number'
    };
    return Number;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (Number);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Radio_Radio__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */

var RadioTab = /** @class */ (function (_super) {
    __extends(RadioTab, _super);
    function RadioTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setId = function (id) {
            var setId = _this.props.setId;
            if (!setId)
                throw new Error("setId is not pass down from RadioTabs. please check RadioTab - " + id + " is direct child of RadioTabs or create the wrapper to pass the props from RadioTabs");
            if (setId && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["isFunction"])(setId))
                setId(id);
        };
        _this.onClick = function () {
            var id = _this.props.id;
            _this.setId(id);
        };
        return _this;
    }
    RadioTab.prototype.componentWillMount = function () {
        if (this.props.defaultSelected) {
            this.setId(this.props.id);
        }
    };
    RadioTab.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.defaultSelected !== nextProps.defaultSelected) {
            this.setId(nextProps.id);
        }
    };
    RadioTab.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, chosenId = _a.chosenId, props = __rest(_a, ["className", "children", "chosenId"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'radio-tab', { active: chosenId === props.id });
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: classes, onClick: this.onClick },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Radio_Radio__["a" /* default */], __assign({}, props)),
            children));
    };
    return RadioTab;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
// This is a hack to ensure that proper types are passed down. Need a better way to type React.cloneElement
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_recompose__["compose"])(function (radioTab) { return radioTab; })(RadioTab));


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Input_InputWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__RadioTabs_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Libraries */


/** Components */

/** Styles */

/** Class RadioTabs */
var RadioTabs = /** @class */ (function (_super) {
    __extends(RadioTabs, _super);
    function RadioTabs() {
        var _this = _super.call(this) || this;
        _this.setId = function (chosenId) {
            _this.setState({
                chosenId: chosenId
            });
        };
        _this.state = {
            chosenId: ''
        };
        return _this;
    }
    RadioTabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, _b = _a.radioClasses, radioClasses = _b === void 0 ? undefined : _b, name = _a.name, label = _a.label, children = _a.children;
        var chosenId = this.state.chosenId;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'input', 'radio-tabs');
        // Deprecation warning, v1.0.x
        if (radioClasses != undefined) {
            throw new Error('radioClasses prop has been replaced with className');
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Input_InputWrapper__["a" /* default */], { className: classes, name: name, label: label }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
            {
                /*
  ATTN SHANE: Your hack doesn't work. Fix it!
  if(typeof child.type === 'string' || child.type.name !== 'RadioTab') {
    console.warn("RadioTabs can only accept RadioTab components as childen", "Element is " + child);
  }  */
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                name: name,
                chosenId: chosenId,
                setId: _this.setId
            });
        })));
    };
    return RadioTabs;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (RadioTabs);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MultiSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Input_InputWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_select_dist_react_select_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */




/** Components */


/** Styles */

/** Class MultiSelect */
var MultiSelect = /** @class */ (function (_super) {
    __extends(MultiSelect, _super);
    function MultiSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (values) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            var newValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([])
                .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])(values))
                .toList();
            inputChanged(newValues);
            if (typeof onChange === 'function') {
                onChange(newValues);
            }
        };
        return _this;
    }
    MultiSelect.prototype.componentWillMount = function () {
        var _a = this.props, inputChanged = _a.inputChanged, defaultValue = _a.defaultValue;
        inputChanged(defaultValue || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([]), false);
    };
    MultiSelect.prototype.render = function () {
        var _a = this.props, options = _a.options, value = _a.value, className = _a.className, label = _a.label, labelPrefix = _a.labelPrefix, labelPostfix = _a.labelPostfix, noResultsText = _a.noResultsText, placeholder = _a.placeholder, props = __rest(_a, ["options", "value", "className", "label", "labelPrefix", "labelPostfix", "noResultsText", "placeholder"]);
        var safeValue = value !== '' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])(value) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])();
        var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'input');
        if (!__WEBPACK_IMPORTED_MODULE_2_immutable__["Iterable"].isIterable(options)) {
            throw new Error('options must be an Immutable List()');
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Input_InputWrapper__["a" /* default */], { name: props.name, label: label, labelPrefix: labelPrefix, labelPostfix: labelPostfix, className: classes },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_select___default.a, { value: safeValue.toJS(), options: options.toJS(), multi: true, onChange: this.handleChange, noResultsText: noResultsText, placeholder: placeholder })));
    };
    MultiSelect.defaultProps = {
        options: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["List"])([])
    };
    return MultiSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__Form_Helpers_performanceWrapper__["a" /* default */])(MultiSelect));


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Input_InputWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Validation_DisplayValidation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Base__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Assets_arrow_svg__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Assets_arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Assets_arrow_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Select_scss__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Select_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Select_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */




/** Icons & Images */

/** Styles */

/** Class Select */
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelPostfix = _a.labelPostfix, labelPrefix = _a.labelPrefix, arrow = _a.arrow, props = __rest(_a, ["className", "label", "labelPostfix", "labelPrefix", "arrow"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, defaultChecked = props.defaultChecked, defaultSelected = props.defaultSelected, value = props.value, children = props.children, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "defaultChecked", "defaultSelected", "value", "children"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'select', 'input');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Input_InputWrapper__["a" /* default */], { className: classes, name: props.name, labelPrefix: labelPrefix, labelPostfix: labelPostfix, label: label },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "input-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "styled-select" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Base__["a" /* default */], __assign({}, props)),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "arrow" }, arrow ? arrow : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __WEBPACK_IMPORTED_MODULE_6__Assets_arrow_svg___default.a })))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
    };
    return Select;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Form_Helpers_performanceWrapper__["a" /* default */])(Select));



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Input_InputWrapper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Input_InputGroup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Base__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TextArea_scss__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TextArea_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__TextArea_scss__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/** Libraries */


/** Components */





/** Styles */

/** Class TextArea */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelPrefix = _a.labelPrefix, labelPostfix = _a.labelPostfix, explanation = _a.explanation, props = __rest(_a, ["className", "label", "labelPrefix", "labelPostfix", "explanation"]);
        var autoFocus = props.autoFocus, onChange = props.onChange, onBlur = props.onBlur, id = props.id, value = props.value, resize = props.resize, validationProps = __rest(props, ["autoFocus", "onChange", "onBlur", "id", "value", "resize"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'textarea', 'input');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Input_InputWrapper__["a" /* default */], { className: classes, name: props.name, labelPrefix: labelPrefix, labelPostfix: labelPostfix, label: label, explanation: explanation },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Input_InputGroup__["a" /* default */], null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Base__["a" /* default */], __assign({}, props))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Validation_DisplayValidation__["a" /* default */], __assign({}, validationProps))));
    };
    return TextArea;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Form_Helpers_performanceWrapper__["a" /* default */])(TextArea));


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DisplayValidation__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Components */


/**
 * Class Validate
 *
 * A component to allow validation anywhere inside of a form component
 * for input elements in that same component
 */
var Validate = /** @class */ (function (_super) {
    __extends(Validate, _super);
    function Validate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Validate.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__DisplayValidation__["a" /* default */], __assign({}, this.props));
    };
    return Validate;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Form_Helpers_performanceWrapper__["b" /* validationPerformanceWrapper */])(Validate));


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_CheckBox_CheckBox__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return __WEBPACK_IMPORTED_MODULE_0__src_CheckBox_CheckBox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_DatePicker_DatePicker__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return __WEBPACK_IMPORTED_MODULE_1__src_DatePicker_DatePicker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_DatePicker_DateRange__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return __WEBPACK_IMPORTED_MODULE_2__src_DatePicker_DateRange__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_DropZone_DropZone__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DropZone", function() { return __WEBPACK_IMPORTED_MODULE_3__src_DropZone_DropZone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Input_Input__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_4__src_Input_Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Number_Number__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return __WEBPACK_IMPORTED_MODULE_5__src_Number_Number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Radio_Radio__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_6__src_Radio_Radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Radio_RadioTabs__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTabs", function() { return __WEBPACK_IMPORTED_MODULE_7__src_Radio_RadioTabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Radio_RadioTab__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioTab", function() { return __WEBPACK_IMPORTED_MODULE_8__src_Radio_RadioTab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Select_Select__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_9__src_Select_Select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Select_MultiSelect__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return __WEBPACK_IMPORTED_MODULE_10__src_Select_MultiSelect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_TextArea_TextArea__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return __WEBPACK_IMPORTED_MODULE_11__src_TextArea_TextArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Validation_Validation__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return __WEBPACK_IMPORTED_MODULE_12__src_Validation_Validation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_Validation_Validate__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validate", function() { return __WEBPACK_IMPORTED_MODULE_13__src_Validation_Validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_Form_Form__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_14__src_Form_Form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_Form_Reducers_index__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxReducer", function() { return __WEBPACK_IMPORTED_MODULE_15__src_Form_Reducers_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_Form_Helpers_performanceWrapper__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "performanceWrapper", function() { return __WEBPACK_IMPORTED_MODULE_16__src_Form_Helpers_performanceWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_Form_Fieldset__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fieldset", function() { return __WEBPACK_IMPORTED_MODULE_17__src_Form_Fieldset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_Input_InputGroup__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_18__src_Input_InputGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_Input_InputWrapper__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return __WEBPACK_IMPORTED_MODULE_19__src_Input_InputWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_Form_ErrorWrapper__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorWrapper", function() { return __WEBPACK_IMPORTED_MODULE_20__src_Form_ErrorWrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_Validation_DisplayValidation__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayValidation", function() { return __WEBPACK_IMPORTED_MODULE_21__src_Validation_DisplayValidation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_Form_Helpers_formHelpers__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "convertToFormData", function() { return __WEBPACK_IMPORTED_MODULE_22__src_Form_Helpers_formHelpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__libs_validate__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "validationsAvailable", function() { return __WEBPACK_IMPORTED_MODULE_23__libs_validate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_Form_Actions_fields__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllInputs", function() { return __WEBPACK_IMPORTED_MODULE_24__src_Form_Actions_fields__["a"]; });



























/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validations = {
    email: '([\\w-\\.]+)@((?:[\\w]+\\.)+)([a-zA-Z]{2,24})$',
    number: '^[0-9]+.?[0-9]*$'
};
/* harmony default export */ __webpack_exports__["a"] = (validations);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInputValue;
/* harmony export (immutable) */ __webpack_exports__["b"] = getInputValidation;
/* harmony export (immutable) */ __webpack_exports__["c"] = getInputState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

function getInputValue(nameSpace, inputName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([nameSpace].concat(inputName, ['value']));
}
function getInputValidation(nameSpace, inputName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([nameSpace].concat(inputName));
}
function getInputState(nameSpace, inputName, state) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([nameSpace].concat(inputName, [state]));
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */


/** Helpers */

/** Class InputBase */
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var value = _this.props.type === 'file' ? event.target.files : event.target.value;
            _this.props.inputChanged(value);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"])(_this.props.onChange)) {
                _this.props.onChange(event);
            }
        };
        _this.handleBlured = function (event) {
            _this.props.setInputBlurred();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"])(_this.props.onBlur)) {
                _this.props.onBlur(event);
            }
        };
        return _this;
    }
    InputBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({ onBlur: this.handleBlured, onChange: this.handleChange }, attributes));
    };
    return InputBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (InputBase);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SelectBase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */


/** Components */

/** Helpers */
var getDefaultSelected = function (_a) {
    var children = _a.children, defaultValue = _a.defaultValue;
    if (__WEBPACK_IMPORTED_MODULE_0_react__["Children"].count(children) < 1) {
        return '';
    }
    else if (defaultValue) {
        return defaultValue;
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].toArray(children)[0].props.value;
    }
};
/** Class SelectBase */
var SelectBase = /** @class */ (function (_super) {
    __extends(SelectBase, _super);
    function SelectBase() {
        /*displayName: 'SelectBase'*/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            inputChanged(event.target.value);
            if (typeof onChange === 'function') {
                onChange(event);
            }
        };
        _this.handleBlur = function (event) {
            var onBlur = _this.props.onBlur;
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        };
        return _this;
    }
    SelectBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        var children = this.props.children;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", __assign({}, attributes, { onBlur: this.handleBlur, onChange: this.handleChange }), children));
    };
    return SelectBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])(function (props) {
    return {
        defaultSelected: getDefaultSelected(props)
    };
})(SelectBase));



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Helpers */

var isChecked = function (props) {
    if (props.type === 'radio') {
        return props.id + '' === props.value + '';
    }
    else {
        return !!props.value;
    }
};
/** {Internal} Method used internally to display a switch component(radio or checkbox)  */
var SwitchBase = /** @class */ (function (_super) {
    __extends(SwitchBase, _super);
    function SwitchBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getChecked = function (event) {
            if (_this.props.type === 'radio') {
                return _this.props.id;
            }
            else {
                return event.target.checked;
            }
        };
        _this.handleChange = function (event) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            inputChanged(_this.getChecked(event));
            if (typeof onChange === 'function') {
                onChange(event);
            }
        };
        _this.handleBlur = function (event) {
            var _a = _this.props, onBlur = _a.onBlur, setInputBlurred = _a.setInputBlurred;
            setInputBlurred();
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        };
        return _this;
    }
    SwitchBase.prototype.render = function () {
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({ onBlur: this.handleBlur, onChange: this.handleChange, checked: isChecked(this.props), ref: this.props.name, value: attributes.id }, attributes, { id: this.props.id })));
    };
    return SwitchBase;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (SwitchBase);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Libraries */

/** Helpers */

/** Class TextAreaBase */
var TextAreaBase = /** @class */ (function (_super) {
    __extends(TextAreaBase, _super);
    function TextAreaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var _a = _this.props, inputChanged = _a.inputChanged, onChange = _a.onChange;
            inputChanged(event.target.value);
            if (typeof onChange === 'function') {
                onChange(event);
            }
        };
        _this.handleBlur = function (event) {
            var _a = _this.props, setInputBlurred = _a.setInputBlurred, onBlur = _a.onBlur;
            setInputBlurred();
            if (typeof onBlur === 'function') {
                onBlur(event);
            }
        };
        return _this;
    }
    TextAreaBase.prototype.render = function () {
        var resize = this.props.resize;
        var attributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Form_Helpers_inputHelpers__["c" /* getHTMLAttributes */])(this.props);
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", __assign({ onBlur: this.handleBlur, onChange: this.handleChange }, attributes, { style: { resize: resize } })));
    };
    TextAreaBase.defaultProps = {
        resize: 'none'
    };
    return TextAreaBase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (TextAreaBase);


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNvbi1jYWxlbmRhci1mb2N1czwvdGl0bGU+PHBhdGggZD0iTTE0LjMyOCAxNi4zNjloLTIuMjE2di0yLjM3MmgyLjc4djEuODA4YS41NjQuNTY0IDAgMCAxLS41NjQuNTY0em0tMTMuMi0uNTY0di0xLjgwOGgyLjgxOHYyLjM3MkgxLjY5MWEuNTY0LjU2NCAwIDAgMS0uNTYzLS41NjR6bS41NjMtMTMuMThoMS42NzJWMy44MWEuNTY0LjU2NCAwIDAgMCAxLjEyOCAwVjIuNjI0aDYuOTk4VjMuODFhLjU2NC41NjQgMCAwIDAgMS4xMjggMFYyLjYyNGgxLjcxYy4zMTIgMCAuNTY1LjI1My41NjUuNTY0djIuNjI1SDEuMTI4VjMuMTg4YzAtLjMxLjI1Mi0uNTY0LjU2My0uNTY0em0xMC40MiAxMC40NTloMi43OHYtMi43NDJoLTIuNzh2Mi43NDJ6bS0zLjY1NC4wMTl2LTIuNzZoMi43NHYyLjc0aC0yLjc0di4wMnptMCAzLjI2NmgyLjc0di0yLjM3MmgtMi43NHYyLjM3MnptLTMuNTk3IDBoMi43MDJ2LTIuMzcySDQuODZ2Mi4zNzJ6bTAtMy4yODVoMi43MDJ2LTIuNzQySDQuODZ2Mi43NDJ6bS0zLjczMiAwaDIuODE4di0yLjc0MkgxLjEyOHYyLjc0MnptMC0zLjYzNmgyLjgxOFY2LjkyMUgxLjEyOHYyLjUyN3ptMTAuOTg0IDBoMi43OFY2LjkyMWgtMi43OHYyLjUyN3ptLTMuNjU1IDBoMi43NlY2LjkyMWgtMi43NnYyLjUyN3ptLTMuNTk3IDBoMi43MDJWNi45MjFINC44NnYyLjUyN3ptOS40NjgtNy45NTFoLTEuNzExVi41NjRhLjU2NC41NjQgMCAwIDAtMS4xMjggMHYuOTMzSDQuNDkxVi41NjRhLjU2NC41NjQgMCAwIDAtMS4xMjggMHYuOTMzSDEuNjkxQy43NTggMS40OTcgMCAyLjI1NSAwIDMuMTg4djEyLjYxN2MwIC45MzMuNzU4IDEuNjkyIDEuNjkxIDEuNjkyaDEyLjYxN2MuOTMzIDAgMS42OTItLjc1OSAxLjY5Mi0xLjY5MlYzLjE4OGExLjY2NCAxLjY2NCAwIDAgMC0xLjY3Mi0xLjY5MXoiIGZpbGw9IiMwMDlERTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNvbi1jYWxlbmRhcjwvdGl0bGU+PHBhdGggZD0iTTE0LjMyOCAxNi4zNjloLTIuMjE2di0yLjM3MmgyLjc4djEuODA4YS41NjQuNTY0IDAgMCAxLS41NjQuNTY0em0tMTMuMi0uNTY0di0xLjgwOGgyLjgxOHYyLjM3MkgxLjY5MWEuNTY0LjU2NCAwIDAgMS0uNTYzLS41NjR6bS41NjMtMTMuMThoMS42NzJWMy44MWEuNTY0LjU2NCAwIDAgMCAxLjEyOCAwVjIuNjI0aDYuOTk4VjMuODFhLjU2NC41NjQgMCAwIDAgMS4xMjggMFYyLjYyNGgxLjcxYy4zMTIgMCAuNTY1LjI1My41NjUuNTY0djIuNjI1SDEuMTI4VjMuMTg4YzAtLjMxLjI1Mi0uNTY0LjU2My0uNTY0em0xMC40MiAxMC40NTloMi43OHYtMi43NDJoLTIuNzh2Mi43NDJ6bS0zLjY1NC4wMTl2LTIuNzZoMi43NHYyLjc0aC0yLjc0di4wMnptMCAzLjI2NmgyLjc0di0yLjM3MmgtMi43NHYyLjM3MnptLTMuNTk3IDBoMi43MDJ2LTIuMzcySDQuODZ2Mi4zNzJ6bTAtMy4yODVoMi43MDJ2LTIuNzQySDQuODZ2Mi43NDJ6bS0zLjczMiAwaDIuODE4di0yLjc0MkgxLjEyOHYyLjc0MnptMC0zLjYzNmgyLjgxOFY2LjkyMUgxLjEyOHYyLjUyN3ptMTAuOTg0IDBoMi43OFY2LjkyMWgtMi43OHYyLjUyN3ptLTMuNjU1IDBoMi43NlY2LjkyMWgtMi43NnYyLjUyN3ptLTMuNTk3IDBoMi43MDJWNi45MjFINC44NnYyLjUyN3ptOS40NjgtNy45NTFoLTEuNzExVi41NjRhLjU2NC41NjQgMCAwIDAtMS4xMjggMHYuOTMzSDQuNDkxVi41NjRhLjU2NC41NjQgMCAwIDAtMS4xMjggMHYuOTMzSDEuNjkxQy43NTggMS40OTcgMCAyLjI1NSAwIDMuMTg4djEyLjYxN2MwIC45MzMuNzU4IDEuNjkyIDEuNjkxIDEuNjkyaDEyLjYxN2MuOTMzIDAgMS42OTItLjc1OSAxLjY5Mi0xLjY5MlYzLjE4OGExLjY2NCAxLjY2NCAwIDAgMC0xLjY3Mi0xLjY5MXoiIGZpbGw9IiNBREFEQjAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2NCA2OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UGFnZSAxPC90aXRsZT48ZyBmaWxsPSIjREZERUUzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCA2NEgxNlY1MmgyMmEyIDIgMCAwIDAgMi0yVjIwaDIwdjQ0ek00IDQ4VjRoMjB2MTBhMiAyIDAgMCAwIDIgMmgxMHYzMkg0ek0yOCA2LjgyOUwzMy4xNzEgMTJIMjhWNi44Mjl6TTY0IDY2VjE4YTIgMiAwIDAgMC0yLTJINDB2LTJhMiAyIDAgMCAwLS41ODYtMS40MTRsLTEyLTEyQTIgMiAwIDAgMCAyNiAwSDJhMiAyIDAgMCAwLTIgMnY0OGEyIDIgMCAwIDAgMiAyaDEwdjE0YTIgMiAwIDAgMCAyIDJoNDhhMiAyIDAgMCAwIDItMnoiLz48cGF0aCBkPSJNMjIgNTZhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00bTggMGEyIDIgMCAxIDEgMCA0IDIgMiAwIDAgMSAwLTRtOCAwYTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNG04IDBhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00bTggMGEyIDIgMCAxIDEgMCA0IDIgMiAwIDAgMSAwLTRtMC04YTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNG0wLThhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00bTAtOGEyIDIgMCAxIDEgMCA0IDIgMiAwIDAgMSAwLTRtMC04YTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNG0tOCAwYTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNCIvPjwvZz48L3N2Zz4="

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+ZG9sbGFyPC90aXRsZT48cGF0aCBkPSJNMi40ODIgMTAuMTM5Yy0uMDEyLjY2OC4xNjQgMS4xOTcuNTI4IDEuNTg0cy44MTUuNjMzIDEuMzU1LjczOVY4Ljc4M2EzLjc5NCAzLjc5NCAwIDAgMC0uNTYzLS4xNTggMTQuMjM1IDE0LjIzNSAwIDAgMS0xLjI4NS0uNDE0Yy0uNDIyLS4xNTgtLjgtLjM3LTEuMTM1LS42MzNhMi45MjMgMi45MjMgMCAwIDEtLjgwMS0uOTg2Yy0uMi0uMzkzLS4zLS44ODMtLjMtMS40NyAwLS41OTguMTE1LTEuMTI2LjM0NC0xLjU4NGEzLjUyIDMuNTIgMCAwIDEgLjkwNi0xLjE1M2MuMzc2LS4zMS44MS0uNTUxIDEuMzAzLS43MjJhNS44NjcgNS44NjcgMCAwIDEgMS41MzEtLjMwOFYwaDEuMDM5djEuMzU1QTYuMzI4IDYuMzI4IDAgMCAxIDYuODkgMS43Yy40NjQuMTcuODcxLjQwNCAxLjIyMy43MDQuMzUyLjI5OS42NC42NzEuODYzIDEuMTE3LjIyMy40NDYuMzUyLjk3NC4zODcgMS41ODVoLTIuNWMtLjAxMS0uNDctLjE1OC0uODY5LS40NC0xLjE5Ny0uMjgxLS4zMjktLjYyMS0uNDkzLTEuMDItLjQ5M1Y2LjUzbC40MzEuMTA2Yy4xNDcuMDM1LjMwMi4wNzYuNDY2LjEyMy44NjkuMjM1IDEuNTM4LjUyNSAyLjAwNy44NzEuNDcuMzQ3LjgxNi43MDcgMS4wMzkgMS4wODMuMjIyLjM3NS4zNTUuNzUuMzk2IDEuMTI2LjA0LjM3Ni4wNjEuNzEuMDYxIDEuMDA0IDAgLjI1OC0uMDY0LjU4My0uMTkzLjk3Ny0uMTMuMzkzLS4zNjEuNzc3LS42OTYgMS4xNTItLjMzNC4zNzYtLjc4My43MS0xLjM0NiAxLjAwNC0uNTY0LjI5My0xLjI4NS40Ny0yLjE2NS41MjhWMTZINC4zNjV2LTEuNDk2Yy0xLjMxNC0uMDk0LTIuMzQtLjQ5OS0zLjA4LTEuMjE1Qy41NDUgMTIuNTc0LjExNyAxMS41MjMgMCAxMC4xNGgyLjQ4MnptMi45MjIgMi4zMjNjLjIxMS0uMDIzLjQzMS0uMDczLjY2LS4xNWEyLjA1IDIuMDUgMCAwIDAgLjYxNi0uMzI1Yy4xODItLjE0MS4zMzEtLjMxNC40NDktLjUyLjExNy0uMjA1LjE3Ni0uNDQ4LjE3Ni0uNzMgMC0uNDU4LS4xNDQtLjgtLjQzMi0xLjAzLS4yODctLjIyOC0uNzc3LS40MzctMS40Ny0uNjI0djMuMzc5ek00LjM2NSAzLjQxNWMtLjIgMC0uMzkzLjAzLS41OC4wODhhMS41MiAxLjUyIDAgMCAwLS41MTEuMjczIDEuMzE3IDEuMzE3IDAgMCAwLS4zNi40NTcgMS40NiAxLjQ2IDAgMCAwLS4xMzMuNjQzYzAgLjM4Ny4xMjMuNjg2LjM3Ljg5Ny4yNDYuMjEyLjY1MS4zODIgMS4yMTQuNTFWMy40MTZ6IiBmaWxsPSIjOTA5MDk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+ZXVybzwvdGl0bGU+PHBhdGggZD0iTTAgMTEuMjNsLjQzNi0yLjA4NGgyLjU2YTE0Ljk3OCAxNC45NzggMCAwIDEtLjAxLTIuMDY0SDBsLjQzNi0yLjA4NGgyLjg0Yy4yOTEtMS4yMzcuNzg1LTIuMjc0IDEuNDg0LTMuMTFDNS44MDMuNjI4IDcuMTM0IDAgOC43NTIgMGMyLjE1NyAwIDMuNzM2Ljg0MyA0LjczOSAyLjUzLjU1My45NDcuODUgMS44OTguODkxIDIuODUyaC0yLjY4NWMtLjE3My0uNzMzLS4zOTgtMS4yODYtLjY3NC0xLjY2LS40ODQtLjY2My0xLjIwNy0uOTk1LTIuMTY4LS45OTUtLjk3NCAwLTEuNzQ1LjQ3LTIuMzEyIDEuNDFhNC43MDIgNC43MDIgMCAwIDAtLjM5NC44NjFoNC4xMTdMOS44MyA3LjA4Mkg1LjczNGMtLjAyLjMyNS0uMDMuNjY3LS4wMyAxLjAyNyAwIC4zNjYuMDEuNzEyLjAzIDEuMDM3aDMuODM3bC0uNDM2IDIuMDg0SDYuMjAxYy4xMS4yNy4yNDIuNTE1LjM5NC43MzYuNTk0Ljg1IDEuMzUxIDEuMjc2IDIuMjcgMS4yNzYuOTQxIDAgMS42NTYtLjM2NyAyLjE0Ny0xLjEuMjc3LS4zOTMuNTA1LS45ODUuNjg1LTEuNzczaDIuNjU0Yy0uMjM1IDEuNjY2LS44MyAzLjAyMS0xLjc4MyA0LjA2NUMxMS42MTQgMTUuNDc4IDEwLjM5IDE2IDguODk3IDE2Yy0xLjg0NiAwLTMuMjk4LS43MDUtNC4zNTUtMi4xMTUtLjU1My0uNzQtLjk2MS0xLjYyNS0xLjIyNC0yLjY1NUgweiIgZmlsbD0iIzkwOTA5OSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOSAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+cGVyY2VudGFnZTwvdGl0bGU+PHBhdGggZD0iTTUuMjEgNS4yODVjLjMzMy0uMzMzLjUtLjczNy41LTEuMjFzLS4xNjctLjg3Ni0uNS0xLjIxYTEuNjQ4IDEuNjQ4IDAgMCAwLTEuMjEtLjVjLS40NzMgMC0uODc2LjE2Ny0xLjIxLjUtLjMzMy4zMzQtLjUuNzM3LS41IDEuMjFzLjE2Ny44NzcuNSAxLjIxYy4zMzQuMzMzLjczNy41IDEuMjEuNXMuODc2LS4xNjcgMS4yMS0uNXptMS42MjMgMS42MThDNi4wNTYgNy42ODUgNS4xMTEgOC4wNzUgNCA4LjA3NWEzLjg1IDMuODUgMCAwIDEtMi44MjgtMS4xNzJDLjM5MSA2LjEyMiAwIDUuMTggMCA0LjA3NSAwIDIuOTcxLjM5IDIuMDMgMS4xNzIgMS4yNDdBMy44NTQgMy44NTQgMCAwIDEgNCAuMDc1YTMuODUgMy44NSAwIDAgMSAyLjgyOCAxLjE3MkM3LjYwOSAyLjAzIDggMi45NzEgOCA0LjA3NWMwIDEuMTA0LS4zODkgMi4wNDctMS4xNjcgMi44Mjh6bTguODI4IDMuNzlhMS42NDggMS42NDggMCAwIDAtMS4yMS0uNWMtLjQ3MyAwLS44NzYuMTY3LTEuMjEuNS0uMzMyLjMzNC0uNS43MzctLjUgMS4yMXMuMTY4Ljg3Ny41IDEuMjFjLjMzNC4zMzMuNzM3LjUgMS4yMS41LjQ3NCAwIC44NzctLjE2NyAxLjIxLS41LjMzNC0uMzMzLjUtLjczNy41LTEuMjFzLS4xNjYtLjg3Ni0uNS0xLjIxem0xLjYxOSA0LjAzOGMtLjc4Mi43ODItMS43MjQgMS4xNzItMi44MjggMS4xNzJhMy44NSAzLjg1IDAgMCAxLTIuODI4LTEuMTcyIDMuODUgMy44NSAwIDAgMS0xLjE3Mi0yLjgyOGMwLTEuMTEuMzktMi4wNTUgMS4xNzItMi44MzMuNzgxLS43NzggMS43MjQtMS4xNjcgMi44MjgtMS4xNjcgMS4xMDQgMCAyLjA0Ni4zOSAyLjgyOCAxLjE3Mi43OC43ODIgMS4xNzIgMS43MjQgMS4xNzIgMi44MjhhMy44NTQgMy44NTQgMCAwIDEtMS4xNzIgMi44Mjh6TTEyLjc0MiAwaDEuNjM0TDUuNjg4IDE2SDQuMDIybDguNzItMTZ6IiBmaWxsPSIjOTA5MDk5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNvbi1zZWFyY2g8L3RpdGxlPjxwYXRoIGQ9Ik02LjE0NyAxMC45MzVBNC43NTYgNC43NTYgMCAwIDEgMi43NiA5LjUzMmE0Ljc1NiA0Ljc1NiAwIDAgMS0xLjQtMy4zODVjMC0xLjI4LjQ5OC0yLjQ4MSAxLjQwMi0zLjM4NkE0Ljc1NiA0Ljc1NiAwIDAgMSA2LjE0NyAxLjM2YzEuMjc5IDAgMi40ODEuNDk4IDMuMzg1IDEuNDAyYTQuNzU2IDQuNzU2IDAgMCAxIDEuNDAzIDMuMzg2IDQuNzU2IDQuNzU2IDAgMCAxLTEuNDAzIDMuMzg1IDQuNzU3IDQuNzU3IDAgMCAxLTMuMzg1IDEuNDAzbTkuNTEyIDMuMDc3bC0zLjAzLTMuMDNhMS4xNiAxLjE2IDAgMCAwLTEuMDA5LS4zMjJsLS42NzMtLjY3NGE2LjE0NyA2LjE0NyAwIDEgMC0uOTYxLjk2bC42NzQuNjc0YTEuMTYgMS4xNiAwIDAgMCAuMzIzIDEuMDFsMy4wMyAzLjAyOWExLjE2IDEuMTYgMCAwIDAgMS42NDYgMCAxLjE2NCAxLjE2NCAwIDAgMCAwLTEuNjQ3IiBmaWxsPSIjQURBQ0IwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+eWVuPC90aXRsZT48cGF0aCBmaWxsPSIjOTA5MDk5IiBkPSJNLjUgMGw0LjMwMiA3Ljc5N0gxLjk1NnYxLjQ4aDMuNjc1bC4wMjIuMDIydjEuODZIMS45NTZ2MS40NzhoMy42OTd2My4zNjFoMi44MjR2LTMuMzZoMy43MTl2LTEuNDhoLTMuNzJ2LTEuODZsLjAyMy0uMDIyaDMuNjk3VjcuNzk3SDkuMzI4TDEzLjYzIDBoLTMuMTgyTDcuMDY1IDYuNzQ0IDMuNjgyIDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDEwIDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlRyaWFuZ2xlIDE8L3RpdGxlPjxwYXRoIGQ9Ik0wIDBoMTBMNSA1eiIgZmlsbD0iIzQ1NDU0NSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("react-onclickoutside");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-select/dist/react-select.css");

/***/ })
/******/ ]);
});