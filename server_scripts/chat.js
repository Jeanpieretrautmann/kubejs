PlayerEvents.chat((event) => {
    if (event.message.trim().toLowerCase() == 'home') {
    event.player.teleportTo = '-236.59 64.88 -42.51';
    }
});