import { is } from "typescript-misc";
export var DeleteErrorCode;
(function (DeleteErrorCode) {
    DeleteErrorCode["requiresRecentLogin"] = "auth/requires-recent-login";
})(DeleteErrorCode || (DeleteErrorCode = {}));
export var LinkWithCredentialErrorCode;
(function (LinkWithCredentialErrorCode) {
    LinkWithCredentialErrorCode["credentialAlreadyInUse"] = "auth/credential-already-in-use";
})(LinkWithCredentialErrorCode || (LinkWithCredentialErrorCode = {}));
export var SignInWithLinkErrorCode;
(function (SignInWithLinkErrorCode) {
    SignInWithLinkErrorCode["invalidEmail"] = "auth/invalid-email";
})(SignInWithLinkErrorCode || (SignInWithLinkErrorCode = {}));
export var SignInWithPasswordErrorCode;
(function (SignInWithPasswordErrorCode) {
    SignInWithPasswordErrorCode["invalidEmail"] = "auth/invalid-email";
    SignInWithPasswordErrorCode["userDisabled"] = "auth/user-disabled";
    SignInWithPasswordErrorCode["userNotFound"] = "auth/user-not-found";
    SignInWithPasswordErrorCode["wrongPassword"] = "auth/wrong-password";
})(SignInWithPasswordErrorCode || (SignInWithPasswordErrorCode = {}));
export var SignUpErrorCode;
(function (SignUpErrorCode) {
    SignUpErrorCode["emailAlreadyInUse"] = "auth/email-already-in-use";
    SignUpErrorCode["invalidEmail"] = "auth/invalid-email";
    SignUpErrorCode["weakPassword"] = "auth/weak-password";
})(SignUpErrorCode || (SignUpErrorCode = {}));
export const isDeleteError = is.object.factory({ code: is.factory(is.enumeration, DeleteErrorCode) }, {});
export const isLinkWithCredentialError = is.object.factory({ code: is.factory(is.enumeration, LinkWithCredentialErrorCode) }, {});
export const isSignInWithLinkError = is.object.factory({ code: is.factory(is.enumeration, SignInWithLinkErrorCode) }, {});
export const isSignInWithPasswordError = is.object.factory({ code: is.factory(is.enumeration, SignInWithPasswordErrorCode) }, {});
export const isSignUpError = is.object.factory({ code: is.factory(is.enumeration, SignUpErrorCode) }, {});
//# sourceMappingURL=react-native-firebase.js.map