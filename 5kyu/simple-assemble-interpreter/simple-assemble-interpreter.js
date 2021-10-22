class Asmb {
  constructor() {
    this.vars = {};
  }

  mov(x, y) {
    // check if the variable already exists and update or create
    if (this.vars.hasOwnProperty(y)) {
      this.vars[x] = this.vars[y];
    } else {
      this.vars[x] = +y;
    }
    return this;
  }

  inc(x) {
    // check if the variable already exists and update or create
    if (this.vars.hasOwnProperty(x)) {
      this.vars[x] += 1;
    } else {
      this.vars[x] = 1;
    }
    return this;
  }

  dec(x) {
    // check if the variable already exists and update or create
    if (this.vars.hasOwnProperty(x)) {
      this.vars[x] -= 1;
    } else {
      this.vars[x] = 0;
    }
    return this;
  }
}

function simple_assembler(program) {
  let asm = new Asmb();

  for (let i = 0; i < program.length; i++) {
    let cmd = program[i].split(' ');
    switch (cmd[0]) {
      case 'mov':
        asm.mov(cmd[1], cmd[2]);
        break;
      case 'inc':
        asm.inc(cmd[1]);
        break;
      case 'dec':
        asm.dec(cmd[1]);
        break;
      case 'jnz':
        let x, y;
        // find x
        if (asm.vars.hasOwnProperty(cmd[1])) {
          x = asm.vars[cmd[1]];
        } else {
          x = cmd[1];
        }
        // find y
        if (asm.vars.hasOwnProperty(cmd[2])) {
          y = asm.vars[cmd[2]];
        } else {
          y = cmd[2];
        }

        if (x != 0) {
          i += y - 1;
        }

        break;
    }
  }

  return asm.vars;
}
