import { NextRequest, NextResponse } from "next/server";
const LAMBDA_URL = process.env.NEXT_PUBLIC_LAMBDA_URL || "";

interface VerificationData {
  code: string;
  phoneNumber: string;
  expiresAt: string;
  attempts: number;
}

declare global {
  var verificationCodes: Map<string, VerificationData> | undefined;
}

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Format phone number with +61 prefix if not already present
    const formattedPhone = phoneNumber.startsWith("+61")
      ? phoneNumber
      : phoneNumber.startsWith("0")
      ? `+61${phoneNumber.substring(1)}`
      : `+61${phoneNumber}`;

    // Create SMS message
    const message = `${verificationCode} is your verification code for the myNicovapeQ portal. The code will expire in 5 minutes Questions? live chat on nicovapeq.com`;

    // Call AWS Lambda function
    const response = await fetch(LAMBDA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: formattedPhone,
        message: message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Lambda error:", errorData);
      return NextResponse.json(
        { error: "Failed to send SMS" },
        { status: 500 }
      );
    }

    const result = await response.json();

    // Store verification code with expiration (5 minutes)
    const verificationData: VerificationData = {
      code: verificationCode,
      phoneNumber: formattedPhone,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      attempts: 0,
    };

    // For development, we'll use a simple in-memory store
    // In production, use Redis or database
    if (!global.verificationCodes) {
      global.verificationCodes = new Map();
    }
    global.verificationCodes.set(formattedPhone, verificationData);

    // Clean up expired codes
    for (const [phone, data] of global.verificationCodes.entries()) {
      if (new Date(data.expiresAt) < new Date()) {
        global.verificationCodes.delete(phone);
      }
    }

    console.log(`SMS sent to ${formattedPhone} with code: ${verificationCode}`);

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      phoneNumber: formattedPhone,
    });
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
