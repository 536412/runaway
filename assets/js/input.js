// This file is to map all the keycontrols of the game, if you want to make any edits to controls you make them here


class Keyboard {
    constructor() {
      throw new Error("Class 'Key' should be used as a static Class. Do not instantiate!"); // If you make a new class out of keyboard, this error will pop up, use only as a static class
    }
    static setHandlers() {
      window.addEventListener(
        'keydown',
        (e) => {
          if (e.defaultPrevented) return;
          let key = null;
          let handled = false;
          if (e.key !== undefined) {
            key = e.code.toKeyCode();
            Keyboard.keyDown(key);
            handled = true;
          } else if (e.keyCode !== undefined) {
            key = e.keyCode;
            Keyboard.keyDown(key);
            handled = true;
          } else if (e.which) {
            key = e.which;
            Keyboard.keyDown(key);
            handled = true;
          }
          if (handled) {
            e.preventDefault();
          }
        },
        false
      );
      window.addEventListener(
        'keyup',
        (e) => {
          if (e.defaultPrevented) return;
          let key = null;
          let handled = false;
          if (e.key !== undefined) {
            key = e.code.toKeyCode();
            Keyboard.keyUp(key);
            handled = true;
          } else if (e.keyCode !== undefined) {
            key = e.keyCode;
            Keyboard.keyUp(key);
            handled = true;
          } else if (e.which) {
            key = e.which;
            Keyboard.keyUp(key);
            handled = true;
          }
          if (handled) {
            e.preventDefault();
          }
        },
        false
      );
    }
    static keyDown(code) {
      switch (code) {
        case KEY.LEFT:
          keyLeft = true;
          break;
        case KEY.RIGHT:
          keyRight = true;
          break;
        case KEY.UP:
          keyFaster = true;
          break;
        case KEY.DOWN:
          keySlower = true;
          break;
        case KEY.A:
          keyLeft = true;
          break;
        case KEY.D:
          keyRight = true;
          break;
        case KEY.W:
          keyFaster = true;
          break;
        case KEY.S:
          keySlower = true;
          break;
      }
    }
    static keyUp(code) {
      switch (code) {
        case KEY.LEFT:
          keyLeft = false;
          break;
        case KEY.RIGHT:
          keyRight = false;
          break;
        case KEY.UP:
          keyFaster = false;
          break;
        case KEY.DOWN:
          keySlower = false;
          break;
        case KEY.A:
          keyLeft = false;
          break;
        case KEY.D:
          keyRight = false;
          break;
        case KEY.W:
          keyFaster = false;
          break;
        case KEY.S:
          keySlower = false;
          break;
      }
    }
   }