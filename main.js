var alfred = {
  extMan: null,
  init: function(extManager) {
    //
    // This function adds all the commands for working with alfred and 
    // setting up references to variables that are used.
    //
    alfred.extMan = extManager;
    alfred.extMan.getCommands().addCommand('Open in Alfred','Open the current entry in the Alfred browser.', alfred.openInAlfred);
    alfred.extMan.getExtCommand('addKeyboardShort').command('normal',false,false,false,'a', alfred.openInAlfred);
  },
  openInAlfred: function() {
    //
    // This command will open the current cursor in the Alfred browser.
    //
    // First, get the current cursor:
    //
    var cursor = alfred.extMan.getExtCommand('getCursor').command();

    //
    // Use AppleScript command line to open the cursor in Alfred.
    //
    alfred.extMan.getLocalFS().runCommandLine('osascript -e \'tell application "Alfred 4" to browse "' + cursor.entry.dir + '/' + cursor.entry.name + '" \'');
  }
};
return(alfred);
