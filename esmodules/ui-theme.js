import {
  foundry2RestrictedApplications,
  baseThemeApplications,
  baseThemePf2eSheets,
  MODULE_NAME,
  premiumModuleSelector,
} from "./consts.js";
import { isPremiumApplication } from "./premium-module-hooks.js";

const dataTheme = "foundry2";

Hooks.on("renderSvelteApplication", (app, html, data) => {
  const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
  if (theme !== "foundry2-theme") return;
  // app.element[0].classList.add("foundry2");
  app.element[0].dataset.dorakoUiTheme = dataTheme;
});

for (const appName of [...baseThemeApplications]) {
  Hooks.on("render" + appName, (app, html, data) => {
    if (app.constructor.name.startsWith("SWPF")) return; // SWPFCompendiumTOC, SWPFSheet
    const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
    if (theme !== "foundry2-theme") return;
    const excludeString =
      game.settings.get("pf2e-dorako-ui", "customization.excluded-applications") + ", VehicleSheetPF2e, HUD";
    const excludeList = excludeString.split(/[\s,]+/);
    if (excludeList.includes(app.constructor.name)) {
      console.debug(
        `${MODULE_NAME} | render${app.constructor.name} | is included in excluded applications string ${excludeString} => do not add .foundry2`
      );
      return;
    }
    console.debug(`${MODULE_NAME} | baseThemeApplications | render${app.constructor.name} => add .foundry2`);
    // html.addClass("foundry2");
    app.element[0].dataset.dorakoUiTheme = dataTheme;
  });
}

Hooks.on("renderApplication", (app, html, data) => {
  let html0 = html[0];
  if (html0.classList.contains("editable")) return;
  if (!html0.classList.contains("window-app")) return;
  if (isPremiumApplication(app, html, data, app.constructor.name)) return;
  const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
  if (theme !== "foundry2-theme") {
    return;
  }
  const excludeString =
    game.settings.get("pf2e-dorako-ui", "customization.excluded-applications") +
    ", EnhancedJournal" +
    ", SceneActorsLayer";
  const excludeList = excludeString.split(/[\s,]+/);
  if (excludeList.includes(app.constructor.name)) {
    console.debug(
      `${MODULE_NAME} | render${app.constructor.name} | is included in excluded applications string ${excludeString} => do not add .foundry2`
    );
    return;
  }

  const fakeDialogPatterns = ["popup", "dialog"];
  for (const fakeDialogPattern of [...fakeDialogPatterns]) {
    if (app.constructor.name.toLowerCase().includes(fakeDialogPattern)) {
      console.debug(
        `${MODULE_NAME} | render${app.constructor.name} | constructor includes '${fakeDialogPattern}' => add .dialog`
      );
      html.addClass("dialog");
    }
  }
  // html.addClass("foundry2");
  app.element[0].dataset.dorakoUiTheme = dataTheme;
  //   app.options?.classes?.push("foundry2");
  html.find("form button[type='submit']").addClass("bright");
  html.find(".item-controls button[data-action='apply']").addClass("bright");
  html.find("form button[data-action='save']").addClass("bright");
  // html.find("nav.sheet-tabs .item").addClass("button");
});

Hooks.on("renderDialog", (app, html, data) => {
  const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
  if (theme !== "foundry2-theme") {
    return;
  }
  console.debug(`${MODULE_NAME} | render${app.constructor.name} | pushing .foundry2 class option`);
  // html.addClass("foundry2");
  app.element[0].dataset.dorakoUiTheme = dataTheme;
});

Hooks.on("renderItemSheet", (app, html, data) => {
  const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
  if (theme !== "foundry2-theme") {
    return;
  }
  //   app.options?.classes?.push("foundry2");
  // html.addClass("foundry2");
  app.element[0].dataset.dorakoUiTheme = dataTheme;
  html.find("form > nav a").addClass("button");
});

Hooks.on("renderTokenActionHud", (app, html, data) => {
  const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");

  const excludeString = game.settings.get("pf2e-dorako-ui", "customization.excluded-applications");
  const excludeList = excludeString.split(/[\s,]+/);
  if (excludeList.includes("TokenActionHud")) {
    console.debug(
      `${MODULE_NAME} | render${app.constructor.name} | is included in excluded applications string ${excludeString} => do not add .foundry2`
    );
    return;
  }
  if (theme !== "foundry2-theme") {
    app.element[0].dataset.dorakoUiTheme = "crb-dark";
    return;
  }
  // html.attr("data-theme", "foundry2");
  app.element[0].dataset.dorakoUiTheme = dataTheme;
});

Hooks.on("renderTokenBar", (app, html, data) => {
  const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
  if (theme !== "foundry2-theme") {
    html.attr("data-theme", "dorako-ui");
    return;
  }
  const excludeString = game.settings.get("pf2e-dorako-ui", "customization.excluded-applications");
  const excludeList = excludeString.split(/[\s,]+/);
  if (excludeList.includes("TokenBar")) {
    console.debug(
      `${MODULE_NAME} | render${app.constructor.name} | is included in excluded applications string ${excludeString} => do not add .foundry2`
    );
    return;
  }
  // html.attr("data-theme", "foundry2");
  app.element[0].dataset.dorakoUiTheme = dataTheme;
});

for (const appName of [...baseThemePf2eSheets]) {
  Hooks.on("render" + appName, (app, html, data) => {
    const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
    if (theme !== "foundry2-theme") return;
    if (foundry2RestrictedApplications.includes(appName)) return;
    let html0 = html[0];
    if (!html0.classList.contains("window-app")) return;
    console.debug(
      `${MODULE_NAME} | render${app.constructor.name} | is PF2e .window-app "Application" => add .foundry2`
    );
    // html.addClass("foundry2");
    app.element[0].dataset.dorakoUiTheme = dataTheme;
  });
}

for (const appName of [...foundry2RestrictedApplications]) {
  Hooks.on("render" + appName, (app, html, data) => {
    const theme = game.settings.get("pf2e-dorako-ui", "theme.application-theme");
    if (theme !== "foundry2-theme") return;
    const excludeString = game.settings.get("pf2e-dorako-ui", "customization.excluded-applications");
    const excludeList = excludeString.split(/[\s,]+/);
    if (excludeList.includes(app.constructor.name)) {
      console.debug(
        `${MODULE_NAME} | render${app.constructor.name} | is included in excluded applications string ${excludeString} => do not add .foundry2-restricted`
      );
      return;
    }
    console.debug(`${MODULE_NAME} | render${app.constructor.name} | theme: ${theme} => add .foundry2-restricted`);
    html.addClass("foundry2-restricted");
  });
}