import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantsMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantsMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
