import React, { useEffect } from "react";
import { AriaDialogProps } from "@react-types/dialog";
import { AriaOverlayProps } from "@react-aria/overlays";
import { FocusScope, OverlayContainer, useDialog, useModal, useOverlay, usePreventScroll } from "react-aria";
import { useRouter } from "next/router";

import styles from "./modal-dialog.module.scss";
import CloseIcon from "@components/shared/icons/close-icon";
import cx from "classnames";

type ModalDialogProps = {
  children: React.ReactNode;
  maxWidth?: number;
  preventClose?: boolean;
  fullWidth?: boolean;
  darkTheme?: boolean;
} & AriaDialogProps &
  AriaOverlayProps;

function ModalDialog(props: ModalDialogProps) {
  const { children, onClose, preventClose = false, fullWidth = false, darkTheme = false } = props;
  const router = useRouter();
  const handleCloseButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose ? onClose() : false;
  };

  const ref = React.useRef(null);
  const { overlayProps, underlayProps } = useOverlay({ ...props, isKeyboardDismissDisabled: preventClose }, ref);

  const { modalProps } = useModal();
  const { dialogProps } = useDialog(props, ref);

  const customStyles = {
    maxWidth: props.maxWidth,
  };

  usePreventScroll();

  useEffect(() => {
    const handleRouteChange = () => {
      if (onClose) onClose();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, onClose]);

  return (
    <div className={cx(styles.overlay, { [styles.darkTheme]: darkTheme })} {...underlayProps}>
      <FocusScope contain={false} restoreFocus={false} autoFocus={false}>
        <div
          className={cx(styles.modal, { [styles.fullWidth]: fullWidth, [styles.darkTheme]: darkTheme })}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          style={customStyles}
        >
          {preventClose ? null : (
            <button
              className={cx(styles.closeButton, { [styles.darkTheme]: darkTheme })}
              onClick={handleCloseButtonClick}
            >
              <CloseIcon />
            </button>
          )}

          <div className={styles.content}>{children}</div>
        </div>
      </FocusScope>
    </div>
  );
}

ModalDialog.Overlay = OverlayContainer;

export { ModalDialog };
