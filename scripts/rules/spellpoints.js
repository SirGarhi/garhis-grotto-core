Hooks.on("tidy5e-sheet.renderActorSheet", (app, html, data, force) => {
	if (!data.editable) return;
	if (data.actor.type != "character") return;
	console.warn("GG | Tidy Render Hook");
	console.warn(html);
	console.warn(data);
	// data.actor.flags.deyzeria ||= {};
	// data.actor.flags.deyzeria.luck ||= 0;

	// html.querySelector(".skills-list-container").insertAdjacentHTML("beforebegin",
	// `<div data-tidy-render-scheme="handlebars" class="flexrow"
	// style="font-size: 1.25rem; border: 2px solid var(--t5e-faint-color); border-radius: 3px; font-family: var(--t5e-title-font-family);">
	//   <button id="luckbutton" type="button" class="transparent-button rollable" style="flex: 0 0 80px; font-size: 1.25rem !important;" title="Luck" actor-id="${data.actor.id}" luck-stat="${data.actor.flags.deyzeria.luck}"><i class="fa-solid fa-clover"></i> Luck: </button>
	//   <input name="flags.deyzeria.luck" type="text" value=${data.actor.flags.deyzeria.luck}>
	// </div?`)

	// document.getElementById("luckbutton").addEventListener("click", LuckPress);
  });
