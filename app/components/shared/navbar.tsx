import * as React from "react";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link, NavLink } from "react-router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Listings", href: "listings" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed md:px-10 px-4 left-0 top-0 z-50  w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="inline-block h-6 w-6 rounded-full bg-primary"></span>
            <span className="text-xl font-bold">SAHA AGENCY</span>
          </NavLink>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-4 lg:gap-6">
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <NavLink to={item.href}>{item.name}</NavLink>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="md:h-10 md:w-10 h-8 w-8 cursor-pointer">
                  <AvatarImage
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                    alt="User"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <NavLink to="/" className="flex items-center space-x-2 pl-4">
                  <span className="inline-block h-6 w-6 rounded-full bg-primary"></span>
                  <span className="text-xl font-bold">SAHA AGENCY</span>
                </NavLink>
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <NavLink to={item.href}>{item.name}</NavLink>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
