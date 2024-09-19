import { http, HttpResponse } from "msw";
import { RegisterRestaurantInBody } from "../register-restaurant";

export const registerRestaurantsMock = http.post<
  never,
  RegisterRestaurantInBody
>("/restaurants", async ({ request }) => {
  const { restaurantName } = await request.json();

  if (restaurantName === "Pizza Shop") {
    return new HttpResponse(null, { status: 201 });
  }

  return new HttpResponse(null, { status: 400 });
});
