enum AuthorizedUsers {
  ADMIN,
  USER,
}

export interface StoredUsers {
  id: string;
  userUid: string;
  name: string;
  email: string;
  role: string;
  baned: boolean;
  /** New system: grade-level entitlements array (set by Cloud Functions / dev tools). */
  entitlements?: string[];
  /** New system: plan tier (set by Stripe webhook / dev tools). */
  plan?: string;
  /** Legacy per-unit access maps — kept for backwards compatibility during migration. */
  pk3: { [key: string]: boolean };
  pk4: { [key: string]: boolean };
  kg: { [key: string]: boolean };
  first: { [key: string]: boolean };
  second: { [key: string]: boolean };
  third: { [key: string]: boolean };
  fourth: { [key: string]: boolean };
  fifth: { [key: string]: boolean };
  sixth: { [key: string]: boolean };
  seventh: { [key: string]: boolean };
  eighth: { [key: string]: boolean };
  ninth: { [key: string]: boolean };
  tenth: { [key: string]: boolean };
  eleventh: { [key: string]: boolean };
  twelfth: { [key: string]: boolean };
}

export interface PublicProfile {
  uid: string;
  email: string | null;
  emailVerified: boolean;
  displayName: string | null;
  photoUrl: string | null;
}

export interface IBtn {
  iconName: string;
  action: () => void;
}
