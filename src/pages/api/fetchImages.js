import base from "../../helper/airtable";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const records = await base("Images")
      .select({
        filterByFormula: `{ClientID} = ${process.env.ClientID}`,
        sort: [{ field: "CreationTime", direction: "asc" }],
      })
      .all();
    console.log("api records:", records);

    if (records.length > 0) {
      res.status(200).json(records.map((record) => record.fields));
    } else {
      res.status(404).json({ message: "No matching records found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
