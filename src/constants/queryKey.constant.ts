export const authKeys = {
  login: ["login"] as const,
  register: ["register"] as const,
};

export const todoKeys = {
  all: ["todos"] as const,
  one: ["todo"] as const,
  detail: (id: string) => [...todoKeys.one, id] as const,
  create: () => ["create", ...todoKeys.one] as const,
  update: (id: string) => ["update", ...todoKeys.detail(id)] as const,
  delete: (id: string) => ["delete", ...todoKeys.detail(id)] as const,
};
