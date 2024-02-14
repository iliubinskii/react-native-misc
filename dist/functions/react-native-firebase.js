"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSignUpError = exports.isSignInWithPasswordError = exports.isSignInWithLinkError = exports.isLinkWithCredentialError = exports.isDeleteError = exports.SignUpErrorCode = exports.SignInWithPasswordErrorCode = exports.SignInWithLinkErrorCode = exports.LinkWithCredentialErrorCode = exports.DeleteErrorCode = void 0;
const typescript_misc_1 = require("typescript-misc");
var DeleteErrorCode;
(function (DeleteErrorCode) {
    DeleteErrorCode["requiresRecentLogin"] = "auth/requires-recent-login";
})(DeleteErrorCode || (exports.DeleteErrorCode = DeleteErrorCode = {}));
var LinkWithCredentialErrorCode;
(function (LinkWithCredentialErrorCode) {
    LinkWithCredentialErrorCode["credentialAlreadyInUse"] = "auth/credential-already-in-use";
})(LinkWithCredentialErrorCode || (exports.LinkWithCredentialErrorCode = LinkWithCredentialErrorCode = {}));
var SignInWithLinkErrorCode;
(function (SignInWithLinkErrorCode) {
    SignInWithLinkErrorCode["invalidEmail"] = "auth/invalid-email";
})(SignInWithLinkErrorCode || (exports.SignInWithLinkErrorCode = SignInWithLinkErrorCode = {}));
var SignInWithPasswordErrorCode;
(function (SignInWithPasswordErrorCode) {
    SignInWithPasswordErrorCode["invalidEmail"] = "auth/invalid-email";
    SignInWithPasswordErrorCode["userDisabled"] = "auth/user-disabled";
    SignInWithPasswordErrorCode["userNotFound"] = "auth/user-not-found";
    SignInWithPasswordErrorCode["wrongPassword"] = "auth/wrong-password";
})(SignInWithPasswordErrorCode || (exports.SignInWithPasswordErrorCode = SignInWithPasswordErrorCode = {}));
var SignUpErrorCode;
(function (SignUpErrorCode) {
    SignUpErrorCode["emailAlreadyInUse"] = "auth/email-already-in-use";
    SignUpErrorCode["invalidEmail"] = "auth/invalid-email";
    SignUpErrorCode["weakPassword"] = "auth/weak-password";
})(SignUpErrorCode || (exports.SignUpErrorCode = SignUpErrorCode = {}));
exports.isDeleteError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, DeleteErrorCode) }, {});
exports.isLinkWithCredentialError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, LinkWithCredentialErrorCode) }, {});
exports.isSignInWithLinkError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, SignInWithLinkErrorCode) }, {});
exports.isSignInWithPasswordError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, SignInWithPasswordErrorCode) }, {});
exports.isSignUpError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, SignUpErrorCode) }, {});
//# sourceMappingURL=react-native-firebase.js.map