ItemEvents.rightClicked((event) => {
if (event.item.id == "kubejs:example_item") {
    event.player.tell("Oh no! It looks like you need to use Example Item!");
  
} else {
    event.player.tell("hello world");
}

});