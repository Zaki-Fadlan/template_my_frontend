import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Link,
  Badge,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function App() {
  const dropdownItems = [
    <DropdownItem key="profile" className="h-14 gap-2" textValue="profile">
      <p className="font-semibold text-2xl">Name</p>
      <p className="font-semibold">Role</p>
    </DropdownItem>,
    ...siteConfig.userMenuItems.map((item, index) => (
      <DropdownItem key={`${item}-${index}`} textValue={item.label}>
        <Link
          color={
            index === 2
              ? "primary"
              : index === siteConfig.userMenuItems.length - 1
              ? "danger"
              : "foreground"
          }
          href="#"
          size="md"
        >
          {item.label}
        </Link>
      </DropdownItem>
    )),
  ];
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          {dropdownItems}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
