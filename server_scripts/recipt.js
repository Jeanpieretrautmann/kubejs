ServerEvents.recipes((event) => {
    event.shapeless("kubejs:example_item", [
        "minecraft:emerald",
        "kubejs:netherite_stick"
      ]);


      event.shaped('kubejs:createve_sword', [// arg 1: output
    ' N ', 
    ' N ', // arg 2: the shape (array of strings)
    ' S '  
  ], {
    S: 'kubejs:netherite_stick', 
    N: 'minecraft:netherite_ingot'
  }
);

event.shaped('kubejs:netherite_stick', [// arg 1: output
'   ', 
' # ', // arg 2: the shape (array of strings)
' # '  
], {
'#': 'minecraft:netherite_ingot'
}
);
});