import { ReactNode } from "react";
import AlignedButtonIcon from "@/components/AlignedButtonIcon";

export interface OptionLoginButton {
  uri: string;
  onClose: () => void;
  Icon?: ReactNode;
  children?: ReactNode;
}

export const OptionLoginButton = ({
  uri,
  onClose,
  Icon,
  children,
}: OptionLoginButton) => {
  return (
    <a
      onClick={() => {
        window.open(
          `${process.env.NEXT_PUBLIC_BACKEND}/${uri}`,
          "Popup",
          "location,status,scrollbars,resizable,width=600, height=600"
        );
        onClose();
      }}
    >
      <AlignedButtonIcon fullWidth icon={Icon} sx={{ py: 1.5 }}>
        {children}
      </AlignedButtonIcon>
    </a>
  );
};

export default OptionLoginButton;
