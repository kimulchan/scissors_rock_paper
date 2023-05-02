import { SRP, SRPIcon } from "@packages/types/common";

export const SRPSelector = {
  [SRPIcon["✊"]]: SRP.ROCK,
  [SRPIcon["✌️"]]: SRP.SCISSORS,
  [SRPIcon["✋"]]: SRP.PAPER,
  [SRPIcon["🚫"]]: SRP.NONE,
} as const;

export const SRPIconSelector = {
  [SRP.ROCK]: SRPIcon["✊"],
  [SRP.SCISSORS]: SRPIcon["✌️"],
  [SRP.PAPER]: SRPIcon["✋"],
  [SRP.NONE]: SRPIcon["🚫"],
} as const;
