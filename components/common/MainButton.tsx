import { forwardRef, ReactElement } from "react";
import Image from "next/image"; // Import Image from next/image for optimized image handling
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

type MainButtonProps = {
  text: string;
  form?: string;
  isLoading?: boolean;
  onClick?: () => void;
  isSubmitable?: boolean;
  disabled?: boolean;
  width?: "full_width" | string;
  dataLoadingText?: string;
  variant?: "primary" | "secondary";
  classes?: string;
  iconRoute?: string;
  rightIconRoute?: string;
  rightIconClass?: string;
  iconComponent?: ReactElement;
  size?: "small" | "normal" | "large";
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      isLoading = false,
      form,
      onClick,
      disabled = false,
      isSubmitable,
      width,
      dataLoadingText = "Please wait ...",
      variant = "primary",
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = "w-[24px] h-[24px]",
      iconComponent,
      size = "normal",
    },
    ref
  ) => {
    const propWidth =
      width === "full_width" ? "w-full" : width || "w-[7.4375rem]";
    const size_height =
      size === "normal"
        ? "h-[3.1215rem]"
        : size === "large"
        ? "h-[3.75rem]"
        : "h-[2.625rem]";
    const primaryClasses = "bg-purple-gradient text-white hover:opacity-90";
    const secondaryClasses = "btn-secondary hover:bg-secondary";
    const variantClasses =
      variant === "primary" ? primaryClasses : secondaryClasses;

    return !isLoading ? (
      <Button
        form={form}
        className={`${variantClasses} shadow-xl ${propWidth} select-none rounded-[0.625rem] ${size_height} ${classes}`}
        onClick={!disabled ? onClick : undefined}
        type={isSubmitable ? "submit" : "button"}
        ref={ref}
        disabled={disabled}
      >
        {iconRoute && (
          <span className="inline-flex w-[24px] h-[24px] relative">
            <Image
              src={iconRoute}
              alt="left button icon"
              layout="fill"
              objectFit="cover"
            />
          </span>
        )}
        {iconComponent}
        {text}
        {rightIconRoute && (
          <span className={`inline-flex ${rightIconClass} relative`}>
            <Image
              src={rightIconRoute}
              alt="right button icon"
              layout="fill"
              objectFit="cover"
            />
          </span>
        )}
      </Button>
    ) : (
      <Button
        className={`bg-primary text-white ${propWidth} select-none rounded-[0.625rem] cursor-not-allowed ${size_height} ${
          classes || ""
        }`}
        ref={ref}
        disabled
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {dataLoadingText}
      </Button>
    );
  }
);

MainButton.displayName = "MainButton";

export default MainButton;
