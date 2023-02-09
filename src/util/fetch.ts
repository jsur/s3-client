import { config } from "../config";

export const post = async (path: string, { body }: { body: BodyInit }) => {
  const response = await fetch(`${config.BASE_URL_DENO}/${path}`, {
    method: "POST",
    body,
  });
  return response.json();
};

export const get = async (path: string) => {
  const res = await fetch(`${config.BASE_URL_DENO}/${path}`, {
    method: "GET",
  });
  if (res.ok) {
    return res.json();
  }
};
