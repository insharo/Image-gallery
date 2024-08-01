// pages/api/deleteImageByID.js

const AIRTABLE_API_URL = "https://api.airtable.com/v0/appDcVgimlwVUFcWj/Images";
const AIRTABLE_API_KEY =
  "Bearer patYVRTYJbPFbNHl6.ffa2eb89e3819b1c6dd315398ed4bef9a0f61597e9d9dc71f35a3f514d585727";

export default async function deleteImageByID(recordIDs) {
  if (!Array.isArray(recordIDs)) {
    throw new Error("recordIDs should be an array");
  }
  if (recordIDs.length === 0 || recordIDs.length > 10) {
    throw new Error("recordIDs array should contain between 1 and 10 IDs");
  }

  const params = new URLSearchParams();
  recordIDs.forEach((id) => params.append("records[]", id));

  const url = `${AIRTABLE_API_URL}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: AIRTABLE_API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Response:", data);
    return data;
  } catch (error) {
    console.error("Error deleting records:", error);
    throw error;
  }
}
