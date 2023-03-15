namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "local" | "development" | "staging" | "production";
    NEXT_PUBLIC_BACKEND: string;
  }
}
