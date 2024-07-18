import { is } from "typescript-misc";

export enum DeleteErrorCode {
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  requiresRecentLogin = "auth/requires-recent-login"
}

export enum LinkWithCredentialErrorCode {
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  credentialAlreadyInUse = "auth/credential-already-in-use"
}

export enum SignInWithLinkErrorCode {
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  invalidEmail = "auth/invalid-email"
}

export enum SignInWithPasswordErrorCode {
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  invalidEmail = "auth/invalid-email",
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  userDisabled = "auth/user-disabled",
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  userNotFound = "auth/user-not-found",
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  wrongPassword = "auth/wrong-password"
}

export enum SignUpErrorCode {
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  emailAlreadyInUse = "auth/email-already-in-use",
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
  invalidEmail = "auth/invalid-email",
  // eslint-disable-next-line misc/consistent-enum-members -- Ok
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
