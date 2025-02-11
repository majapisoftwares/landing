import Menu from "../Menu/Menu";
import Button from "../Button";
export default function ConfirmationButton({ label, confirm, confirmation, onConfirm, loading, className, cancel = "Cancel", position, buttonClassName, buttonProps, menuProps, }) {
    return (<Menu position={position} button={<Button color="error" loading={loading} className={buttonClassName} {...buttonProps}>
          {label}
        </Button>} className={className} {...menuProps}>
      <Menu.Label>{confirmation}</Menu.Label>
      <Menu.Item className="!text-red-500" onClick={onConfirm}>
        {confirm || label}
      </Menu.Item>
      <Menu.Item>{cancel}</Menu.Item>
    </Menu>);
}
