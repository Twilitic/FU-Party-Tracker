Made in collaboration/with the heavy assistance of Gemini AI.

Fabula Ultima Party Tracker - Feature Guide
This guide provides an overview of the features and functionality of the Fabula Ultima Party Tracker, a web-based application designed to manage your TTRPG party with a classic JRPG aesthetic. The tracker can be used collaboratively online or as a solo offline tool.

1. Getting Started: Online & Offline Modes
When you first launch the tracker, you are presented with three options:

Create New Online Party: This option generates a new, shareable Party ID (e.g., azure-golem-75). A new party is created in the database, and you are automatically connected. Share this ID with your friends so they can join your session.

Join Online Party: If you have a Party ID, enter it here to connect to an existing collaborative session. The tracker will remember the last session you joined for quick re-entry later.

Use Offline Mode: This allows you to use the tracker by yourself without an internet connection. All data is saved directly to your browser. A distinct orange banner will appear at the top of the screen to indicate you are in offline mode.

2. The Main Interface
The main screen is divided into two key sections, designed for at-a-glance information and quick actions.

Status Panels
Each of the four party members has a dedicated status panel displaying their vital information:

Core Stats: HP, MP, and IP are shown with dynamic progress bars. The HP bar will turn red to indicate a character is in "Crisis" (at or below 50% health).

Attributes & Defense: Displays the character's DEF, M.DEF, and current attribute dice (DEX, INS, MIG, WLP).

Status Effects: A row of icons allows you to easily toggle status effects like Slow, Weak, Poisoned, and more. When a status is active, it will automatically adjust the character's effective attribute dice.

Interactivity: Clicking a stat bar opens a quick-calculator to add or subtract from its value. Clicking a character's portrait opens an info screen.

Command Menus
Below each status panel is a corresponding command menu, styled after classic JRPG interfaces:

Hierarchical Navigation: Navigate through categories like "Skills," "Magic," and "Items" to find specific abilities.

Breadcrumbs: The menu header shows your current path and allows you to quickly jump back to the root of the menu.

Long Names: Skill names that are too long to fit will automatically scroll when you hover over them.

3. Character & Party Management
The tracker provides powerful tools for customizing your party and managing your data.

Edit Mode & The Character Editor
Clicking the "Edit" button on the main screen activates Edit Mode. This adds an "..Edit Char" option to the root of each command menu.

The Character Editor is a full-screen menu where you can:

Change a character's name, stats (current and max), DEF, M.DEF, and attribute dice.

Upload a custom character portrait from your device.

Customize the display colors for the character's name, skill categories, and skill names.

Import/Export individual character data to a .json file.

The Command Editor
Within the Character Editor, you can fully customize a character's list of commands.

Add/Edit Skills: Create new skills and categories or edit existing ones. Define properties such as name, cost (HP, MP, IP), effect description, damage, healing, targeting, and more.

Drag & Drop: Easily reorganize skills and move them between categories by dragging and dropping them within the editor.

System Menu
The "System" button opens a global menu with party-wide tools:

Session Info: Displays the current Party ID and allows you to copy it to your clipboard.

Party Data: Import or export the entire party's data as a single .json file, perfect for backups or moving an offline game online.

Global Actions: Use party-wide abilities like "Magic Tent" (full rest for everyone) or "Restore All IP."

UI Settings: Adjust the application's font size, set a custom background URL, and control the sound effect volume or mute it entirely.

Leave Session: Disconnect from the current session and return to the main startup screen.
