// CONSTANTS
export const MODULE_NAME = "pf2e-dorako-ui";

// THEMING

// prettier-ignore
export const darkThemeCompatibleCoreFoundryApplications = ["CombatTrackerConfig","InvitationLinks","SupportDetails","ToursManagement","WorldConfig","KeybindingsConfig", "FilePicker", "SettingsConfig", "PermissionConfig", "AVConfig", "DefaultTokenConfig", "FontConfig", "FolderConfig", "RollTableConfig", "PlaylistConfig", "CombatantConfig", "MeasuredTemplateConfig", "DocumentOwnershipConfig", "DocumentSheetConfig", "ModuleManagement", "MacroConfig", "Compendium", "CardsConfig", "WallConfig", "AmbientLightConfig", "AmbientSoundConfig", "TileConfig", "DrawingConfig"];
// prettier-ignore
export const darkThemeCompatiblePf2eApplications = ["CreatureSheetPF2e","NPCSheetPF2e","CharacterSheetPF2e","TokenConfigPF2e", "HomebrewElements", "VariantRulesSettings", "AutomationSettings", "MetagameSettings", "WorldClockSettings", "PersistentDamageDialog", "SceneConfigPF2e"];
// prettier-ignore
export const darkThemeCompatibleModuleApplications = ["PartyOverviewApp","RollPrompt", "SavingThrowApp", "AssignXPApp", "ContestedRollApp", "ActiveTileConfig", "DFChatEditor"];
// prettier-ignore
export const dorakoUiApplications = ["AvatarSettings","MiscSettings","ThemeSettings","UXSettings"]
// prettier-ignore
export const darkThemeIncompatibleApplications = ["HarrowReadingSheet","KingmakerJournalSheet","ClockAddDialog","ImprovedJournalSheet","WindowTabs","Ye","SwadeVehicleSheet","SwadeNPCSheet","JournalSheet","CharacterSheet","Tokenizer","JournalTextTinyMCESheetPF2e","JournalTextPageSheet","AbilityBuilderPopup","AttributeBuilder","TokenActionHUD","CustomHotbar","SceneDarknessAdjuster","EffectsPanel","Notifications", "Pause","TokenHUD","HeadsUpDisplay","Sidebar","HotbarPF2e","SceneNavigation", "SceneControls","PlayerList", "ImagePopout","EnhancedJournal","JournalSheetPF2e"]
// prettier-ignore
export const exclusivelyDarkApplications = ["FABattlemaps", "FADownloader"]

// prettier-ignore
export const baseThemeCoreFoundryApplications = ["ImagePopout","SceneControls", "SidebarTab", "PlayerList", "HeadsUpDisplay", "Notifications", "TokenHUD", "Sidebar","SceneNavigation", "Hotbar"];
// prettier-ignore
export const baseThemePf2eApplications = ["VehicleSheetPF2e","HotbarPF2e", "EffectsPanel", "SceneDarknessAdjuster"]; // "JournalSheetPF2e",
// prettier-ignore
export const baseThemePf2eSheets = ["KingdomSheetPF2e","CreatureSheetPF2e","PartySheetPF2e","SpellPreparationSheet","ItemSheet","NPCSheetPF2e","VehicleSheetPf2e","FamiliarSheetPF2e","HazardSheetPF2e", "CharacterSheetPF2e","LootSheetPF2e"]; //|| "ItemSheet","ActorSheet"

// prettier-ignore
export const baseThemeModuleApplications = ["ControlManager","HUD","ItemPileConfig","PinCushionHUD","CombatCarousel","CommonToolbar","MonksHotbarExpansion","CustomHotbar"];

// prettier-ignore
export const baseThemeApplications = [...baseThemeCoreFoundryApplications,...baseThemePf2eApplications,...baseThemeModuleApplications, ...dorakoUiApplications];
// prettier-ignore
export const darkThemeCompatibleApplications = [...darkThemeCompatibleCoreFoundryApplications, ...darkThemeCompatibleModuleApplications, ...darkThemeCompatiblePf2eApplications, ...dorakoUiApplications]

// prettier-ignore
export const premiumModuleSelector = ".pf2e-ii, .pf2e-woii, .seasonofghosts, .seasonofghosts-wrapper, .skykingstomb-wrapper, .skykingstomb, .stolenfate-wrapper, .stolenfate, .harrow-reading, .harrow, .pf2e-km, .kingdom-app, .swpf-sheet, .swpf-wrapper, .pf2e-av, .pf2e-bb, .gatewalkers-wrapper, .gatewalkers, .outlaws-wrapper, .outlaws, .bloodlords-wrapper, .bloodlords, .kingmaker-wrapper, .kingmaker"; //
// SWPFSheet
// SWPFJournalSheet

// CLASSES
export class Avatar {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.type = "avatar";
  }
}

export class CombatantAvatar extends Avatar {
  constructor(name, image) {
    super(name, image);
    this.type = "combatant";
  }
}

export class ActorAvatar extends Avatar {
  constructor(name, image) {
    super(name, image);
    this.type = "actor";
  }
}

export class TokenAvatar extends Avatar {
  constructor(name, image, scale, isSmall) {
    super(name, image);
    this.type = "token";
    this.scale = scale;
    this.isSmall = isSmall;
  }
}