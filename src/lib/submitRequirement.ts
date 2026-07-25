import type { ContactFormData } from "./contactValidation";

const FORM_ENDPOINT = "https://api.lazyforms.com/f/1bfa2b3d-cad5-4f78-bfbc-ad94be9c5808";

export async function submitRequirement(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(data)) {
    body.append(key, value as string);
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const text = await response.text();

  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text);
  } catch {}

  if (!response.ok) {
    const msg = (json && typeof json.message === "string" ? json.message : null)
      || (json && typeof json.error === "string" ? json.error : null)
      || "Submission failed. Please try again.";
    throw new Error(msg);
  }

  return {
    success: true,
    message: "Your requirement has been received successfully. Our team will get back to you shortly.",
  };
}
