ServerEvents.recipes((event) => {

    event.recipes.create.mixing(Fluid.of("kubejs:spawn_fluid_iron_golem", 250), [
        Fluid.of("minecraft:water", 200),
        Fluid.of("", 50),
        "3x vegandelight:salt",
      ]).heated;


})