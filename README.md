Made with the assistance of Gemini AI.

Fabula Ultima Party Tracker - Feature Guide (v4.4)
This document outlines the complete feature set of the Fabula Ultima Party Tracker. It can be used as a user guide or as a checklist for regression testing.

1. Core Functionality & Display
Party Overview: The main screen displays four character status panels and their corresponding command menus, providing an at-a-glance view of the entire party.

Responsive Design: The layout automatically adjusts for optimal viewing on desktop, tablet, and mobile devices.

JRPG Aesthetic: The interface is styled to resemble a classic JRPG, using a retro-inspired, readable font ("Share Tech Mono"), pixelated borders, and a classic blue window theme.

Sound Effects: User interactions such as navigating menus, confirming actions, and encountering errors are accompanied by thematic sound effects powered by Tone.js.

2. Character Status Panels
Resource Tracking: Each character has progress bars for HP, MP, and IP, showing current and maximum values.

The HP bar visually supports temporary hit points by extending beyond 100%.

MP and IP bars are capped at 100% visually, even if the underlying value is higher.

Crisis State: When a character's HP is at or below 50%, their HP bar turns red, and their portrait gains a flashing red animation to indicate danger.

Quick Stats: Defense (DEF) and Magic Defense (M.DEF) are displayed for quick reference.

Attribute Dice: Displays the current die for each of the four main attributes (DEX, INS, MIG, WLP).

Status Effects: Icons for all major status effects (Slow, Dazed, Weak, Shaken, Poisoned, Enraged) are present.

Clicking an icon toggles the status on or off.

Active statuses are highlighted with a distinct color.

Attribute dice automatically downgrade and turn red when affected by a relevant status.

Quick Stat Adjustment: Clicking on any of the HP, MP, or IP bars opens a small, centered pop-up allowing you to quickly add or subtract a value from the current total.

3. Command & Skill System
Navigable Menus: Each character has a command menu that can be navigated to access nested categories of skills and items.

Breadcrumb Navigation: The header of each command menu shows the current navigation path (e.g., Hero 1 > Magic).

Scrolling Skill Names: Skills with names too long to fit in the menu will automatically scroll horizontally on hover for full readability.

Color-Coded Costs: Skill and item costs are color-coded in the command menu for quick identification:

HP: Red

MP: Blue

IP: Orange

Detailed Skill Viewer: Clicking a skill or item opens a modal window displaying all its properties, including:

Cost, Target, Duration, Check, Damage, and Type.

Fields for "Check" and "Type" are hidden if they are set to "None."

The four preset items ("Remedy", "Elixir", "Tonic", "Magic Tent") have a simplified view that hides irrelevant fields.

4. Edit Mode & Customization
Global Edit Mode: A main "Edit" button toggles the application into an editing state.

Comprehensive Character Editor: In Edit Mode, a button appears on each character's command menu to open a full-screen character editor with two main panels.

Left Panel (Character Stats):

Upload custom character portraits (images are resized and optimized).

Edit character name.

Edit all current/max stats (HP, MP, IP, DEF, M.DEF).

Set attribute dice (d6-d12).

Customize UI colors for the character's Name, Categories, and Skills.

Import/Export individual character data as a .json file.

Right Panel (Command Editor):

Drag-and-Drop Reorganization: All skills and categories (except protected ones) can be dragged and dropped to reorder them or move them between categories. A yellow line/highlight indicates the drop location.

Collapsible Categories: Categories can be collapsed [+] or expanded [-] to easily manage long command lists. The collapsed state is saved.

Add/Edit/Delete: Create new skills, subcategories, or top-level categories. Edit any existing item.

Deletion Confirmation: A confirmation prompt appears before deleting any skill or category, warning the user if a category contains other items.

Protected Items: The core "Items" category and the four preset items ("Remedy," "Elixir," "Tonic," "Magic Tent") are locked.

They are displayed in gray to indicate they are locked.

They cannot be dragged, moved, or deleted.

Specialized Preset Item Editor: Editing a preset item opens a simplified modal that only allows changes to its Cost, Healing values, and Effect description.

Full Skill Editor: For all other skills, a wide, two-column editor modal appears, allowing for full customization of all properties (healing, cost, targeting, check, damage, etc.).

5. System & Data Management
System Menu: Accessible via a "System" button, this menu provides global settings and actions.

Custom Background: Set a custom background image for the entire application by providing a URL.

Party-Wide Actions:

Magic Tent: Fully restores HP/MP and cures all statuses for the entire party.

Restore All IP: Instantly refills all characters' IP to their maximum.

Audio Controls: Adjust the application volume with a slider and mute/unmute all sounds.

Font Size Adjustment: Change the global font size between four presets (S, M, L, XL) for better readability.

Data Portability:

Export Data: Save the entire party's data to a single .json file.

Import Data: Load a previously exported party data file, overwriting the current state.

Reset Data: A button (with confirmation) is available to completely wipe all saved data from the browser and reset the application to its default state.

Firebase: Now has the ability to be used online for real time changes with friends~ :D
