"use client";
import { usePathname } from "next/navigation";

import {
  Link,
  link as linkStyles,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Accordion,
  Avatar,
  AccordionItem,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Dropdown,
} from "@nextui-org/react";

import UserDropdown from "@/components/users/UserDropdown";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

export const Navbar = () => {
  const pathname = usePathname();
  if (pathname != "/auth/login") {
    return (
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo />
              <p className="font-bold text-inherit">Navbar</p>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden sm:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item, index) => (
              <NavbarItem key={`${item.label}-${index}`}>
                {item.submenu ? (
                  <ul>
                    <Dropdown>
                      <NavbarItem>
                        <DropdownTrigger>
                          <h1
                            className={clsx(
                              linkStyles({ color: `foreground` }),
                              "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer gap-x-1"
                            )}
                          >
                            {item.label} <MdOutlineArrowDropDownCircle />
                          </h1>
                        </DropdownTrigger>
                      </NavbarItem>
                      <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                          base: "gap-4",
                        }}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <DropdownItem
                            key={`${subItem.label}-${subIndex}`}
                            // description={subItem.description}
                            // startContent={icons[subItem.icon]}
                          >
                            {subItem.label}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </ul>
                ) : (
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                )}
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <UserDropdown />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <Accordion selectionMode="multiple">
            <AccordionItem
              key="1"
              aria-label="Username"
              startContent={
                <Avatar
                  isBordered
                  color="default"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              }
              subtitle="Role"
              title="Username"
            >
              {siteConfig.userMenuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link href="#" size="md">
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </AccordionItem>
          </Accordion>
          {/* Mobile */}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                {item.submenu ? (
                  <ul>
                    <Dropdown>
                      <NavbarItem>
                        <DropdownTrigger>
                          <h1
                            className={clsx(
                              linkStyles({ color: `foreground` }),
                              "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
                            )}
                          >
                            {item.label}
                          </h1>
                        </DropdownTrigger>
                      </NavbarItem>
                      <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                          base: "gap-4",
                        }}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <DropdownItem
                            key={`${subItem.label}-${subIndex}`}
                            // description={subItem.description}
                            // startContent={icons[subItem.icon]}
                          >
                            {subItem.label}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </ul>
                ) : (
                  <Link color="foreground" href={item.href} size="lg">
                    {item.label}
                  </Link>
                )}
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    );
  }
};
