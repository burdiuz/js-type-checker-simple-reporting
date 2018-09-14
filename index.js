'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable import/prefer-default-export */

const constructErrorString = (action, name, required, received) => `${action}Error on "${name}" instead of "${required}" received "${received}"`;

/* eslint-disable no-console */

const ConsoleErrorReporter = (action, name, requiredTypeString, actualTypeString) => console.error(constructErrorString(action, name, requiredTypeString, actualTypeString));

const ConsoleWarnReporter = (action, name, requiredTypeString, actualTypeString) => console.warn(constructErrorString(action, name, requiredTypeString, actualTypeString));

/* eslint-disable import/prefer-default-export */

const ThrowErrorReporter = (action, name, requiredTypeString, receivedTypeString) => {
  throw new Error(constructErrorString(action, name, requiredTypeString, receivedTypeString));
};

exports.ConsoleErrorReporter = ConsoleErrorReporter;
exports.ConsoleWarnReporter = ConsoleWarnReporter;
exports.ThrowErrorReporter = ThrowErrorReporter;
//# sourceMappingURL=index.js.map
