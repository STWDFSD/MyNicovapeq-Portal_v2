import { NextRequest, NextResponse } from "next/server";

// Type definitions for verification storage
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
    const { phoneNumber, code } = await request.json();

    if (!phoneNumber || !code) {
      return NextResponse.json(
        { error: "Phone number and verification code are required" },
        { status: 400 }
      );
    }

    // Format phone number consistently
    const formattedPhone = phoneNumber.startsWith("+61")
      ? phoneNumber
      : phoneNumber.startsWith("0")
      ? `+61${phoneNumber.substring(1)}`
      : `+61${phoneNumber}`;

    // Get stored verification data
    const storedData = global.verificationCodes?.get(formattedPhone);

    if (!storedData) {
      return NextResponse.json(
        {
          error:
            "No verification code found for this phone number. Please request a new code.",
        },
        { status: 404 }
      );
    }

    // Check if code has expired
    if (new Date(storedData.expiresAt) < new Date()) {
      global.verificationCodes?.delete(formattedPhone);
      return NextResponse.json(
        { error: "Verification code has expired. Please request a new code." },
        { status: 410 }
      );
    }

    // Check if too many attempts
    if (storedData.attempts >= 3) {
      global.verificationCodes?.delete(formattedPhone);
      return NextResponse.json(
        { error: "Too many failed attempts. Please request a new code." },
        { status: 429 }
      );
    }

    // Increment attempts
    storedData.attempts += 1;
    global.verificationCodes?.set(formattedPhone, storedData);

    // Verify the code
    if (storedData.code !== code) {
      return NextResponse.json(
        { error: "Invalid verification code. Please try again." },
        { status: 400 }
      );
    }

    // Code is valid - remove it from storage
    global.verificationCodes?.delete(formattedPhone);

    // In a real application, you would:
    // 1. Create or update user session
    // 2. Store user authentication state
    // 3. Return session token or user data

    return NextResponse.json({
      success: true,
      message: "Phone number verified successfully",
      phoneNumber: formattedPhone,
    });
  } catch (error) {
    console.error("Error verifying SMS:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
