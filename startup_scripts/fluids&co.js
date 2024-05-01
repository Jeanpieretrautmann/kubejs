StartupEvents.registry("fluid", (event) => {
    event
    .create("spawn_fluid_iron_golem")
    .thinTexture(0xdc0000)
    .bucketColor(0xdc0000)
    .displayName("Spawn Fluid Iron")
    .noBlock();
});