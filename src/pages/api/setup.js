import base from "../../helper/airtable";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  // if (req.method !== "POST") {
  //   return res.status(405).json({ message: "Method Not Allowed" });
  // }

  const { attendeePassword, adminPassword, code } = req.body;

  try {
    // Hash the passwords
    const attendeePasswordHash = await bcrypt.hash(attendeePassword, 10);
    const adminPasswordHash = await bcrypt.hash(adminPassword, 10);

    // Find the existing record by Code
    const existingRecords = await base("Weddings")
      .select({
        filterByFormula: `{Code} = '${code}'`,
      })
      .firstPage();

    if (existingRecords.length === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    const recordId = existingRecords[0].id;

    // Update the record with the new values
    await base("Weddings").update([
      {
        id: recordId,
        fields: {
          AttendeePassword: attendeePasswordHash,
          AdminPassword: adminPasswordHash,
        },
      },
    ]);

    res.status(200).json({ message: "Wedding setup successfully", code });
  } catch (error) {
    console.error("Error setting up wedding:", error);
    res.status(500).json({ error: "Error setting up wedding" });
  }
}
