export class EmailService {
  private readonly _email: string = 'vbetsch.contact@gmail.com';
  private readonly _subject: string | null = null;
  private readonly _body: string | null = null;

  public get email(): string {
    return this._email;
  }

  public computeMailTo(): string {
    let mailTo: string = `mailto:${this._email}`;
    if (this._subject) {
      mailTo += `?subject=${this._subject}`;
    }
    if (this._body) {
      mailTo += `&body=${this._body}`;
    }
    return mailTo;
  }
}
