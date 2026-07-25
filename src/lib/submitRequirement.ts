import type { ContactFormData } from "./contactValidation";

const FORM_ENDPOINT = "https://splitforms.com/api/submit";
const ACCESS_KEY = "b841bca75199463cb8a9be2f6513dae8";

export async function submitRequirement(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  formData.set("access_key", ACCESS_KEY);
  formData.set("subject", "New Requirement Submission from " + data.companyName);

  for (const [key, value] of Object.entries(data)) {
    formData.set(key, value);
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  const json = await response.json();

  if (!json.success) {
    throw new Error("Submission failed. Please try again.");
  }

  return {
    success: true,
    message: "Your requirement has been received successfully. Our team will get back to you shortly.",
  };
}
