export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-07-15";

export const dataset = assertValue("production", "Missing environment variable: NEXT_PUBLIC_SANITY_DATASETT");

export const projectId = assertValue("hbpvnf14", "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_IDD");

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
