/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Completion Sound - System sound played when the timer ends. */
  "completionSoundId": "system-beep" | "unfold-encore-infinitum" | "hero" | "ping" | "glass" | "pop" | "tink" | "basso" | "submarine" | "frog" | "morse" | "sosumi",
  /** Completion Sound Max Seconds - Maximum duration of completion sound in seconds (1-15). */
  "completionSoundMaxSeconds": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `dynamic-pomodoro` command */
  export type DynamicPomodoro = ExtensionPreferences & {}
  /** Preferences accessible in the `start-dynamic-pomodoro` command */
  export type StartDynamicPomodoro = ExtensionPreferences & {}
  /** Preferences accessible in the `stop-dynamic-pomodoro` command */
  export type StopDynamicPomodoro = ExtensionPreferences & {}
  /** Preferences accessible in the `dynamic-pomodoro-menu-bar` command */
  export type DynamicPomodoroMenuBar = ExtensionPreferences & {}
  /** Preferences accessible in the `dynamic-pomodoro-watchdog` command */
  export type DynamicPomodoroWatchdog = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `dynamic-pomodoro` command */
  export type DynamicPomodoro = {}
  /** Arguments passed to the `start-dynamic-pomodoro` command */
  export type StartDynamicPomodoro = {}
  /** Arguments passed to the `stop-dynamic-pomodoro` command */
  export type StopDynamicPomodoro = {}
  /** Arguments passed to the `dynamic-pomodoro-menu-bar` command */
  export type DynamicPomodoroMenuBar = {}
  /** Arguments passed to the `dynamic-pomodoro-watchdog` command */
  export type DynamicPomodoroWatchdog = {}
}

