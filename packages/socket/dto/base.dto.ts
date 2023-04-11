type StatusType = "success" | "error";

type CallbackPropsType<S extends StatusType, T> = {
  status: S;
  data: T;
};

type SocketCallbackType<SuccessData, ErrorData> = (props: {
  status: StatusType;
}) => void;
