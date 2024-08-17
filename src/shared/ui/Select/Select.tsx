import React, { ComponentProps, HTMLAttributes, ReactNode } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import CheckIcon from "../../../assets/icons/check.svg?react"
import ArrowDown from "../../../assets/icons/arrow-down.svg?react"
import cls from "./Select.module.css"
import { classNames } from "../../lib/classNames/classNames"
import { SelectOverlay } from "./SelectOverlay"

type SelectProps = ComponentProps<typeof SelectPrimitive.Root> &
  ComponentProps<typeof SelectPrimitive.Content> & {
    placeholderText?: ReactNode
    triggerClassName?: string
    valueClassName?: string
    arrowDownIconClassName?: string
    contentClassName?: string
    portalContainer?: HTMLElement | null
  }

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      children,
      value,
      sideOffset,
      placeholderText,
      triggerClassName,
      valueClassName,
      arrowDownIconClassName,
      contentClassName,
      side,
      position = "popper",
      portalContainer,
      open,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <SelectPrimitive.Root open={open} {...rest}>
        <SelectPrimitive.Trigger
          ref={forwardedRef}
          className={classNames(cls.SelectTrigger, {}, [triggerClassName])}
        >
          <SelectPrimitive.Value
            placeholder={placeholderText}
            className={classNames(cls.SelectValue, {}, [valueClassName])}
          />
          <SelectPrimitive.Icon
            className={classNames(cls.SelectIcon, {}, [arrowDownIconClassName])}
          >
            <ArrowDown viewBox="0 0 24 24" width="24" height="24" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <>
            <SelectOverlay open={!!open} />
            <SelectPrimitive.Content
              side={side}
              sideOffset={sideOffset}
              position={position}
              className={classNames(cls.SelectContent, {}, [contentClassName])}
              onPointerDownOutside={(e) => e.preventDefault()}
            >
              <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

Select.displayName = "Select"

type SelectItemProps = HTMLAttributes<HTMLDivElement> & {
  value: string
  disabled?: boolean
  textValue?: string
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        ref={forwardedRef}
        className={classNames(cls.SelectItem, {}, [className])}
        {...rest}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon viewBox="0 0 24 24" className={cls.CheckIcon} />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  }
)

SelectItem.displayName = "SelectItem"
