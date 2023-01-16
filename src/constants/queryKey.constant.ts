export const authKeys = {
  login: ["login"] as const,
  register: ["register"] as const,
};

export const todoKeys = {
  all: ["todos"] as const,
  details: () => [...todoKeys.all, "detail"] as const,
  detail: (id: string) => [...todoKeys.details(), id] as const,
};
