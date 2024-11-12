"use server";

import { getMessages } from "next-intl/server";

export const rendeMessage = async (locale?: string) => {
  const messages = await getMessages({ locale });

  return messages;
};
