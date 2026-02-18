export type DynamicPomodoroCopy = {
  infoSectionTitle: string;
  statsRowTitle: string;
  openProgress: string;
  progressScreenTitle: string;
  progressSummarySectionTitle: string;
  progressTrendSectionTitle: string;
  progressStabilitySectionTitle: string;
  progressFocus7dTitle: string;
  progressCompletionRate7dTitle: string;
  progressAverageCycle7dTitle: string;
  progressActiveDays7dTitle: string;
  progressFocusTrendTitle: string;
  progressCompletionTrendTitle: string;
  progressInterruptRateTitle: string;
  progressAdjustmentsPerSessionTitle: string;
  progressNotAvailable: string;
  title: string;
  subtitle: string;
  quickStart15: string;
  quickStart25: string;
  quickStart40: string;
  openGuide: string;
  pomodoroStyleTitle: string;
  pomodoroStyleFlowSubtitle: string;
  pomodoroStyleClassicSubtitle: string;
  chooseStyleSubtitle: string;
  openStyleAndMinutes: string;
  breakReadyTitle: string;
  breakReadyFlowMessage: string;
  breakReadyClassicMessage: string;
  breakReadyExtend5: string;
  breakReadyStopAndReset: string;
  viewerMarkdown: string;
};

const ENGLISH_COPY: DynamicPomodoroCopy = {
  infoSectionTitle: "Details",
  statsRowTitle: "Stats (24h)",
  openProgress: "Open Progress",
  progressScreenTitle: "Progress Metrics",
  progressSummarySectionTitle: "Summary (7d)",
  progressTrendSectionTitle: "Trend vs Previous 7d",
  progressStabilitySectionTitle: "Stability",
  progressFocus7dTitle: "Focus Time (7d)",
  progressCompletionRate7dTitle: "Completion Rate (7d)",
  progressAverageCycle7dTitle: "Average Completed Cycle (7d)",
  progressActiveDays7dTitle: "Active Days (7d)",
  progressFocusTrendTitle: "Focus Trend",
  progressCompletionTrendTitle: "Completion Trend",
  progressInterruptRateTitle: "Interrupt Rate (7d)",
  progressAdjustmentsPerSessionTitle: "Adjustments per Session (7d)",
  progressNotAvailable: "n/a",
  title: "Dynamic Pomodoro Playbook",
  subtitle: "Adaptive cycles: 15 -> 25 -> 40 min.",
  quickStart15: "Quick Start 15",
  quickStart25: "Quick Start 25",
  quickStart40: "Quick Start 40",
  openGuide: "Open Playbook",
  pomodoroStyleTitle: "Focus Mode",
  pomodoroStyleFlowSubtitle: "Cycle end: Extend by 5 min",
  pomodoroStyleClassicSubtitle: "Cycle end: Continue preset",
  chooseStyleSubtitle: "Choose your default focus mode",
  openStyleAndMinutes: "Open mode and duration",
  breakReadyTitle: "Break is ready",
  breakReadyFlowMessage: "In flow? Extend 5 min.",
  breakReadyClassicMessage: "Continue with selected preset.",
  breakReadyExtend5: "Extend 5 Min",
  breakReadyStopAndReset: "Stop and Reset",
  viewerMarkdown: `# This is not just a Pomodoro 🍅

  This is a dynamic focus mode that adapts to you.
  You do not have to force 25 minutes from the start.
  The core rule is simple: honest focus over perfect plans.

  ## Key Facts

  - Stats are always calculated for the rolling last 24 hours: starts, completions, focus time, and completion rate.
  - In Flow mode you can extend focus by 5 minutes at cycle end; in Classic mode it continues with the selected preset.

  ## How to Use (3 Steps)

  1. Start short (for example, 6 minutes) to enter rhythm without resistance.
  2. If focus drops, reduce to 4-5 minutes. That is adaptation, not failure.
  3. If focus is stable, grow gradually to 8, 10, 15+ minutes.

  Rule: adjust minutes to real concentration, not an ideal schedule.`,
};
export function getDynamicPomodoroCopy(
  _language?: string,
): DynamicPomodoroCopy {
  return ENGLISH_COPY;
}
