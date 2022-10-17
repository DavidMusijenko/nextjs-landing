import axios from "axios";

export const SendEmail = async ({
  fullName,
  email,
  phone,
  message,
  setSend,
}) => {
  try {
    const datas = { fullName, email, phone, message };
    let res = await axios.post(
      `https://git.heroku.com/murmuring-journey-13742.git$https://nextjs-landing-server.vercel.app/:5000/send`,
      datas
    );
    if (res) {
      setSend(res);
    }
  } catch (error) {}
};
