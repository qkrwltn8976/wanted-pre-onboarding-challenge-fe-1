export const AUTH = {
  DEFAULT: "/auth",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
} as const;

export const TODO = {
  DEFAULT: "/todos",
  DETAIL: (id: string) => `/todos/${id}`,
} as const;
