export class EmailService {
  private readonly _email: string = 'vbetsch.contact@gmail.com';
  private readonly _subject: string | null = null;
  private readonly _body: string | null = null;

  public get email(): string {
    return this._email;
  }

  public get subject(): string | null {
    return this._subject;
  }

  public get body(): string | null {
    return this._body;
  }
}
