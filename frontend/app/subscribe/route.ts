import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, phone } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const hubspotKey = process.env.HUBSPOT_API_KEY;
    if (!hubspotKey) {
      console.error("HUBSPOT_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Create or update contact in HubSpot
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${hubspotKey}`,
      },
      body: JSON.stringify({
        properties: {
          email,
          firstname: firstName ?? "",
          lastname: lastName ?? "",
          ...(phone ? { phone } : {}),
          lifecyclestage: "subscriber",
          hs_lead_status: "NEW",
        },
      }),
    });

    // If contact already exists (409), that is fine
    if (!response.ok && response.status !== 409) {
      const err = await response.text();
      console.error("HubSpot error:", err);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
