
<img width="512" height="512" alt="icon" src="https://github.com/user-attachments/assets/d4eaef70-ca0b-40be-8db6-3027593aef43" />


# Dynamic Pomodoro for Raycast

This is not just a Pomodoro 🍅

This is a dynamic focus mode that adapts to you. You do not have to force 25 minutes from the start. The core rule is simple: honest focus over perfect plans.
Key Facts
	• Stats are always calculated for the rolling last 24 hours: starts, completions, focus time, and completion rate. 
	• In Flow mode you can extend focus by 5 minutes at cycle end; in Classic mode it continues with the selected preset.
	
How to Use (3 Steps)
1. Start short (for example, 6 minutes) to enter rhythm without resistance. 	
2. If focus drops, reduce to 4-5 minutes. That is adaptation, not failure. 	
3. If focus is stable, grow gradually to 8, 10, 15+ minutes.
Rule: adjust minutes to real concentration, not an ideal schedule.

![demo-v1-Social](https://github.com/user-attachments/assets/9e2514b1-baeb-4809-8472-3712724acaee)

## Run locally

1. Install dependencies:
   `npm install`
2. Start development mode:
   `npm run dev`
3. In Raycast, run command:
   `Dynamic Pomodoro`
4. Optionally run:
   `Dynamic Pomodoro Menu Bar` to keep elapsed time visible in macOS menu bar.

## Behavior

- Updates every second while running.
- Persists state in local storage.
- Restores timer state when command opens again.
- Includes a menu bar command that shows Dynamic Pomodoro status text.
- Includes an internal background sync command that checks completion while commands are inactive.
- Minutes are editable only (1..60) with arrow shortcuts on the timer row.
- `→/←` changes by `1` minute, `Cmd+→/Cmd+←` changes by `5` minutes (paused/stopped only).
- Completion sound duration is capped (default `5s`, configurable `1..15s` in preferences).
- Completion sound is rate-limited: if the previous sound played less than `10s` ago, sound is skipped while visual notifications still appear.
