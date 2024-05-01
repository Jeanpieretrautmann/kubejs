StartupEvents.registry('item', e=> {

    e.create('example_item').texture('kubejs:item/example_item').maxStackSize(1);
    e.create('netherite_stick').texture('kubejs:item/netherite_stick');

    e.create('createve_sword', 'sword').tier('test').attackDamageBaseline(9999).texture('kubejs:item/netherite_sword');
    

    e.create('red_emerald').texture('kubejs:item/red_emerald').maxStackSize(1);
});

ItemEvents.toolTierRegistry(event => {
  event.add('tier_id', tier => {
    tier.uses = 250
    tier.speed = 9.0
    tier.attackDamageBonus = 3.0
    tier.level = 2
    tier.enchantmentValue = 14
    tier.repairIngredient = '#forge:ingots/iron'
  })
})
