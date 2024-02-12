"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon";
import { LockIcon } from "./LockIcon";
export default function Login() {
  return (
    <Modal hideCloseButton isOpen={true} placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Log in
        </ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            placeholder="Enter your email"
            variant="bordered"
          />
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
          />
          <div className="flex px-1 justify-between">
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onPress={onClose}> */}
          <Button color="primary" className="w-full mb-2">
            Sign in
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
