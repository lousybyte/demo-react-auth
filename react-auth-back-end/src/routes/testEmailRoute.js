import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path:"/api/test-email",
  method: "post",
  handler: async (req,res) => {
    try {
      await sendEmail({
        to: "lousybyte+test@outlook.com",
        from:"faultybyte@outlook.com",
        subject:" Sendgrid Test Email",
        text:"Test Email Content"
      });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);

      res.sendStatus(500);
    }
  }
};
