import { is } from "typescript-misc";
export declare enum DeleteErrorCode {
    requiresRecentLogin = "auth/requires-recent-login"
}
export declare enum LinkWithCredentialErrorCode {
    credentialAlreadyInUse = "auth/credential-already-in-use"
}
export declare enum SignInWithLinkErrorCode {
    invalidEmail = "auth/invalid-email"
}
export declare enum SignInWithPasswordErrorCode {
    invalidEmail = "auth/invalid-email",
    userDisabled = "auth/user-disabled",
    userNotFound = "auth/user-not-found",
    wrongPassword = "auth/wrong-password"
}
export declare enum SignUpErrorCode {
    emailAlreadyInUse = "auth/email-already-in-use",
    invalidEmail = "auth/invalid-email",
    weakPassword = "auth/weak-password"
}
export declare const isDeleteError: is.Guard<DeleteError>;
export declare const isLinkWithCredentialError: is.Guard<LinkWithCredentialError>;
export declare const isSignInWithLinkError: is.Guard<SignInWithLinkError>;
export declare const isSignInWithPasswordError: is.Guard<SignInWithPasswordError>;
export declare const isSignUpError: is.Guard<SignUpError>;
/**
 * @internal
 */
export interface DeleteError {
    readonly code: DeleteErrorCode;
}
/**
 * @internal
 */
export interface LinkWithCredentialError {
    readonly code: LinkWithCredentialErrorCode;
}
/**
 * @internal
 */
export interface SignInWithLinkError {
    readonly code: SignInWithLinkErrorCode;
}
/**
 * @internal
 */
export interface SignInWithPasswordError {
    readonly code: SignInWithPasswordErrorCode;
}
/**
 * @internal
 */
export interface SignUpError {
    readonly code: SignUpErrorCode;
}
//# sourceMappingURL=react-native-firebase.d.ts.map