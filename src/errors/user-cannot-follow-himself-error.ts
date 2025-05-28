export class UserCannotFollowHimselfError extends Error {
  constructor(public code: string) {
    super(code);
    this.name = "the user cannot follow himself";
  }
}