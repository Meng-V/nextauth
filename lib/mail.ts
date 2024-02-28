import { Resend } from "resend";

const env = process.env.NODE_ENV

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
    email: string, 
    token: string
) => {
  let confirmLink = "";
  if (env === "production"){
    confirmLink = `http://vivoequeen.com/auth/new-verification?token=${token}`;
  } else {
    confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html:`<h1>Welcome!</h1></br><p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`
  });
};
