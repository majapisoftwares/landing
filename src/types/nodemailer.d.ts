declare module "nodemailer" {
  type Transporter = {
    sendMail(options: {
      from: string;
      to: string;
      replyTo: string;
      subject: string;
      text: string;
    }): Promise<unknown>;
  };

  function createTransport(options: {
    host: string;
    port: number;
    secure: boolean;
    auth: { user: string; pass: string };
  }): Transporter;

  const nodemailer: { createTransport: typeof createTransport };
  export default nodemailer;
}
