ServerEvents.recipes((event) => {
    event.custom({
        type: "create_mechanical_spawner:spawner",
        fluid: {
          fluid: "kubejs:spawn_fluid_iron_golem",
          amount: 100,
        },
        mob: "minecraft:iron_golem",
        processingTime: 200
      });
})