"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCss = void 0;
const fs = require('fs');
const path = require('path');
const const_1 = require("./const");
const genCss = (jsKv, opts) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!(opts === null || opts === void 0 ? void 0 : opts.outputCssPath))
        throw new Error('Missing opts.outputCssPath!');
    if (!(opts === null || opts === void 0 ? void 0 : opts.outputCssScopeTag))
        throw new Error('Missing opts.outputCssScopeTag!');
    let HEADER = `${const_1.__CODE_GEN_COMMENT__}\n${opts.outputCssScopeTag} {\n`;
    const FOOTER = `}\n`;
    let CONTENT = '';
    for (const k in jsKv) {
        if (!k)
            return;
        // filter less syntax
        const v = (_a = jsKv[k]) === null || _a === void 0 ? void 0 : _a.replace('~', '');
        CONTENT += `  ${k}: ${v};\n`;
    }
    const RESULT = `${HEADER}${CONTENT}${FOOTER}`;
    yield fs.mkdirSync(path.dirname(opts.outputCssPath), { recursive: true });
    yield fs.writeFileSync(opts.outputCssPath, RESULT);
});
exports.genCss = genCss;
