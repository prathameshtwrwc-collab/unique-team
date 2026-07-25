import type { ContactFormData } from "./contactValidation";

const FORM_ENDPOINT = "https://api.lazyforms.com/f/1bfa2b3d-cad5-4f78-bfbc-ad94be9c5808";

export async function submitRequirement(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Submission failed. Please try again.");
  }

  return {
    success: true,
    message: "Your requirement has been received successfully. Our team will get back to you shortly.",
  };
}
