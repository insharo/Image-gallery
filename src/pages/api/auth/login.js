import Airtable from "airtable";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

export default async function login(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { code, password } = req.body;
  try {
    // Find the user by code
    const records = await base("Weddings")
      .select({
        filterByFormula: `{Code} = '${code}'`,
      })
      .firstPage();

    // console.log("code & record", code, records);

    if (records.length === 0) {
      return res.status(401).json({ error: "Invalid code or password1" });
    }

    const user = records[0].fields;
    // console.log("cuseruserd", user);

    const isAdminPassword = await bcrypt.compare(password, user.AdminPassword);
    const isAttendeePassword = await bcrypt.compare(
      password,
      user.AttendeePassword
    );

    if (!isAdminPassword && !isAttendeePassword) {
      return res.status(401).json({ error: "Invalid code or password2" });
    }

    res.status(200).json({
      id: records[0].id,
      code: user.Code,
      role: isAdminPassword ? "admin" : "attendee",
    });

    // console.log(
    //   "isAdminPasswordisAttendeePassword",
    //   isAdminPassword,
    //   isAttendeePassword
    // );

    // const token = jwt.sign(
    // {
    //   id: records[0].id,
    //   code: user.Code,
    //   role: isAdminPassword ? "admin" : "attendee",
    // },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );

    // await base("Weddings").update([
    //   {
    //     id: records[0].id,
    //     fields: {
    //       AuthToken: token,
    //     },
    //   },
    // ]);

    // res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Error logging in" });
  }
}
