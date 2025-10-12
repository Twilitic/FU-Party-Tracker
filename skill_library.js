// --- Fabula Ultima Master Skill & Spell Library ---
// This file acts as the central database for all official skills and spells.
// - 'type': 'passive' for automatic effects, 'active' for selectable skills, 'spell' for magic.
// - 'effects' array uses the same structure as your custom ability builder.
// - 'condition': A special property for passive effects (e.g., 'crisis')

const FU_SKILL_LIBRARY = {
    classes: {
        "Darkblade": {
            skills: [
                {
                    name: "Agony",
                    maxLvl: 5,
                    type: 'active',
                    description: "Spend HP to deal extra dark damage on your next melee attack this turn.",
                    effects: [] // Note: This requires more complex turn-based state tracking not yet in the app. Will be a 'misc' effect for now.
                },
                {
                    name: "Dark Blood",
                    maxLvl: 1,
                    type: 'passive',
                    description: "While in Crisis, you gain Resistance to dark and poison damage.",
                    effects: [
                        { type: 'addAffinity', affinity: 'Resistance', damageType: 'Dark', condition: 'crisis' },
                        { type: 'addAffinity', affinity: 'Resistance', damageType: 'Poison', condition: 'crisis' },
                    ]
                },
                {
                    name: "Heart of Darkness",
                    maxLvl: 1,
                    type: 'passive',
                    description: "When you are in Crisis, your dark damage ignores Resistances.",
                    effects: [] // Game logic for this will be more complex.
                },
                {
                    name: "Painful Lessons",
                    maxLvl: 3,
                    type: 'passive',
                    description: "Each time you are reduced to 0 HP and surrender, you gain an XP bonus.",
                    effects: [] // Non-combat effect.
                },
                {
                    name: "Shadow Strike",
                    maxLvl: 5,
                    type: 'active',
                    costType: 'HP',
                    costValue: 10,
                    targeting: '1 Target',
                    effect: 'Perform a melee attack that deals extra dark damage.',
                    effects: [
                        // This would be implemented as a custom action in the future.
                        { type: 'misc', description: 'Perform a special melee attack dealing dark damage.' }
                    ]
                }
            ]
        },
        "Elementalist": {
            skills: [
                {
                    name: "Cataclysm",
                    maxLvl: 3,
                    type: 'passive',
                    description: "Your elemental spells that can target multiple creatures can target one additional creature.",
                    effects: [] // Non-mechanical for now, reminder text.
                },
                {
                    name: "Elemental Magic",
                    maxLvl: 10,
                    type: 'passive',
                    description: "Learn spells from the Elementalist list.",
                    effects: [] // This skill grants spells, handled by import logic.
                },
                {
                    name: "Magic Artillery",
                    maxLvl: 3,
                    type: 'passive',
                    description: "Your offensive elemental spells deal extra damage.",
                    effects: [] // This will be handled in damage calculation logic.
                },
                {
                    name: "Ritual Elementalism",
                    maxLvl: 1,
                    type: 'passive',
                    description: "You can perform elemental rituals.",
                    effects: [] // Non-combat effect.
                },
                {
                    name: "Spellblade",
                    maxLvl: 4,
                    type: 'passive',
                    description: "When you cast a spell, you may deal extra elemental damage on your next melee attack.",
                    effects: [] // Complex turn-based state.
                }
            ]
        },
        "Entropist": {
            skills: [
                {
                    name: "Absorb MP",
                    maxLvl: 5,
                    type: 'passive',
                    description: "When you are targeted by an offensive spell, you recover some MP.",
                    effects: [] // Complex trigger.
                },
                {
                    name: "Entropic Magic",
                    maxLvl: 10,
                    type: 'passive',
                    description: "Learn spells from the Entropist list.",
                    effects: [] // Grants spells.
                },
                {
                    name: "Lucky Seven",
                    maxLvl: 1,
                    type: 'passive',
                    description: "If the result of a check is exactly 7, it's a critical success.",
                    effects: [] // Core mechanic change.
                },
                {
                    name: "Ritual Entropism",
                    maxLvl: 1,
                    type: 'passive',
                    description: "You can perform entropic rituals.",
                    effects: [] // Non-combat.
                },
                {
                    name: "Stolen Time",
                    maxLvl: 4,
                    type: 'passive',
                    description: "When an enemy takes their turn, you have a chance to act immediately after.",
                    effects: [] // Complex initiative trigger.
                }
            ]
        },
        "Fury": {
            skills: [
                {
                    name: "Adrenaline",
                    maxLvl: 5,
                    type: 'passive',
                    description: "While in Crisis, you deal extra damage.",
                    effects: [
                        { type: 'statBonus', stat: 'damage', value: 5, condition: 'crisis' } // Placeholder value
                    ]
                },
                {
                    name: "Frenzy",
                    maxLvl: 1,
                    type: 'active',
                    costType: 'None',
                    costValue: 0,
                    targeting: 'Self',
                    effect: 'Enter the enraged status for the rest of the scene to gain benefits.',
                    effects: [
                        { type: 'inflictStatus', status: 'enraged' },
                        { type: 'misc', description: 'Gains other benefits while enraged. Lasts until end of scene.', duration: 'Scene' }
                    ]
                },
                {
                    name: "Indomitable Spirit",
                    maxLvl: 4,
                    type: 'passive',
                    description: "You can endure an attack that would reduce you to 0 HP once per scene.",
                    effects: [] // Complex health trigger.
                },
                {
                    name: "Provoke",
                    maxLvl: 5,
                    type: 'active',
                    description: "Force an enemy to target you.",
                    effects: [
                        { type: 'misc', description: 'Forces one target to direct attacks at you.' }
                    ]
                },
                {
                    name: "Withstand",
                    maxLvl: 5,
                    type: 'passive',
                    description: "When you use the Guard action, you reduce damage taken even further.",
                    effects: [] // Modifies Guard action.
                }
            ]
        },
        "Guardian": {
            skills: [
                {
                    name: "Bodyguard",
                    maxLvl: 1,
                    type: 'active',
                    description: "When an ally is hit by an attack, you can take the damage for them.",
                    effects: [] // Reaction-based, complex trigger.
                },
                {
                    name: "Defensive Mastery",
                    maxLvl: 5,
                    type: 'passive',
                    description: "Increases your DEF and M.DEF.",
                    effects: [
                        { type: 'statBonus', stat: 'def', value: 2 }, // Placeholder value per level
                        { type: 'statBonus', stat: 'mdef', value: 2 }  // Placeholder value per level
                    ]
                },
                {
                    name: "Dual Shieldbearer",
                    maxLvl: 1,
                    type: 'passive',
                    description: "You can equip a shield in your main hand instead of a weapon.",
                    effects: [] // Equipment rule change.
                },
                {
                    name: "Fortress",
                    maxLvl: 5,
                    type: 'passive',
                    description: "When you use the Guard action, allies near you gain bonus DEF and M.DEF.",
                    effects: [] // Modifies Guard action.
                },
                {
                    name: "Protect",
                    maxLvl: 1,
                    type: 'active',
                    description: "Take the Guard action as a free action at the start of your turn.",
                    effects: [] // Initiative phase effect.
                }
            ]
        }
    },
    spells: {
        // Elementalist Spells
        "Elemental Shroud": { name: "Elemental Shroud", costType: "MP", costValue: 5, targeting: "Up to three creatures", effect: "Targets gain Resistance to a chosen element (air, bolt, earth, fire, or ice).", type: 'spell', effects: [{ type: 'misc', description: 'Grants Resistance to one chosen element.', duration: 'Scene'}] },
        "Elemental Weapon": { name: "Elemental Weapon", costType: "MP", costValue: 10, targeting: "One weapon", effect: "Imbues a weapon with elemental damage.", type: 'spell', effects: [{ type: 'misc', description: 'Changes weapon damage to a chosen element.', duration: 'Scene'}] },
        "Flare": { name: "Flare", costType: "MP", costValue: 20, targeting: "1 Target", effect: "Deals HR+25 fire damage, ignores Resistance.", type: 'spell', effects: [{ type: 'damage', value: 'HR+25', damageType: 'Fire', calculation: 'manual', ignoresResistance: true }] },
        "Fulgur": { name: "Fulgur", costType: "MP", costValue: 10, targeting: "Up to three creatures", effect: "Deals HR+15 bolt damage. Opportunity: inflict dazed.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Bolt', calculation: 'manual'}] },
        "Glacies": { name: "Glacies", costType: "MP", costValue: 10, targeting: "Up to three creatures", effect: "Deals HR+15 ice damage. Opportunity: inflict slow.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Ice', calculation: 'manual'}] },
        "Iceberg": { name: "Iceberg", costType: "MP", costValue: 20, targeting: "1 Target", effect: "Deals HR+25 ice damage, ignores Resistance.", type: 'spell', effects: [{ type: 'damage', value: 'HR+25', damageType: 'Ice', calculation: 'manual', ignoresResistance: true }] },
        "Ignis": { name: "Ignis", costType: "MP", costValue: 10, targeting: "Up to three creatures", effect: "Deals HR+15 fire damage. Opportunity: inflict shaken.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Fire', calculation: 'manual'}] },
        "Soaring Strike": { name: "Soaring Strike", costType: "MP", costValue: 10, targeting: "Self", effect: "Perform a free melee attack that can hit ranged/flying targets.", type: 'spell', effects: [{ type: 'misc', description: 'Perform a free melee attack with special properties.'}] },
        "Terra": { name: "Terra", costType: "MP", costValue: 10, targeting: "Up to three creatures", effect: "Deals HR+15 earth damage to non-flying targets.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Earth', calculation: 'manual'}] },
        "Thunderbolt": { name: "Thunderbolt", costType: "MP", costValue: 20, targeting: "1 Target", effect: "Deals HR+25 bolt damage, ignores Resistance.", type: 'spell', effects: [{ type: 'damage', value: 'HR+25', damageType: 'Bolt', calculation: 'manual', ignoresResistance: true }] },
        "Ventus": { name: "Ventus", costType: "MP", costValue: 10, targeting: "Up to three creatures", effect: "Deals HR+15 air damage. Opportunity: ground flying targets.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Air', calculation: 'manual'}] },
        "Vortex": { name: "Vortex", costType: "MP", costValue: 10, targeting: "Self", effect: "Gain +2 Defense against ranged attacks.", type: 'spell', effects: [{ type: 'misc', description: '+2 DEF vs ranged attacks.', duration: 'Scene'}] },
        // Entropist Spells
        "Acceleration": { name: "Acceleration", costType: "MP", costValue: 20, targeting: "1 Target", effect: "Target performs one extra action on their next two turns.", type: 'spell', effects: [{ type: 'misc', description: 'Target gains 1 extra action on their next 2 turns.', duration: 'Scene'}] },
        "Anomaly": { name: "Anomaly", costType: "MP", costValue: 20, targeting: "1 Target", effect: "Target's Immunities/Absorptions become Vulnerabilities for one hit.", type: 'spell', effects: [{ type: 'misc', description: 'Inverts target\'s best resistances into weaknesses.', duration: 'Scene'}] },
        "Dark Weapon": { name: "Dark Weapon", costType: "MP", costValue: 10, targeting: "One equipped weapon", effect: "Imbues a weapon with dark damage.", type: 'spell', effects: [{ type: 'misc', description: 'Changes weapon damage to Dark.', duration: 'Scene'}] },
        "Dispel": { name: "Dispel", costType: "MP", costValue: 10, targeting: "1 Target", effect: "Removes all Scene-duration spell effects from the target.", type: 'spell', effects: [{ type: 'dispel', targetEffects: 'all'}] },
        "Divination": { name: "Divination", costType: "MP", costValue: 10, targeting: "Self", effect: "Twice per scene, force a creature to reroll a check.", type: 'spell', effects: [{ type: 'misc', description: 'Force 2 rerolls this scene.', duration: 'Scene'}] },
        "Drain Spirit": { name: "Drain Spirit", costType: "MP", costValue: 5, targeting: "1 Target", effect: "Target loses HR+15 MP, you recover half.", type: 'spell', effects: [{ type: 'resourceLoss', stat: 'MP', value: 'HR+15' }, { type: 'healing', stat: 'MP', value: '(HR+15)/2' }] },
        "Drain Vigor": { name: "Drain Vigor", costType: "MP", costValue: 10, targeting: "1 Target", effect: "Target suffers HR+15 dark damage, you recover half.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Dark', calculation: 'manual' }, { type: 'healing', stat: 'HP', value: '(HR+15)/2'}] },
        "Mirror": { name: "Mirror", costType: "MP", costValue: 10, targeting: "1 Target", effect: "The next offensive spell cast on the target is reflected to its caster.", type: 'spell', effects: [{ type: 'misc', description: 'Reflects one offensive spell.', duration: 'Scene'}] },
        "Omega": { name: "Omega", costType: "MP", costValue: 20, targeting: "1 Target", effect: "Target loses HP equal to 20 + half their level.", type: 'spell', effects: [{ type: 'damage', value: '20 + (TARGET_LEVEL/2)', damageType: 'Dark', calculation: 'auto'}] },
        "Stop": { name: "Stop", costType: "MP", costValue: 10, targeting: "1 Target", effect: "Target performs one fewer action on their next turn.", type: 'spell', effects: [{ type: 'actionDenial', action: 'any', duration: 'Next Turn'}] },
        "Umbra": { name: "Umbra", costType: "MP", costValue: 10, targeting: "Up to three creatures", effect: "Deals HR+15 dark damage. Opportunity: inflict weak.", type: 'spell', effects: [{ type: 'damage', value: 'HR+15', damageType: 'Dark', calculation: 'manual'}] },
        "Gamble": { name: "Gamble", costType: "MP", costValue: 10, targeting: "Special", effect: "Roll on a random effects table.", type: 'spell', effects: [{ type: 'misc', description: 'Roll on a random effects table.'}] }
    }
};

