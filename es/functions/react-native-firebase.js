import { is } from "typescript-misc";
export var DeleteErrorCode;
(function (DeleteErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    DeleteErrorCode["requiresRecentLogin"] = "auth/requires-recent-login";
})(DeleteErrorCode || (DeleteErrorCode = {}));
export var LinkWithCredentialErrorCode;
(function (LinkWithCredentialErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    LinkWithCredentialErrorCode["credentialAlreadyInUse"] = "auth/credential-already-in-use";
})(LinkWithCredentialErrorCode || (LinkWithCredentialErrorCode = {}));
export var SignInWithLinkErrorCode;
(function (SignInWithLinkErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithLinkErrorCode["invalidEmail"] = "auth/invalid-email";
})(SignInWithLinkErrorCode || (SignInWithLinkErrorCode = {}));
export var SignInWithPasswordErrorCode;
(function (SignInWithPasswordErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["invalidEmail"] = "auth/invalid-email";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["userDisabled"] = "auth/user-disabled";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["userNotFound"] = "auth/user-not-found";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignInWithPasswordErrorCode["wrongPassword"] = "auth/wrong-password";
})(SignInWithPasswordErrorCode || (SignInWithPasswordErrorCode = {}));
export var SignUpErrorCode;
(function (SignUpErrorCode) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignUpErrorCode["emailAlreadyInUse"] = "auth/email-already-in-use";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignUpErrorCode["invalidEmail"] = "auth/invalid-email";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    SignUpErrorCode["weakPassword"] = "auth/weak-password";
})(SignUpErrorCode || (SignUpErrorCode = {}));
export const isDeleteError = is.object.factory({ code: is.factory(is.enumeration, DeleteErrorCode) }, {});
export const isLinkWithCredentialError = is.object.factory({ code: is.factory(is.enumeration, LinkWithCredentialErrorCode) }, {});
export const isSignInWithLinkError = is.object.factory({ code: is.factory(is.enumeration, SignInWithLinkErrorCode) }, {});
export const isSignInWithPasswordError = is.object.factory({ code: is.factory(is.enumeration, SignInWithPasswordErrorCode) }, {});
export const isSignUpError = is.object.factory({ code: is.factory(is.enumeration, SignUpErrorCode) }, {});
//# sourceMappingURL=react-native-firebase.js.map