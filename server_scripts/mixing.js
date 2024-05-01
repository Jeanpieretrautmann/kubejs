ServerEvents.recipes((event) => {

    event.recipes.create.mixing(Fluid.of("kubejs:spawn_fluid_iron_golem", 250), [
        Fluid.of("minecraft:water", 200),
        Fluid.of("minecraft:lava", 50),
        "kubejs:netherite_stick"
      ]).heated;


})