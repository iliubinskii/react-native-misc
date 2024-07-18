"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSignUpError = exports.isSignInWithPasswordError = exports.isSignInWithLinkError = exports.isLinkWithCredentialError = exports.isDeleteError = exports.SignUpErrorCode = exports.SignInWithPasswordErrorCode = exports.SignInWithLinkErrorCode = exports.LinkWithCredentialErrorCode = exports.DeleteErrorCode = void 0;
const typescript_misc_1 = require("typescript-misc");
var DeleteErrorCode;
(function (DeleteErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    DeleteErrorCode["requiresRecentLogin"] = "auth/requires-recent-login";
})(DeleteErrorCode || (exports.DeleteErrorCode = DeleteErrorCode = {}));
var LinkWithCredentialErrorCode;
(function (LinkWithCredentialErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    LinkWithCredentialErrorCode["credentialAlreadyInUse"] = "auth/credential-already-in-use";
})(LinkWithCredentialErrorCode || (exports.LinkWithCredentialErrorCode = LinkWithCredentialErrorCode = {}));
var SignInWithLinkErrorCode;
(function (SignInWithLinkErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithLinkErrorCode["invalidEmail"] = "auth/invalid-email";
})(SignInWithLinkErrorCode || (exports.SignInWithLinkErrorCode = SignInWithLinkErrorCode = {}));
var SignInWithPasswordErrorCode;
(function (SignInWithPasswordErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["invalidEmail"] = "auth/invalid-email";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["userDisabled"] = "auth/user-disabled";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["userNotFound"] = "auth/user-not-found";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["wrongPassword"] = "auth/wrong-password";
})(SignInWithPasswordErrorCode || (exports.SignInWithPasswordErrorCode = SignInWithPasswordErrorCode = {}));
var SignUpErrorCode;
(function (SignUpErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignUpErrorCode["emailAlreadyInUse"] = "auth/email-already-in-use";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignUpErrorCode["invalidEmail"] = "auth/invalid-email";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignUpErrorCode["weakPassword"] = "auth/weak-password";
})(SignUpErrorCode || (exports.SignUpErrorCode = SignUpErrorCode = {}));
exports.isDeleteError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, DeleteErrorCode) }, {});
exports.isLinkWithCredentialError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, LinkWithCredentialErrorCode) }, {});
exports.isSignInWithLinkError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, SignInWithLinkErrorCode) }, {});
exports.isSignInWithPasswordError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, SignInWithPasswordErrorCode) }, {});
exports.isSignUpError = typescript_misc_1.is.object.factory({ code: typescript_misc_1.is.factory(typescript_misc_1.is.enumeration, SignUpErrorCode) }, {});
//# sourceMappingURL=react-native-firebase.js.map