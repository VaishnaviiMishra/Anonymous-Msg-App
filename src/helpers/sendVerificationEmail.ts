import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

// Store sent timestamps in memory (Use a database in production)
const emailSendTimestamps: Record<string, number> = {}; // Key: email, Value: timestamp

const RESEND_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes cooldown

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  const now = Date.now();
  const lastSent = emailSendTimestamps[email];

  // Check if we should allow resending
  if (lastSent && now - lastSent < RESEND_COOLDOWN_MS) {
    return {
      success: false,
      message: `Please wait before requesting another verification email.`,
    };
  }

  try {
    await resend.emails.send({
      from: "vaishnavisudha111@gmail.com",
      to: email,
      subject: "Mystery Message Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    // Update last sent timestamp
    emailSendTimestamps[email] = now;

    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email." };
  }
}
