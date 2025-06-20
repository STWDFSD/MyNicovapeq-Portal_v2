export interface AuthResponse {
  success: boolean;
  message?: string;
  error?: string;
  phoneNumber?: string;
  messageId?: string;
}

export class AuthService {
  private static async makeRequest(
    endpoint: string,
    data: any
  ): Promise<AuthResponse> {
    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: result.error || "An error occurred",
        };
      }

      return {
        success: true,
        ...result,
      };
    } catch (error) {
      console.error(`Error in ${endpoint}:`, error);
      return {
        success: false,
        error: "Network error. Please check your connection.",
      };
    }
  }

  static async sendVerificationCode(
    phoneNumber: string
  ): Promise<AuthResponse> {
    return this.makeRequest("send-sms", { phoneNumber });
  }

  static async verifyCode(
    phoneNumber: string,
    code: string
  ): Promise<AuthResponse> {
    return this.makeRequest("verify-sms", { phoneNumber, code });
  }

  // Utility function to format phone number for display
  static formatPhoneForDisplay(phoneNumber: string): string {
    const formatted = phoneNumber.startsWith("+61")
      ? phoneNumber
      : phoneNumber.startsWith("0")
      ? `+61${phoneNumber.substring(1)}`
      : `+61${phoneNumber}`;

    // Mask the middle digits for display
    if (formatted.length >= 10) {
      const prefix = formatted.substring(0, 4);
      const suffix = formatted.substring(formatted.length - 3);
      return `${prefix} XXX ${suffix}`;
    }

    return formatted;
  }

  // Utility function to validate phone number format
  static validatePhoneNumber(phoneNumber: string): boolean {
    // Remove all non-digit characters
    const digits = phoneNumber.replace(/\D/g, "");

    if (digits.length === 9) {
      return true;
    }

    if (digits.length === 10 && digits.startsWith("0")) {
      return true;
    }

    if (digits.length === 11 && digits.startsWith("61")) {
      return true;
    }

    if (digits.length === 12 && digits.startsWith("+61")) {
      return true;
    }

    return false;
  }
}
