import { ErrorInfo } from "react";

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: ErrorInfo | null;
}
