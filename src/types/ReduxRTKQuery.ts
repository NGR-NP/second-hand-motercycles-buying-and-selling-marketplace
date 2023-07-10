type RtkStateType = {
  isLoading?: boolean;
  isError?: boolean;
  isFetching?: boolean;
  isSuccess?: boolean;
};

type RtkStatusType = {
  status?: "idle" | "loading" | "succeeded" | "failed" | "rejected";
};
type RtkQueryErrorType = {
  status: number;
  data: string | { errMsg?: string };
};

type RtkQueryResultType = {
  currentData?: any;
  data?: any;
  endpointName?: string;
  error?: any;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isUninitialized?: boolean;
  originalArgs?: Record<string, unknown>;
  refetch?: () => void;
  requestId?: string;
  startedTimeStamp?: number;
  status?: RtkStatusType | any;
};
