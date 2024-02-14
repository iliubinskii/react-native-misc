import { is } from "typescript-misc";

export enum DeleteErrorCode {
  requiresRecentLogin = "auth/requires-recent-login"
}

export enum LinkWithCredentialErrorCode {
  credentialAlreadyInUse = "auth/credential-already-in-use"
}

export enum SignInWithLinkErrorCode {
  invalidEmail = "auth/invalid-email"
}

export enum SignInWithPasswordErrorCode {
  invalidEmail = "auth/invalid-email",
  userDisabled = "auth/user-disabled",
  userNotFound = "auth/user-not-found",
  wrongPassword = "auth/wrong-password"
}

export enum SignUpErrorCode {
  emailAlreadyInUse = "auth/email-already-in-use",
  invalidEmail = "auth/invalid-email",
  weakPassword = "auth/weak-password"
}

export const isDeleteError = is.object.factory<DeleteError>(
  { code: is.factory(is.enumeration, DeleteErrorCode) },
  {}
);

export const isLinkWithCredentialError =
  is.object.factory<LinkWithCredentialError>(
    { code: is.factory(is.enumeration, LinkWithCredentialErrorCode) },
    {}
  );

export const isSignInWithLinkError = is.object.factory<SignInWithLinkError>(
  { code: is.factory(is.enumeration, SignInWithLinkErrorCode) },
  {}
);

export const isSignInWithPasswordError =
  is.object.factory<SignInWithPasswordError>(
    { code: is.factory(is.enumeration, SignInWithPasswordErrorCode) },
    {}
  );

export const isSignUpError = is.object.factory<SignUpError>(
  { code: is.factory(is.enumeration, SignUpErrorCode) },
  {}
);

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
